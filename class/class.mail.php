<?php

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
//
//	Mail送信クラス
//
//				2010/05/19 M.Ogawa
//
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

class Mail{
	
	public $From;			//送信元
	public $FromName;		//送信元名
	public $To;			//To
	public $Cc;			//Cc
	public $Bcc;			//BCc
	public $Subject;		//件名
	public $Message;		//本文
	public $ReturnMail;		//非送信の場合、返信先
	public $Language;		//言語 [ ※ 例) ja ]
	public $InternalEnc;		//内部エンコード
	
	function MailTransfer(){
		
		$header = '';		//ヘッダー情報
		$body = '';		//ボディ情報
		
		//言語・内部エンコード設定
		mb_language($this->Language);
		mb_internal_encoding($this->InternalEnc);
		
		//ヘッダー情報設定
		if( empty($this->FromName) )
		{
			$header = sprintf("From: %s\r\n", $this->From);
		}else{
			$header = sprintf("From: %s<%s>\r\n", mb_encode_mimeheader(mb_convert_encoding($this->FromName,"ISO-2022-JP","AUTO")), $this->From);
		}
		if( !empty($this->Cc) )
		{
			$header .= "Cc: $this->Cc\r\n";
		}
		if( !empty($this->Bcc) )
		{
			$header .= "Bcc: $this->Bcc\r\n";
		}
		$header .= "Reply-To: $this->ReturnMail\r\n";
		$header .= "Content-Type: text/plain; charset=iso-2022-jp\nX-Mailer: PHP/".phpversion();
		$header .= "\r\n";
		
		//Mail本文情報設定
		$body .= $this->Message . "\r\n";
		
		//Mail送信
		if (ini_get('safe_mode')) {
			$result = mb_send_mail($this->To,$this->Subject,$body,$header);
		}else{
			$result = mb_send_mail($this->To,$this->Subject,$body,$header, '-f' . $this->ReturnMail);
		}
		
		//Mail送信有無
		if ($result) {
			return true;
		}else{
			return false;
		}
	}

	function MailTmpTransfer(){
		
		$header = '';		//ヘッダー情報
		$body = '';			//ボディ情報
		
		//言語・内部エンコード設定
		mb_language($this->Language);
		mb_internal_encoding($this->InternalEnc);
		
		//ヘッダー情報設定
		$header = "From: $this->From\r\n";
		$header .= "MIME-Version: 1.0\r\n";
		$header .= "Content-Type: multipart/mixed; boundary=\"__PHPRECIPE__\"\r\n";
		$header .= "\r\n";
		
		//Mail本文情報設定
		$body = "--__PHPRECIPE__\r\n";
		$body .= "Content-Type: text/plain; charset=\"ISO-2022-JP\"\r\n";
		$body .= "\r\n";
		$body .= $this->Message . "\r\n";
		$body .= "--__PHPRECIPE__\r\n";
		
		//Mail送信
		if (ini_get('safe_mode')) {
			$result = mb_send_mail($this->To,$this->Subject,$body,$header);
		}else{
			$result = mb_send_mail($this->To,$this->Subject,$body,$header, '-f' . $this->ReturnMail);
		}
		
		//Mail送信有無
		if ($result) {
			return true;
		}else{
			return false;
		}
	}
}

?>