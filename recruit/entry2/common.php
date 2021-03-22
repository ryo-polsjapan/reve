<?php
//******************************************************************************
//* SYSTEM ID:shibuyagals
//* ----------------------------------------------------------------------------
//* init.php / 初期共通処理
//* ----------------------------------------------------------------------------
//* History: 2010.08.25 @Daijirou 'varutane' Doumi
//******************************************************************************
	ob_start();

	mb_language("ja");
	mb_internal_encoding("UTF-8");
	mb_http_input("UTF-8");
	mb_http_output("UTF-8");

	mb_convert_variables("utf-8", "auto", $_GET);
	mb_convert_variables("utf-8", "auto", $_POST);

	// 設定ファイル読み込み
	//require_once("../vote/config/config.php");
	//require_once("../vote/config/db.config.php");
	//require_once("../vote/config/sql.regist.php");
	//require_once("../vote/class/db.php");
	//require_once("../vote/config/sql.config.php");
	//require_once("../vote/class/useragent.php");
	//require_once("../vote/class/class.pref.php");

	//require_once("include/class.jphpmailer.php");
	//require_once("include/class.actmail.php");

	//ユーザーAGENT インスタンス生成
	//$objUA = new UserAgent();
	//$uagent = $objUA->agent;
	// Mobile：PC判定
	//if($uagent != PC){
		// 個体識別番号取得
	//	$uid = $objUA->getid();
		// DBClass インスタンス生成
	//	$objDB = new DB(url,user,pass,db);
	//} else {
	//	echo "PCでは使用できません";
		
	//}


	
//******************************************************************************
//*
//*
//*
//******************************************************************************
	define('SERVICE_START_Y', '1920');
	define('SERVICE_START_M', '03');
	define('SERVICE_END_Y', '2010');
	define('SERVICE_END_M', '04');
	define('_CST_MB_KANA1',	'ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ');
	define('_CST_MB_HURIKANA1','をぁぃぅぇぉゃゅょっーあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ 　');

//**************************************************************************
// 関数
//**************************************************************************

	function getOutData($detail,$list0,$list1,&$addlist){

		$cnt = count($detail[1]);
		if(count($detail[0]) > count($detail[1])){$cnt = count($detail[0]);}
		//緊急の場合リスト作成
		for($i=1;$i<=$cnt;$i++){
			if(count($detail[0]) >= $i){
				if(array_search($i, $list0) === false){
					$check0 = "";
				}else{
					$check0 = " checked";
				}
				$addlist[0] .= "<tr><td><input type=\"checkbox\" name=\"list0[]\" value=\"$i\" $check0></td><td>" .$detail[0][$i] ."</td></tr>\n";
			}else{$addlist[0] .= "<tr><td colspan=\"2\">&nbsp</td></tr>";}
			if(count($detail[1]) >= $i){
				if(array_search($i, $list1) === false){
					$check1 = "";
				}else{
					$check1 = " checked";
				}
				$addlist[1] .= "<tr><td><input type=\"checkbox\" name=\"list1[]\" value=\"$i\" $check1></td><td>" .$detail[1][$i] ."</td></tr>\n";
			}else{$addlist[1] .= "<tr><td colspan=\"2\">&nbsp</td></tr>";}
		}

	}

//**************************************************************************
// 関数
//**************************************************************************

	function _getOutData($detail,&$addlist){

		$cnt = count($detail[1]);
		if(count($detail[0]) > count($detail[1])){$cnt = count($detail[0]);}
		//緊急の場合リスト作成
		for($i=1;$i<=$cnt;$i++){
			if(count($detail[0]) >= $i){
				$addlist[0] .= "<tr><td><input type=\"checkbox\" name=\"list0[]\" value=\"$i\" $check0></td><td>" .$detail[0][$i] ."</td></tr>\n";
			}else{$addlist[0] .= "<tr><td colspan=\"2\">&nbsp</td></tr>";}
			if(count($detail[1]) >= $i){
				$addlist[1] .= "<tr><td><input type=\"checkbox\" name=\"list1[]\" value=\"$i\" $check1></td><td>" .$detail[1][$i] ."</td></tr>\n";
			}else{$addlist[1] .= "<tr><td colspan=\"2\">&nbsp</td></tr>";}
		}

	}

