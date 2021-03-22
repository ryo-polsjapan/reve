
$(function() {
     $("#courseguide").click(function() {
           $("#overlay3").fadeIn();　/*ふわっと表示*/
           $('.MDL_window_wrap3').animate({
           },300,'swing');
 });
     $("#close").click(function() {
           $("#overlay3").fadeOut();　/*ふわっと消える*/
           $('.MDL_window_wrap3').animate({
           },800,'swing');
 });
});

$(function() {
     $("#menubtn").click(function() {
           $(".nav, .subpage-nav, .rec-nav ul").fadeIn();　/*ふわっと表示*/
           $('.MDL_window_wrap2').animate({
           },300,'swing');
 });
 $("#close, a").click(function() {
 if(window.matchMedia("(max-width:736px)").matches){
   $(".nav, .subpage-nav, .rec-nav ul").fadeOut();　/*ふわっと消える*/
   $('.MDL_window_wrap2').animate({
   },800,'swing');
 }else{
   $("").fadeOut();　/*ふわっと消える*/
   $('.MDL_window_wrap2').animate({
   },800,'swing');
 }
 });
});
$(document).ready(function() {

  //デフォルトで表示する要素を指定
  $('#overlay').hide();

  //buttonがクリックされたら
  $('#btn').click(function() {

    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('#overlay').toggleClass('switch');

    //wrapがswitchを持っていれば
    if ($('#overlay').hasClass('switch')) {

      //要素の表示を切り替える
      $("#overlay").fadeIn();　 /*ふわっと表示*/
      $('#overlay').animate({
        'top': '70px'
      }, 300, 'swing');

      //wrapがswitchを持っていなければ
    } else {

      //要素の表示を切り替える
      $("#overlay").fadeOut();　 /*ふわっと消える*/
      $('#overlay').animate({
        'top': '70px'
      }, 300, 'swing');

    }
  });
});
