<!doctype html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>中途採用　株式会社 REVE</title>
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
        <h1 class="rec-logo"><a href="../index.html"><img src="../../img/logo.png" alt=""></a></h1>
        <p class="logo-rec"><img src="../../img/recruit/logo-rec.png" alt=""></p>
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
  <h2>中途採用　エントリー</h2>
  <div class="form-nav">
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
      <th><span>必須</span>性別</th>
      <td>
        <label><input type="radio" name="sex" id="sex" value="1" <?php if( !isset($sex) || (int) $sex === 1 ){ echo " checked"; } ?>>男性</label>
        <label><input type="radio" name="sex" id="sex" value="2" <?php if( isset($sex) && (int) $sex === 2 ){ echo " checked"; } ?>>女性</label>
      </td>
    </tr>
    <tr>
      <th><span>必須</span>生年月日</th>
      <td>
	<?php $dateYear = ((int) date('Y')) - 50; ?>
        <select name="birth_year" id="birth_year">
		<option value="">-</option>
		<?php while( (int) $dateYear !== (int) date('Y') ){ ?>
		<option value="<?php echo $dateYear; ?>"<?php if( $birth_year == $dateYear ){ echo " selected"; } ?>><?php echo $dateYear; ?></option>
		<?php $dateYear++; } ?>
	</select>　年
	<select name="birth_month" id="birth_month">
		<option value="">-</option>
		<?php for($i=1;$i<=12;$i++){ ?>
		<option value="<?php echo $i; ?>"<?php if( $birth_month == $i ){ echo " selected"; } ?>><?php echo $i; ?></option>
		<?php } ?>
	</select>　月
	<select name="birth_day" id="birth_day">
		<option value="">-</option>
		<?php for($i=1;$i<=31;$i++){ ?>
		<option value="<?php echo $i; ?>"<?php if( $birth_day == $i ){ echo " selected"; } ?>><?php echo $i; ?></option>
		<?php } ?>
	</select>　日
	    <?php if( !empty($error['birth_year']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['birth_year']); } ?>
	    <?php if( !empty($error['birth_month']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['birth_month']); } ?>
	    <?php if( !empty($error['birth_day']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['birth_day']); } ?>
      </td>
    </tr>
        <tr>
          <th><span>必須</span>郵便番号</th>
          <td class="some-input">
            <input type="tel" name="zip_code1" id="zip_code1" maxlength="3" onkeyup="AjaxZip3.zip2addr(this,'zip_code2', 'pref','address');" value="<?php echo htmlspecialchars($zip_code1); ?>"> -
            <input type="tel" name="zip_code2" id="zip_code2" maxlength="4" onkeyup="AjaxZip3.zip2addr('zip_code1', this,'pref','address');" value="<?php echo htmlspecialchars($zip_code2); ?>">
	    <?php if( !empty($error['zip_code1']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['zip_code1']); } ?>
	    <?php if( !empty($error['zip_code2']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['zip_code2']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>都道府県</th>
          <td>
		<select name="pref" id="pref">
			<option value="">-</option>
			<?php foreach( $C_H_PREF as $key => $val ){ ?>
			<option value="<?php echo $key; ?>"<?php if( $pref == $key ){ echo " selected"; } ?>><?php echo $val; ?></option>
			<?php } ?>
		</select>
	    <?php if( !empty($error['pref']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['pref']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>ご住所</th>
          <td>
            <input type="text" name="address" id="address" value="<?php echo htmlspecialchars($address); ?>">
	    <?php if( !empty($error['address']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['address']); } ?>
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
          <th><span>必須</span>携帯電話番号</th>
          <td class="some-input">
            <input type="tel" name="mobile1" id="mobile1" maxlength="3" value="<?php echo htmlspecialchars($mobile1); ?>"> -
            <input type="tel" name="mobile2" id="mobile2" maxlength="4" value="<?php echo htmlspecialchars($mobile2); ?>"> -
            <input type="tel" name="mobile3" id="mobile3" maxlength="4" value="<?php echo htmlspecialchars($mobile3); ?>">
	    <?php if( !empty($error['mobile1']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['mobile1']); } ?>
	    <?php if( !empty($error['mobile2']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['mobile2']); } ?>
	    <?php if( !empty($error['mobile3']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['mobile3']); } ?>
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
          <th><span>必須</span>会社名</th>
          <td>
            <input type="text" name="company_name" id="company_name" value="<?php echo htmlspecialchars($company_name); ?>">
	    <?php if( !empty($error['company_name']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['company_name']); } ?>
          </td>
        </tr>
        <tr>
          <th>部署</th>
          <td>
            <input type="text" name="company_department" id="company_department" value="<?php echo htmlspecialchars($company_department); ?>">
	    <?php if( !empty($error['company_department']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['company_department']); } ?>
          </td>
        </tr>
        <tr>
          <th>役職</th>
          <td>
            <input type="text" name="company_position" id="company_position" value="<?php echo htmlspecialchars($company_position); ?>">
	    <?php if( !empty($error['company_position']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['company_position']); } ?>
          </td>
        </tr>
        <tr>
          <th><span>必須</span>ご応募の動機</th>
          <td>
            <textarea name="contact" id="contact" rows="8" cols="80"><?php echo htmlspecialchars($contact); ?></textarea>
	    <?php if( !empty($error['contact']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['contact']); } ?>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <label><input id="checkBtn" type="checkbox" name="protection" value="1"><a href="../../privacypolicy/index.html" target="_blank">個人情報の取扱</a>に同意する</label>
	    <?php if( !empty($error['protection']) ){ echo sprintf('<br /><span class="must_contact">%s</span>', $error['protection']); } ?>
          </td>
        </tr>
      </table>
      <div class="submitbtn">
	<input type="hidden" name="type" value="3" />
	<input type="hidden" name="m" id="m" value="con">
        <input id="submitBtn" type="submit" value="確認画面" disabled>
      </div>
</form>
</div>
<footer class="footer subpage">
  <img src="../../img/footer-logo.png" alt="" class="footer-logo">

  <p class="copyright">REVE CO., LTD. All Rights Reserved</p>
</footer>
</body>
</html>