//******************************************************************************
//*
//*	array_keySearch (keyを元にチェック)
//*
//******************************************************************************
function array_keySearch($search_array,$key){

	$values = "";

	if (array_key_exists($key, $search_array)) {
		$values = $search_array[$key];
	}

	return $values;
}
//**************************************************************************
// 各日付取得
//**************************************************************************

function setDate(&$dateAry,$year,$month,$day){
	//期間(From)生成
	$dateAry[0] = date('Y/m/d',mktime(0,0,0,$month,'01',$year));
	//期間(From)生成
	$dateAry[1] = date('Y/m/d',mktime(0,0,0,$month,$day,$year));
	//期間(From)月末日算出
	$dateAry[2] = date('Y/m/d',mktime(0,0,0,$month+1,'01'-1,$year));
}
//**************************************************************************
// 日数取得
//**************************************************************************

function getDays($from,$to){

	$f = explode("/", $from);
	$t = explode("/", $to);
	$result = ((mktime(0,0,0,$t[1],$t[2],$t[0]) - mktime(0,0,0,$f[1],$f[2],$f[0])) / 86400) + 1;

	return $result;

}
//**************************************************************************
// 年数取得
//**************************************************************************

function getYears($from,$to){

	// 年数取得
	if($from != $to){
		$cnt = 0;
		while($from < $to){
			$cnt++;
			//1年加算
			$f = explode("/", $from);
			$from = date('Y/m/d',mktime(0,0,0,$f[1],$f[2],$f[0]+1));
			//1年加算
			$f = explode("/", $from);
			$from = date('Y/m/d',mktime(0,0,0,$f[1],$f[2]-1,$f[0]));
		}
	}else{
		$cnt = 1;
	}

	return $cnt;

}
//**************************************************************************
// 日付生成
//**************************************************************************

function createDate($year,$month,$day){

	$result = "";

	if((empty($year) && empty($month) && empty($day)) == false){
		$result = $year ."/" .$month ."/" .$day;
	}

	return $result;

}
//**************************************************************************
// 日付シフト
//**************************************************************************

function shiftDate($date,$type,$dec,$cnt){

	$result = "";

	$d = explode("/", $date);
	if($type == "y"){
		if($dec == "+"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1],$d[2],$d[0] + $cnt));
		}elseif($dec == "-"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1],$d[2],$d[0] - $cnt));
		}
	}elseif($type == "m"){
		if($dec == "+"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1] + $cnt,$d[2],$d[0]));
		}elseif($dec == "-"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1] - $cnt,$d[2],$d[0]));
		}
	}elseif($type == "d"){
		if($dec == "+"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1],$d[2] + $cnt,$d[0]));
		}elseif($dec == "-"){
			$result = date('Y/m/d',mktime(0,0,0,$d[1],$d[2] - $cnt,$d[0]));
		}
	}

	return $result;

}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function getCmbPref($pref_code="") {

	$p = new Prefectures();
	$pref = $p->prefectures();
	
	$ret  = "<select name=\"pref\" id=\"pref\">\n";
	$ret .= "<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;</option>\n";
	for ($i=0; $i<count($pref); $i++) {
		if ($pref_code == $i) {
			$selected = " selected";
		} else {
			$selected = "";
		}
		$ret .= "<option value=\"".($i+1)."\" $selected>".$pref[$i]."</option>\n";
	}
	$ret .= "</select>\n";

	return $ret;
}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function getPrefName($pref_code="") {

	$p = new Prefectures();
	return $p->prefectures_name($pref_code);

}
//******************************************************************************
//*
//*	日付のフォーマット変更処理
//*-----------------------------------------------------------------------------
//*	引数：$arr['adv_start']		 広告掲載開始日
//*	引数：$arr['adv_end']			 広告掲載終了日
//*-----------------------------------------------------------------------------
//*	戻り値: YYYY年MM月DD日　～　YYYY年MM月DD日
//******************************************************************************
function getYrMmDd($str,$end) {

	$dt = substr($str,0,4)."年".substr($str,4,2)."月".substr($str,6,2)."日";
	$dt .= "～".substr($end,0,4)."年".substr($end,4,2)."月".substr($end,6,2)."日";

	return $dt;
}
//******************************************************************************
//*
//*	BR2NL
//*-----------------------------------------------------------------------------
//*-----------------------------------------------------------------------------
//*	戻り値: 
//******************************************************************************
function br2nl($string){
	//改行コードのリスト
	$aBreakTags = array(
	"<br>",
	"<BR>",
	"<br />",
	"<BR />",
	"<Br>",
	"<Br />",
	"<bR>",
	"<bR />"
	);
	return str_replace($aBreakTags ,"" , $string );
}
//******************************************************************************
// * 2つの日付の差を求める関数
// * $year1 1つのめ日付の年
// * $month1 1つめの日付の月
// * $day1 1つめの日付の日
// * $year2 2つのめ日付の年
// * $month2 2つめの日付の月
// * $day2 2つめの日付の日
//******************************************************************************
function compareDate($year1, $month1, $day1, $year2, $month2, $day2) {
    $dt1 = mktime(0, 0, 0, $month1, $day1, $year1);
    $dt2 = mktime(0, 0, 0, $month2, $day2, $year2);
    $diff = $dt1 - $dt2;
    $diffDay = $diff / 86400;//1日は86400秒
    return $diffDay;
}
//******************************************************************************
/**
 * 年月日と加算日からn日後、n日前を求める関数
 * $year 年
 * $month 月
 * $day 日
 * $addDays 加算日。マイナス指定でn日前も設定可能
 */
