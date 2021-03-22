$(function() {
     $("#btn").click(function() {
           $("#overlay").fadeIn();　/*ふわっと表示*/
 });
     $("#close").click(function() {
           $("#overlay").fadeOut();　/*ふわっと消える*/
 });
 
 
 
   $("#btn3").click(function() {
           $("#overlay3").fadeIn();　/*ふわっと表示*/
 });
     $("#close3").click(function() {
           $("#overlay3").fadeOut();　/*ふわっと消える*/
 });
 
    $("#btn4").click(function() {
           $("#overlay4").fadeIn();　/*ふわっと表示*/
 });
     $("#close4").click(function() {
           $("#overlay4").fadeOut();　/*ふわっと消える*/
 });
 
  $("#c1").click(function() {
           $("#c_content1").fadeIn();　/*ふわっと表示*/
 });
     $("#c1_close").click(function() {
           $("#c_content1").fadeOut();　/*ふわっと消える*/
 });
   $("#c2").click(function() {
           $("#c_content2").fadeIn();　/*ふわっと表示*/
 });
     $("#c2_close").click(function() {
           $("#c_content2").fadeOut();　/*ふわっと消える*/
 });
   $("#c3").click(function() {
           $("#c_content3").fadeIn();　/*ふわっと表示*/
 });
     $("#c3_close").click(function() {
           $("#c_content3").fadeOut();　/*ふわっと消える*/
 });
   $("#c4").click(function() {
           $("#c_content4").fadeIn();　/*ふわっと表示*/
 });
     $("#c4_close").click(function() {
           $("#c_content4").fadeOut();　/*ふわっと消える*/
 });
   $("#c5").click(function() {
           $("#c_content5").fadeIn();　/*ふわっと表示*/
 });
     $("#c5_close").click(function() {
           $("#c_content5").fadeOut();　/*ふわっと消える*/
 });
   $("#c6").click(function() {
           $("#c_content6").fadeIn();　/*ふわっと表示*/
 });
     $("#c6_close").click(function() {
           $("#c_content6").fadeOut();　/*ふわっと消える*/
 });
   $("#c7").click(function() {
           $("#c_content7").fadeIn();　/*ふわっと表示*/
 });
     $("#c7_close").click(function() {
           $("#c_content7").fadeOut();　/*ふわっと消える*/
 });
   $("#c8").click(function() {
           $("#c_content8").fadeIn();　/*ふわっと表示*/
 });
     $("#c8_close").click(function() {
           $("#c_content8").fadeOut();　/*ふわっと消える*/
 });
    $("#c9").click(function() {
           $("#c_content9").fadeIn();　/*ふわっと表示*/
 });
     $("#c9_close").click(function() {
           $("#c_content9").fadeOut();　/*ふわっと消える*/
 });
 $("#c10").click(function() {
           $("#c_content10").fadeIn();　/*ふわっと表示*/
 });
     $("#c10_close").click(function() {
           $("#c_content10").fadeOut();　/*ふわっと消える*/
 });
 $("#c11").click(function() {
           $("#c_content11").fadeIn();　/*ふわっと表示*/
 });
     $("#c11_close").click(function() {
           $("#c_content11").fadeOut();　/*ふわっと消える*/
 });
});

$(document).ready(function(){
	//クリックしたときのファンクションをまとめて指定
	$('ul.tab li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('ul.tab li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.content-car li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.content-car li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('ul.tab li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});
	
	$('ul.tab2 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('ul.tab2 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.contents2 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.contents2 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('ul.tab2 li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});
	
	$('ul.tab3 li').click(function() {

		//.index()を使いクリックされたタブが何番目かを調べ、
		//indexという変数に代入します。
		var index = $('ul.tab3 li').index(this);

		//コンテンツを一度すべて非表示にし、
		$('.contents3 li').css('display','none');

		//クリックされたタブと同じ順番のコンテンツを表示します。
		$('.contents3 li').eq(index).css('display','block');

		//一度タブについているクラスselectを消し、
		$('ul.tab3 li').removeClass('select');

		//クリックされたタブのみにクラスselectをつけます。
		$(this).addClass('select')
	});

});