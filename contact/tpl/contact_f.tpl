<!doctype html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>お問い合わせ　株式会社 REVE</title>
  <meta name="description" content="REVEは複数の保険会社からお客様のライフスタイルに合った保険商品をご提供いたします。" />
  <meta name="keywords" content="REVE,東京 保険代理店,町田 保険代理店" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <link rel="stylesheet" href="../css/normalize.min.css">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/modal.css">
  <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
  <script src="../js/jquery-1.11.2.min.js"></script>
  <script src="../js/modal.js"></script>
  <script src="../js/plugins.js"></script>
  <script src="../js/main.js"></script>
  <script src="../js/jquery.inview.js"></script>
  <script src="../js/jquery.color.js"></script>
  <script src="../js/jquery.autoKana.js"></script>
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
  <header>
    <div class="header-top">
      <p id="menubtn" class="menu"><img src="../img/icon/menu.png" alt="menu"></p>
      <h1 class="logo"><a href="../index.html"><img src="../img/logo.png" alt="株式会社REVE"></a></h1>
      <p class="reservbtn freedial"><a href="tel:0120-952-482"><span class="pc"><span>フリーダイアルで今すぐ無料相談</span><br><span class="big">0120-952-482</span></span></a></p>
      <p class="reservbtn"><a href="../contact/index.php"><span>無料</span>コンサルタント相談予約</a></p>
    </div>
  <nav class="subpage-nav">
    <div class="MDL_window_wrap2 ma">
      <ul>
        <li>
          <a href="../company/index.html" class="company">企業情報</a>
          <ul>
            <li><a href="../company/organization.html">組織図</a></li>
            <!--<li><a href="../company/history.html">沿革</a></li>-->
          </ul>
        </li>
        <li><a href="../service/index.html" class="service">事業内容</a></li>
        <li><a href="../insurance/index.html" class="insurance">取扱保険会社</a></li>
        <li><a href="../recruit/index.html" target="_blank" class="recruit">採用情報</a></li>
        <li><a href="../contact/index.php" class="voice">お問い合わせ</a></li>
      </ul>
    <p class="sp" id="close"><img src="../img/icon/close.png" alt="閉じる"></p>
  </div>
  </nav>
  </header>
  <div class="insurance">
    <h2 class="subpage-title sub">お<span>問い合わせ</span></h2>
    <div class="entryform">
      <div class="form-nav no-rec">
        <div class="form-nav-wrap">
          <div class="enter active">
            <p>入力画面</p>
          </div>
          <div class="confi">
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
            <input type="text" name="name" id="name" value="<?php echo htmlspecialchars($name); ?>">
	    <?php if( !empty($error['name']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['name']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>フリガナ</th>
          <td>
            <input type="text" name="kana" id="kana" value="<?php echo htmlspecialchars($kana); ?>">
	    <?php if( !empty($error['kana']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['kana']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>電話番号</th>
          <td class="some-input">
            <input type="tel" name="tel1" id="tel1" maxlength="3" value="<?php echo htmlspecialchars($tel1); ?>"> -
            <input type="tel" name="tel2" id="tel2" maxlength="4" value="<?php echo htmlspecialchars($tel2); ?>"> -
            <input type="tel" name="tel3" id="tel3" maxlength="4" value="<?php echo htmlspecialchars($tel3); ?>">
	    <?php if( !empty($error['tel1']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['tel1']); } ?>
	    <?php if( !empty($error['tel2']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['tel2']); } ?>
	    <?php if( !empty($error['tel3']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['tel3']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>メールアドレス</th>
          <td>
            <input type="email" name="mail" id="mail" value="<?php echo htmlspecialchars($mail); ?>">
	    <?php if( !empty($error['mail']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['mail']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>お問い合わせ内容</th>
          <td>
            <textarea name="contact" id="contact" rows="8" cols="80"><?php echo htmlspecialchars($contact); ?></textarea>
	    <?php if( !empty($error['contact']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['contact']); } ?>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <p style="font-size: 13px; padding-bottom: 10px;">※保険に関するお問い合わせは電話にて承ります。</p>
            <label><input id="checkBtn" type="checkbox" name="protection" value="1"><a href="../privacypolicy/index.html" target="_blank">個人情報の取扱</a>に同意する</label>
	    <?php if( !empty($error['protection']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['protection']); } ?>
          </td>
        </tr>
      </table>
      <div class="submitbtn contact">
	<input type="hidden" name="type" value="1" />
	<input type="hidden" name="m" id="m" value="con">
        <input id="submitBtn" type="submit" value="確認画面" disabled>
      </div>
    </form>
    </div>
  </div>
<section>
  <div class="common-content subpage">
    <ul>
      <li>
        <a href="../company/index.html">
          <img src="../img/content-company.png" alt="企業情報">
          <p class="img-overlay-text">企業情報</p>
        </a>
      </li>
      <li>
        <a href="../insurance/index.html">
          <img src="../img/content-insurance.png" alt="取扱保険会社">
          <p class="img-overlay-text">取扱保険会社</p>
        </a>
      </li>
      <li>
        <a href="../recruit/index.html" target="_blank">
          <img src="../img/content-recruit.png" alt="採用情報">
          <p class="img-overlay-text">採用情報</p>
        </a>
      </li>
      <li>
        <a href="../contact/index.php">
          <img src="../img/content-contact.png" alt="お問い合わせ">
          <p class="img-overlay-text">お問い合わせ</p>
        </a>
      </li>
    </ul>
  </div>
</section>
<footer class="footer subpage">
  <img src="../img/footer-logo.png" alt="ロゴ" class="footer-logo">
  <ul>
    <li>
      <a href="../soliciting/index.html">勧誘方針</a>
    </li>
    <li>
      <a href="../privacypolicy/index.html">プライバシーポリシー</a>
    </li>
    <li>
      <a href="../basiccource/index.html">反社会勢力に対する基本方針</a>
    </li>
          <li>
      <a href="../policy/index.html">お客様本位の業務運営に係る方針</a>
    </li>
    <!-- <li>
      <a href="../img/REVE_annnai.pdf" target="_blank">推奨販売方針</a>
    </li> -->
  </ul>
  <p class="copyright">REVE CO., LTD. All Rights Reserved</p>
</footer>
</body>
</html>
