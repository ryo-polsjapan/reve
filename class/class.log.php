<?php

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
//
//	Log作成クラス
//
//				2010/05/17 M.Ogawa
//
//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

class Log{

	public $Output;			//Log
	public $FilePath;		//FilePath

	function LogWrite($mode){

		//$pointer=fopen($this->FilePath, "a");
		$pointer=fopen($this->FilePath, $mode);
		flock($pointer, LOCK_EX);
		fwrite($pointer, $this->Output);
		flock($pointer, LOCK_UN);
		fclose($pointer);

	}

	function LogRead($mode){

		//$pointer = fopen($this->FilePath, "r");
		$pointer = fopen($this->FilePath, $mode);

		//ファイルの読み込み
		$load=fgets($pointer,4096) ;

		//ファイルを閉じる
		fclose ($pointer) ;

		return $load;

	}

}

?>