//******************************************************************************
function computeDate($year, $month, $day, $addDays) {
    $baseSec = mktime(0, 0, 0, $month, $day, $year);//基準日を秒で取得
    $addSec = $addDays * 86400;//日数×１日の秒数
    $targetSec = $baseSec + $addSec;
    //return date("Y-m-d H:i:s", $targetSec);
    return date("m/d", $targetSec);
}
//******************************************************************************
/**
 * 年月日と加算日からn日後、n日前を求める関数
 * $year 年
 * $month 月
 * $day 日
 * $addDays 加算日。マイナス指定でn日前も設定可能
 */
//******************************************************************************
function computeDateArr($year, $month, $day, $addDays) {
    $baseSec = mktime(0, 0, 0, $month, $day, $year);//基準日を秒で取得
    $addSec = $addDays * 86400;//日数×１日の秒数
    $targetSec = $baseSec + $addSec;
    //return date("Y-m-d H:i:s", $targetSec);
    return array("yyyy" => date("Y", $targetSec),
    	"mm" => date("m", $targetSec),
    	"dd" => date("d", $targetSec));
}

//******************************************************************************
//*
//*
//*
//******************************************************************************
function getCmbYY($elm="yy", $sel_yy="", $action="") {

	$ret  = "<select name=\"".$elm."\" ".$action.">\n";
//	$ret .= "<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;</option>\n";
	for ($i=SERVICE_START_Y; $i<=SERVICE_END_Y; $i++) {
		if ($sel_yy == $i) 
			$selected = " selected";
		else
			$selected = "";

		$ret .= "<option value=\"$i\" $selected>$i</option>\n";
	}
	$ret .= "</select>\n";

	return $ret;
}

//******************************************************************************
//*
//*
//*
//******************************************************************************
function getCmbMM($elm="mm", $sel_mm="", $action="") {

	$ret  = "<select name=\"".$elm."\" ".$action.">\n";
//	$ret .= "<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;</option>\n";

	for ($i=0; $i<12; $i++) {
		$buff = str_pad($i+1, 2, "0", STR_PAD_LEFT);
		if ($buff == $sel_mm) 
			$selected = " selected";
		else
			$selected = "";

		$ret .= "<option value=\"".$buff."\" $selected>".$buff."</option>\n";
	}
	$ret .= "</select>\n";

	return $ret;
}

