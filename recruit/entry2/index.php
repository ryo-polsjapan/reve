<?php

	//ini_set('display_errors',1);

	// 設定ファイル読み込み
	require_once("../../common.php");
	require_once("../../config/conf.php");

//**************************************************************************
// 予約フォーム呼び出し
//**************************************************************************
	function _viewTop($errmes="")
	{

		global $C_H_PREF, $C_H_SEX;

		$self = basename(__FILE__);
		require "./tpl/index_f.tpl";
	}

//**************************************************************************
// 予約確認フォーム呼び出し
//**************************************************************************
	function _viewCon()
	{

		global $_REQUEST, $strContorl, $C_H_PREF, $C_H_SEX;

		extract($_REQUEST);

		$self = basename(__FILE__);

		$error = array();
		$errmes = validate($_REQUEST, $strContorl[$type], $error);

		if($errmes != ""){
			require "./tpl/index_f.tpl";
		} else {
			require "./tpl/index_c.tpl";
		}

	}

//**************************************************************************
// 予約確認送信呼び出し
//**************************************************************************
	function _viewRes()
	{

		global $_REQUEST, $strContorl, $strMail, $C_H_PREF, $C_H_SEX;

		extract($_REQUEST);

		require_once("../../class/class.mail.php");
		require_once("../../class/class.log.php");

		/**************************************************************************/
		/*	メール送信
		/**************************************************************************/

		// メール本文作成
		$mailMessage = "";
		$logMessage = "";
		$mailMessage .= $strMail[$type]['HeadMail'] . "\r\n";
		$mailMessage .= "------------------------------------------------\r\n";
		$i = 0;
		//foreach($_POST as $key=>$var) {
		for($i=0;$i<count($strContorl[$type]);$i++){
			$detail = "";
			switch( $strContorl[$type][$i][2] )
			{
				case 'protection':
					$detail = "同意する";
					break;
				case 'sex':
					$detail = $C_H_SEX[$_POST[$strContorl[$type][$i][2]]];
					break;
				case 'pref':
					$detail = $C_H_PREF[$_POST[$strContorl[$type][$i][2]]];
					break;
				default:
					$detail = $_POST[$strContorl[$type][$i][2]];
					break;
			}
			$mailMessage .= "[".$strContorl[$type][$i][0]."] ".$detail ."\n";
			$logMessage .= "," .str_replace(array("\r", "\n", "\r\n"),"",$detail);
		}
		$mailMessage .= "------------------------------------------------\r\n";
		$mailMessage .= "送信日時：".date( "Y/m/d (D) H:i:s", time() )."\r\n";
		$mailMessage .= "ホスト名：".getHostByAddr(getenv('REMOTE_ADDR'))."\n\n";

		// MailClass インスタンス生成
		$obj = new Mail();

		// お客様へ送信
		$obj->From = $strMail[$type]['FromAddress'];
		$obj->FromName = $strMail[$type]['FromName'];
		$obj->To = $mail;
		$obj->Subject = $strMail[$type]['Subject'];
		$obj->Message = $mailMessage;
		$obj->ReturnMail = $strMail[$type]['ReAddress'];
		$obj->Language = 'Japanese';
		$obj->InternalEnc = 'UTF-8';

		// Mail送信
		$result = $obj->MailTransfer();

		// 管理者へ送信
		$obj->To = $strMail[$type]['ToAddress'];
		//$obj->Cc = "";
		//$obj->Bcc = "";

		// Mail送信
		$result = $obj->MailTransfer();

		// Object解放
		unset( $obj );

		/**************************************************************************/
		/*	ログ生成
		/**************************************************************************/

		// LogClass インスタンス生成
		$obj = new Log();

		// FileName設定
		$FileName = realpath( "./" ) . "/log/" . date("Ym") . ".log";

		// Log書き込み
		$obj->FilePath = $FileName;
		$obj->Output = date( "Y/m/d (D) H:i:s", time() ) . " | " . $result . $logMessage . "\r\n";
		$obj->LogWrite("a");

		// Object解放
		unset( $obj );

		header("Location: " .$strMail[$type]['HP_THANKS_C']);

	}

//**************************************************************************
// メソッド判定部
//**************************************************************************
	if(!isset($mode)){
		$mode = $_REQUEST['m'];
	}

	switch($mode){
		case "res":
			_viewRes();
			break;
		case "con":
			_viewCon();
			break;
		default:
			_viewTop();
			break;
	}


?>