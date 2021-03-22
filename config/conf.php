<?php

	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
	//
	// 定数
	//
	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

	// Main URL
	//define('MainUrl','http://www.reve-co.jp/');
	define('MainUrl','http://www.polsjapan.net/reve/test/');

	// Main Mail
	define('MainMail','info@reve-co.jp');

	// Company
	define('Company','株式会社REVE');

	//Mail言語
	define('MLanguage','ja');

	//MailEncoding
	define('MEncoding','SJIS');

	//送信完了文言
	define('TMail','送信完了しました。');

	//非送信文言
	define('FMail','送信できませんでした。');

	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
	//
	// Mail情報
	//
	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

	$strMail = array(
		// お問い合わせフォーム
		1 => array(
			'FromAddress' => MainMail,
			'FromName' => Company,
			'ToAddress' => 'info@reve-co.jp',
			'ReAddress' => 'info@reve-co.jp',
			'Subject' => Company .' | お問い合わせ',
			'HeadMail' => '「' .Company .'」 お問い合わせフォームより送信されました。',
			'HP_THANKS_C' => MainUrl .'contact/thanks.html'
		),
		// エントリーフォーム(新卒)
		2 => array(
			'FromAddress' => MainMail,
			'FromName' => Company,
			'ToAddress' => 'info@reve-co.jp',
			'ReAddress' => 'info@reve-co.jp',
			'Subject' => Company .' | エントリーフォーム(新卒)',
			'HeadMail' => '「' .Company .'」 エントリーフォーム(新卒)フォームより送信されました。',
			'HP_THANKS_C' => MainUrl .'recruit/entry/thanks.html'
		),
		// エントリーフォーム(中途)
		3 => array(
			'FromAddress' => MainMail,
			'FromName' => Company,
			'ToAddress' => 'info@reve-co.jp',
			'ReAddress' => 'info@reve-co.jp',
			'Subject' => Company .' | エントリーフォーム(中途)',
			'HeadMail' => '「' .Company .'」 エントリーフォーム(中途)フォームより送信されました。',
			'HP_THANKS_C' => MainUrl .'recruit/entry2/thanks.html'
		),
	);

	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
	//
	// その他
	//
	//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

	// 必須項目入力チェック用（お問い合わせ）
	$strContorl = array(
		// お問い合わせフォーム
		1 => array(
			array('お名前','c','name'),
			array('フリガナ','k','kana'),
			array('電話番号1','n','tel1'),
			array('電話番号2','n','tel2'),
			array('電話番号3','n','tel3'),
			array('メールアドレス','m','mail'),
			array('お問い合わせ内容','c','contact'),
			array('個人情報の取扱について','c','protection'),
		),
		// エントリーフォーム(新卒)
		2 => array(
			array('お名前','c','name'),
			array('フリガナ','k','kana'),
			array('性別','sel','sex'),
			array('生年月日(年)','sel','birth_year'),
			array('生年月日(月)','sel','birth_month'),
			array('生年月日(日)','sel','birth_day'),
			array('郵便番号1','n','zip_code1'),
			array('郵便番号2','n','zip_code2'),
			array('都道府県','sel','pref'),
			array('ご住所','c','address'),
			array('電話番号1','n','tel1'),
			array('電話番号2','n','tel2'),
			array('電話番号3','n','tel3'),
			array('携帯電話番号1','n','mobile1'),
			array('携帯電話番号2','n','mobile2'),
			array('携帯電話番号3','n','mobile3'),
			array('メールアドレス','m','mail'),
			array('学校名','c','school_name'),
			array('卒業/卒業見込み','c','school_graduate'),
			array('ご応募の動機','c','contact'),
			array('個人情報の取扱について','c','protection'),
		),
		// エントリーフォーム(中途)
		3 => array(
			array('お名前','c','name'),
			array('フリガナ','k','kana'),
			array('性別','sel','sex'),
			array('生年月日(年)','sel','birth_year'),
			array('生年月日(月)','sel','birth_month'),
			array('生年月日(日)','sel','birth_day'),
			array('郵便番号1','n','zip_code1'),
			array('郵便番号2','n','zip_code2'),
			array('都道府県','sel','pref'),
			array('ご住所','c','address'),
			array('電話番号1','n','tel1'),
			array('電話番号2','n','tel2'),
			array('電話番号3','n','tel3'),
			array('携帯電話番号1','n','mobile1'),
			array('携帯電話番号2','n','mobile2'),
			array('携帯電話番号3','n','mobile3'),
			array('メールアドレス','m','mail'),
			array('会社名','c','company_name'),
			array('部署','c','company_department'),
			array('役職','c','company_position'),
			array('ご応募の動機','c','contact'),
			array('個人情報の取扱について','c','protection'),
		),
	);

	// お問い合わせ種別
	$C_H_SEX = array(
		1 => "男性",
		2 => "女性"
	);

	// 都道府県
	$C_H_PREF = array(
		1 => "北海道",
		2 => "青森県",
		3 => "岩手県",
		4 => "宮城県",
		5 => "秋田県",
		6 => "山形県",
		7 => "福島県",
		8 => "茨城県",
		9 => "栃木県",
		10 => "群馬県",
		11 => "埼玉県",
		12 => "千葉県",
		13 => "東京都",
		14 => "神奈川県",
		15 => "新潟県",
		16 => "富山県",
		17 => "石川県",
		18 => "福井県",
		19 => "山梨県",
		20 => "長野県",
		21 => "岐阜県",
		22 => "静岡県",
		23 => "愛知県",
		24 => "三重県",
		25 => "滋賀県",
		26 => "京都府",
		27 => "大阪府",
		28 => "兵庫県",
		29 => "奈良県",
		30 => "和歌山県",
		31 => "鳥取県",
		32 => "島根県",
		33 => "岡山県",
		34 => "広島県",
		35 => "山口県",
		36 => "徳島県",
		37 => "香川県",
		38 => "愛媛県",
		39 => "高知県",
		40 => "福岡県",
		41 => "佐賀県",
		42 => "長崎県",
		43 => "熊本県",
		44 => "大分県",
		45 => "宮崎県",
		46 => "鹿児島県",
		47 => "沖縄県"
	);

?>