//******************************************************************************
//*
//*
//*
//******************************************************************************
function getCmbDD($elm="dd", $sel_dd="") {

	$ret  = "<select name=\"".$elm."\">\n";
//	$ret .= "<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;</option>\n";

	for ($i=0; $i<31; $i++) {
		$buff = str_pad($i+1, 2, "0", STR_PAD_LEFT);
		if ($buff == $sel_dd) 
			$selected = " selected";
		else
			$selected = "";

		$ret .= "<option value=\"".$buff."\" $selected>".$buff."</option>\n";
	}
	$ret .= "</select>\n";

	return $ret;
}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function getRdoSex($sel="") {

	$ret  = "";
	$ret .= "<input type=\"radio\" value=\"1\" name=\"sex\" ";
	if($sel == "1"){
		$ret .= "checked = \"checked\" ";
	}
	$ret .= "/>男性\n";
	$ret .= "<input type=\"radio\" value=\"2\" name=\"sex\" ";
	if($sel=="2"){
		$ret .= "checked = \"checked\" ";
	}
	$ret .= "/>女性\n";
	
	return $ret;
}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function getSexName($sel="") {

	if($sel == "1"){
		return "男性";
	} else if($sel=="2"){
		return "女性";
	}
}
//******************************************************************************
//*
//*契約種別
//*
//******************************************************************************
function getRdoContractType($sel="") {

	$ret  = "";
	$ret .= "<input type=\"radio\" value=\"1\" name=\"contracttype\" ";
	if($sel == "1"){
		$ret .= "checked = \"checked\" ";
	}
	$ret .= "/>法人\n";
	$ret .= "<input type=\"radio\" value=\"2\" name=\"contracttype\" ";
	if($sel=="2"){
		$ret .= "checked = \"checked\" ";
	}
	$ret .= "/>個人\n";
	
	return $ret;
}
//******************************************************************************
//*
//*契約種別
//*
//******************************************************************************
function getContractTypeName($sel="") {

	if($sel == "1"){
		return "法人";
	} else if($sel=="2"){
		return "個人";
	}
}

