<!doctype html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>新卒採用　株式会社 REVE</title>
  <meta name="description" content="REVEは複数の保険会社からお客様のライフスタイルに合った保険商品をご提供いたします。" />
  <meta name="keywords" content="REVE,東京 保険代理店,町田 保険代理店" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="stylesheet" href="../../css/normalize.min.css">
  <link rel="stylesheet" href="../../css/main.css">
  <link rel="stylesheet" href="../../css/modal.css">
  <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
  <script src="../../js/jquery-1.11.2.min.js"></script>
  <script src="../../js/modal.js"></script>
  <script src="../../js/plugins.js"></script>
  <script src="../../js/main.js"></script>
  <script src="../../js/jquery.inview.js"></script>
  <script src="../../js/jquery.autoKana.js"></script>
  <script type="text/javascript" src="//ajaxzip3.github.io/ajaxzip3.js" charset="utf-8"></script>
<script type="text/javascript">
	$(document).ready(function(){
		// カナ
		$.fn.autoKana('#name', '#kana', {katakana : true});
		// かな
		//$.fn.autoKana('#name_sei', '#kana_sei', {katakana : false});
	});
</script>
</head>

<body>
  <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<div class="rec-mainvidual">
  <p id="menubtn" class="menu"><img src="../../img/recruit/menu.png" alt="menu"></p>
  <div class="rec-mainvidual-bg entry">
    <nav class="rec-nav entry">
      <h1 class="rec-logo"><a href="../index.html"><img src="../../img/logo.png" alt="株式会社REVE"></a></h1>
      <p class="logo-rec"><img src="../../img/recruit/logo-rec.png" alt="Recruit"></p>
      <ul>
        <div class="MDL_window_wrap2">
          <div class="rec-sp-nav entry">
            <li><a href="../../recruit/index.html#vision">ビジョン</a></li>
            <li><a href="../../recruit/index.html#philosophy">企業理念</a></li>
            <li><a href="../../recruit/index.html#environment">職場環境</a></li>
            <li><a href="../../recruit/index.html#interview">社員紹介</a></li>
          </div>
        <p class="sp" id="close"><img src="../../img/icon/close.png" alt="閉じる"></p>
      </div>
      </ul>
    </nav>
    <!-- <img src="../img/recruit/mainvidual.png" alt="" class="rec-mainvidualimg pc">
    <img src="../img/recruit/mainvidual_sp.png" alt="" class="sp"> -->
    <!-- <div class="rec-main-text">
      <p><span>全ての明日のために</span></p>
      <p><span>安心を届けます！</span></p>
    </div> -->
  </div>
</div>
<div class="entryform">
  <h2>新卒採用　エントリー</h2>
  <div class="form-nav">
    <div class="form-nav-wrap">
      <div class="enter">
        <p>入力画面</p>
      </div>
      <div class="confi active">
        <p>確認画面</p>
      </div>
      <div class="comp">
        <p>送信完了</p>
      </div>
    </div>
  </div>
      <form method="post" action="./">
      <table>
        <tr>
          <th><span>必須</span>お名前</th>
          <td>
            <?php echo htmlspecialchars($name); ?>
            <input type="hidden" name="name" value="<?php echo htmlspecialchars($name); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>フリガナ</th>
          <td>
            <?php echo htmlspecialchars($kana); ?>
            <input type="hidden" name="kana" value="<?php echo htmlspecialchars($kana); ?>">
          </td>
        </tr>
    <tr>
      <th><span>必須</span>性別</th>
      <td>
            <?php echo $C_H_SEX[htmlspecialchars($sex)]; ?>
            <input type="hidden" name="sex" value="<?php echo htmlspecialchars($sex); ?>">
      </td>
    </tr>
    <tr>
      <th><span>必須</span>生年月日</th>
      <td>
            <?php echo htmlspecialchars($birth_year); ?>年<?php echo htmlspecialchars($birth_month); ?>月<?php echo htmlspecialchars($birth_day); ?>日
            <input type="hidden" name="birth_year" value="<?php echo htmlspecialchars($birth_year); ?>">
            <input type="hidden" name="birth_month" value="<?php echo htmlspecialchars($birth_month); ?>">
            <input type="hidden" name="birth_day" value="<?php echo htmlspecialchars($birth_day); ?>">
      </td>
    </tr>
        <tr>
          <th><span>必須</span>郵便番号</th>
          <td class="some-input">
            <?php echo htmlspecialchars($zip_code1); ?>-<?php echo htmlspecialchars($zip_code2); ?>
            <input type="hidden" name="zip_code1" value="<?php echo htmlspecialchars($zip_code1); ?>">
            <input type="hidden" name="zip_code2" value="<?php echo htmlspecialchars($zip_code2); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>都道府県</th>
          <td>
            <?php echo $C_H_PREF[htmlspecialchars($pref)]; ?>
            <input type="hidden" name="pref" value="<?php echo htmlspecialchars($pref); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>ご住所</th>
          <td>
            <?php echo htmlspecialchars($address); ?>
            <input type="hidden" name="address" value="<?php echo htmlspecialchars($address); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>電話番号</th>
          <td class="some-input">
            <?php echo htmlspecialchars($tel1); ?>-<?php echo htmlspecialchars($tel2); ?>-<?php echo htmlspecialchars($tel3); ?>
            <input type="hidden" name="tel1" value="<?php echo htmlspecialchars($tel1); ?>">
            <input type="hidden" name="tel2" value="<?php echo htmlspecialchars($tel2); ?>">
            <input type="hidden" name="tel3" value="<?php echo htmlspecialchars($tel3); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>携帯電話番号</th>
          <td class="some-input">
            <?php echo htmlspecialchars($mobile1); ?>-<?php echo htmlspecialchars($mobile2); ?>-<?php echo htmlspecialchars($mobile3); ?>
            <input type="hidden" name="mobile1" value="<?php echo htmlspecialchars($mobile1); ?>">
            <input type="hidden" name="mobile2" value="<?php echo htmlspecialchars($mobile2); ?>">
            <input type="hidden" name="mobile3" value="<?php echo htmlspecialchars($mobile3); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>メールアドレス</th>
          <td>
            <?php echo htmlspecialchars($mail); ?>
            <input type="hidden" name="mail" value="<?php echo htmlspecialchars($mail); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>学校名</th>
          <td>
            <?php echo htmlspecialchars($school_name); ?>
            <input type="hidden" name="school_name" value="<?php echo htmlspecialchars($school_name); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>卒業/卒業見込み</th>
          <td>
            <?php echo htmlspecialchars($school_graduate); ?>
            <input type="hidden" name="school_graduate" value="<?php echo htmlspecialchars($school_graduate); ?>">
          </td>
        </tr>
        <tr>
          <th><span>必須</span>ご応募の動機</th>
          <td>
            <?php echo nl2br(htmlspecialchars($contact)); ?>
            <input type="hidden" name="contact" value="<?php echo htmlspecialchars($contact); ?>">
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            個人情報の取扱に同意する
            <input type="hidden" name="protection" value="1">
          </td>
        </tr>
      </table>
      <div class="submitbtn">
	<input type="hidden" name="type" value="2" />
	<input type="hidden" name="m" id="m" value="res">
        <input type="submit" value="送信する">
      </div>
</form>
</div>
<footer class="footer subpage">
  <img src="../../img/footer-logo.png" alt="ロゴ" class="footer-logo">
  <p class="copyright">REVE CO., LTD. All Rights Reserved</p>
</footer>
</body>
</html>