//******************************************************************************
//*
//*
//*
//******************************************************************************
function getRdoGirls($name, $arr_item) {

	global $objDB,$SELECT_ALL_GIRL;
	
	$ret  = "<select name=\"".$name."\" id=\"".$name."\">\n";
	$ret .= "<option value=\"\">&nbsp;&nbsp;&nbsp;&nbsp;</option>\n";
	for ($i=0; $i<count($arr_item); $i++) {
		$ret .= "<option value=\"".$arr_item[$i]['gals_num']."\" $selected>".$arr_item[$i]['gals_name']."</option>\n";
	}
	$ret .= "</select>\n";

	return $ret;
}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function getGirlName($gals_num) {

	global $objDB,$SELECT_GIRL_NAME;
	
	if($gals_num=="") return "";
	// クエリ発行
	$result = $objDB->query(sprintf($SELECT_GIRL_NAME,$gals_num));
	// データ取得
	$objDB->fetchAssoc1($result, $arr_item);

	return $arr_item[0]['gals_name'];
	
}
//**************************************************************************
// 登録フォームでの入力チェック
//**************************************************************************
// --Start-- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更
//function validate($data,$field_title){
function validate($data, $field_title, &$error=array()){
// ---End--- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更

	global $C_H_SCHOOL_YEAR, $C_H_KNOW;

	$errmes = "";
	//-------------------------------------
	//チェック
	//-------------------------------------
	for($i=0;$i<sizeof($field_title);$i++){
		// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
		$error[$field_title[$i][2]] = "";
		// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
		if($field_title[$i][1]=="sel"){
			//if(!isset($data[$field_title[$i][2]])){
			if(!isset($data[$field_title[$i][2]]) || empty($data[$field_title[$i][2]]) ){
				$errmes .= $field_title[$i][0]."を選択してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$field_title[$i][2]] = $field_title[$i][0] ."を選択してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
		} else if($field_title[$i][1]=="dt"){
			if(!checkdate($data[$field_title[$i][2].'_mm'],$data[$field_title[$i][2].'_dd'],$data[$field_title[$i][2].'_yy'])){
				$errmes .= "正しい".$field_title[$i][0]."を選択してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$field_title[$i][2]] = "正しい" .$field_title[$i][0] ."を選択してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
		// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更 TEL
		} else if($field_title[$i][1]=="tel"){
			if(!isset($data[$field_title[$i][2]]) || empty($data[$field_title[$i][2]]) ){
				$errmes .= $field_title[$i][0]."を入力してください。"."<br />\n";
				$error[$field_title[$i][1]] = $field_title[$i][0] ."を入力してください。";
			}elseif(!preg_match("/^[0-9]+$/", $data[$field_title[$i][2]])){
				$errmes .= $field_title[$i][0]."は半角数字で入力してください。"."<br />\n";
				$error[$field_title[$i][1]] = $field_title[$i][0]."は半角数字で入力してください。";
			}
		// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更 TEL
		} else if( $field_title[$i][1]=="school_year" ){
			end($C_H_SCHOOL_YEAR);
			$key = key($C_H_SCHOOL_YEAR);
			if( $data[$field_title[$i][1]] == $key )
			{
				if(!isset($data[$field_title[$i][2]]) || empty($data[$field_title[$i][2]]) )
				{
					$errmes .= $field_title[$i][0]."を入力してください。"."<br />\n";
					$error[$field_title[$i][1]] = $field_title[$i][0] ."を入力してください。";
				}
			}
			reset($C_H_SCHOOL_YEAR);
		} else if( $field_title[$i][1]=="know" ){
			if( isset($data[$field_title[$i][1]]) )
			{
				end($C_H_KNOW);
				$key = key($C_H_KNOW);
				$ary = array_search( $key, $data[$field_title[$i][1]] );
				if( $ary )
				{
					if(!isset($data[$field_title[$i][2]]) || empty($data[$field_title[$i][2]]) )
					{
						$errmes .= $field_title[$i][0]."を入力してください。"."<br />\n";
						$error[$field_title[$i][1]] = $field_title[$i][0] ."を入力してください。";
					}
				}
				reset($C_H_KNOW);
			}
		} else if($field_title[$i][1]==""){
			//チェックしない
		} else {
			$key = $field_title[$i][2];
			$val = $data[$field_title[$i][2]];
			if(!isset($val)||($val=="")||empty($val)){
				$errmes .= $field_title[$i][0]."を入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$field_title[$i][2]] = $field_title[$i][0] ."を入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			} else {
				if($field_title[$i][1] != ""){
					// --Start-- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更
					//$errmes .= fieldcheck($val ,$field_title[$i]);
					$errmes .= fieldcheck($val ,$field_title[$i], $error);
					// ---End--- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更
				}
			}
		}
	}
	return $errmes;
	
}
//**************************************************************************
// 登録フォームの情報設定
//**************************************************************************
// --Start-- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更
//function fieldcheck($data, $type=array()){
function fieldcheck($data, $type=array(), &$error=array()){
// ---End--- 2016.10.17 M.Ogawa@POLS Mod エラー出力仕様変更

	$errmes = "";
	$len = substr($type[1],2,strlen($type[1]));
	switch(substr($type[1],0,1)){
		case "z":	//全角チェック
			if(checkMB($data)){
				$errmes .= $type[0]."は全角で入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0] ."は全角で入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len != 0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "k":	//カナチェック
			if(!check_mb_kana($data)){
				$errmes .= $type[0]."は全角カナで入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."は全角カナで入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len!=0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "g":	//ひらがなチェック
			if(!check_mb_hirakana($data)){
				$errmes .= $type[0]."は全角ひらがなで入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."は全角ひらがなで入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len!=0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "n":	//数値チェック
			if(!preg_match("/^[0-9]+$/", $data)){
				$errmes .= $type[0]."は半角数字で入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."は半角数字で入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len != 0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "a":	//アルファベットチェック
			if(!preg_match("/^[a-zA-Z]+$/", $data)){
				$errmes .= $type[0]."は半角英字で入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."は半角英字で入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len!=0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "h":	//半角英数字チェック
			if(!preg_match("/^[a-zA-Z0-9]+$/", $data)){
				$errmes .= $type[0]."は半角英数字で入力してください。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."は半角英数字で入力してください。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			if($len!=0){
				switch(substr($type[1],1,1)){
				case "i":
					if(mb_strlen($data) > $len){
						$errmes .= $type[0]."は".$len."文字以内で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以内で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "e":
					if(mb_strlen($data) != $len){
						$errmes .= $type[0]."は".$len."文字で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				case "o":
					if(mb_strlen($data) < $len){
						$errmes .= $type[0]."は".$len."文字以上で入力してください。"."<br />\n";
						// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
						$error[$type[2]] = $type[0]."は".$len."文字以上で入力してください。";
						// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
					}
					break;
				default :
					break;
				}
			}
			break;
		case "m":	//メールアドレスチェック
			if(!checkEmail($data)){
			//if( !email_check($data) )
			//{
				$errmes .= $type[0]."が不正です。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."が不正です。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			$str = $data;
			break;

		case "y":	//メールアドレスチェック
			if(!checkEmail($data)){
			//if( !email_check($data) )
			//{
				$errmes .= $type[0]."が不正です。"."<br />\n";
				// --Start-- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
				$error[$type[2]] = $type[0]."が不正です。";
				// ---End--- 2016.10.17 M.Ogawa@POLS Add エラー出力仕様変更
			}
			break;
		default:
			break;
	}
	return $errmes;
		
}

//******************************************************************************
//*
//*
//*
//******************************************************************************
function redirect($to) {

	$schema = $_SERVER['SERVER_PORT'] == '443' ? 'https' : 'http';

	echo "$to.<br>";
	if (headers_sent()) {
		return false;
	} else {
    	header("HTTP/1.1 301 Moved Permanently");
		// header("HTTP/1.1 302 Found");
		// header("HTTP/1.1 303 See Other");
		header("Location: $to");
		exit();
	}
}
//******************************************************************************
//*
//*
//*
//******************************************************************************
function get_fingerprint()
{
    // 
    $fingerprint = 'dlsecretdl';

    if ( ! empty( $_SERVER['HTTP_USER_AGENT'] ) ) {
        $fingerprint .= $_SERVER['HTTP_USER_AGENT'];
    }
    if ( ! empty( $_SERVER['HTTP_ACCEPT_CHARSET'] ) ) {
        $fingerprint .= $_SERVER['HTTP_ACCEPT_CHARSET'];
    }
    $fingerprint .= session_id();
    return md5( $fingerprint );
}
//******************************************************************************
//* 
//*
//*
//******************************************************************************
function get_param($name) {

	if (isset($_GET[$name]))
		$result = $_GET[$name];
	else if (isset($_POST[$name]))
		$result = $_POST[$name];
	else
		$result = "";

	return $result;
}
//******************************************************************************
//* E-Mail Check
//*
//*
//******************************************************************************
function checkEmail($email,$antispam = false)
{
    if (!$email || !preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+([\.][a-z0-9-]+)+$/i",$email)){
        return false;
    }
    //if (!preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $email))
    //{
    //    return false;
    //}

    if ($antispam) {
        $email = str_replace("@", " at ", $email);
        $email = str_replace(".", " dot ", $email);
        return $email;
    } else {
        return true;
    }
}

function email_check($email)
{
    $arr = explode("@", $email);
    $domain = str_replace(array('[', ']'), "", array_pop($arr));
    //return checkdnsrr( $arr[1], 'MX' );
    return filter_var($email, FILTER_VALIDATE_EMAIL) &&
        (checkdnsrr($domain, 'MX') || checkdnsrr($domain, 'A') || checkdnsrr($domain, 'AAAA'));
}
//******************************************************************************
//*
//* 全角チェック
//*
//******************************************************************************
function checkMB( $str ) {

	if( ereg( "^[\x41-\x5A|\x61-\x7A|\x30-\x39]+$", $str ) ) {
//	if ( preg_match( "/^[\x81-\xFC]+$/", $str ) ) {
		return true;
	} else {
		return false;
	} 
}

//******************************************************************************
//*
//* 全角カナチェック
//*
//******************************************************************************
function check_mb_kana( $str ) {

	if(!preg_match("/^["._CST_MB_KANA1."]+$/u", $str)) {
		return false;
	}
	return true;
}

//******************************************************************************
//*
//* 全角かなチェック
//*
//******************************************************************************
function check_mb_hirakana( $str ) {

	if(!preg_match("/^[" ._CST_MB_HURIKANA1 ."]+$/u", $str)){
		return false;
	}
	return true;
}


function emp2str($val) {

	if (empty($val) || !isset($val))
		return "";
	else
		return $val;
}

function emp2int($val) {

	if (empty($val) || !isset($val))
		return "0";
	else
		return intval($val);
}


function check_handhone($email) {

	$hp_domain[] = "docomo.ne.jp";		// docomo
	$hp_domain[] = "softbank.ne.jp";	// softbank
	$hp_domain[] = ".vodafone.ne.jp";	// softbank(vodafone)
	$hp_domain[] = "ezweb.ne.jp";		// au
	$hp_domain[] = "ido.ne.jp";			// au(旧ido)
	$hp_domain[] = "pdx.ne.jp";			// willcom
	$hp_domain[] = "emnet.ne.jp";		// e-mobile

	for ($i=0; $i<count($hp_domain); $i++) {
		if (preg_match('/'.$hp_domain[$i].'$/', $email)) {
//		if (eregi($hp_domain[$i]."$", $email)) {
//			echo "keitai:".$email."...".$hp_domain[$i];
			return true;
			break;
		}
	}

	// 
	return false;

}
?>