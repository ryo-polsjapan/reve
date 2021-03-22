// Avoid `console` errors in browsers that lack a console.
jQuery(document).ready(function() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  var appVersion = window.navigator.appVersion.toLowerCase();

  if ((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0 || navigator.userAgent.indexOf('iPad') > 0) {
    jQuery('head').append('<meta name="viewport" content="width=1024, initial-scale=0.70,minimum-scale=0.70, maximum-scale=2, user-scalable=yes" />');
  } else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
    jQuery("head").append(jQuery('<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=2, user-scalable=yes" />'));
  }
});

(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 			}
// 		}
// 	});
// });

// スワイプボックス
// $(function(){
// $(document).ready(function() {
//     $( '.swipebox' ).swipebox( {
//     });
// });
// });

$(function() {
  $('.show-btn').on('click', function() {
    $(".hide-contents").fadeIn("slow");
    $(".show-btn").fadeOut("slow");
  });
});
// アニメーション
$(function() {
  $(".circle1").animate({
    'opacity': '1'
  }, {
    'duration': 500
  });
  setTimeout(function() {
    $(".circle2").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  }, 1000);
  setTimeout(function() {
    $(".circle3").animate({
      'opacity': '1'
    }, {
      'duration': 1500
    });
  }, 2000);
  setTimeout(function() {
    $(".line-text1").animate({
      'opacity': '1'
    }, {
      'duration': 500
    });
  }, 6000);
  setTimeout(function() {
    $(".line-text2").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  }, 6000);
  setTimeout(function() {
    $(".triangle1").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  }, 1500);
  setTimeout(function() {
    $(".triangle2").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  }, 2500);
  setTimeout(function() {
    $(".triangle3").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  }, 1500);
});

$(function() {
  //jQuery.event.add(window,"load",function() {
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line1").animate({
        'width': '30px'
      }, {
        'duration': 500
      });
    } else {
      $(".line1").animate({
        'height': '30px'
      }, {
        'duration': 500
      });
    }
  }, 3000);
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line2").animate({
        'height': '372px'
      }, {
        'duration': 2000
      });
    } else {
      $(".line2").animate({
        'width': '100%'
      }, {
        'duration': 2000
      });
    }
  }, 3500);
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line3").animate({
        'width': '30px'
      }, {
        'duration': 500
      });
    } else {
      $(".line3").animate({
        'height': '30px'
      }, {
        'duration': 500
      });
    }
  }, 5500);
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line4").animate({
        'width': '30px'
      }, {
        'duration': 500
      });
    } else {
      $(".line4").animate({
        'height': '30px'
      }, {
        'duration': 500
      });
    }
  }, 5500);
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line5").animate({
        'height': '165px'
      }, {
        'duration': 2000
      });
    } else {
      $(".line5").animate({
        'width': '45%'
      }, {
        'duration': 2000
      });
    }
  }, 3500);
  setTimeout(function() {
    if (window.matchMedia("(max-width:736px)").matches) {
      $(".line6").animate({
        'width': '30px'
      }, {
        'duration': 500
      });
    } else {
      $(".line6").animate({
        'height': '30px'
      }, {
        'duration': 500
      });
    }
  }, 3000);
});
// アニメーション

// $(function(){
// 	$('a[href^=#]').click(function(){
// 		var speed = 500;
// 		var href= $(this).attr("href");
// 		var target = $(href == "#" || href == "" ? 'html' : href);
// 		var position = target.offset().top;
// 		$("html, body, #modal-environment").animate({scrollTop:position}, speed, "swing");
// 		return false;
// 	});
// });


// inview

$(function() {

	// トップ
  setTimeout(function() {
    $(".bg1").animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
		$("header .logo,header .reservbtn").css({opacity: 0}).animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
    $(".menu").css({opacity: 0}).animate({
      'opacity': '1'
    }, {
      'duration': 1000
    });
  });
  $('.bg1').on('inview', function() {
    $(".akanishi").animate({
      opacity: "1"
    }, 500);
  });
  $('.akanishi').on('inview', function() {
    // $(".top-text").animate({
    //   opacity: "1"
    // }, 800);
    $(".top-reservbtn").animate({
      opacity: "1"
    }, 800);
  });
  $('.top-logo').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
      $(".top-logo").animate({
        opacity: "1"
      }, 1000);
  });
  });
  $('.top-text1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text1').addClass('inview');
    },500);//500が遅延の時間 500ミリ秒
  });
  $('.top-text1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text1.inview').addClass('inview3');
    },1000);//500が遅延の時間 500ミリ秒
  });
  $('.top-text1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text1').addClass('inview2');
    },1000);//500が遅延の時間 500ミリ秒
  });

  $('.top-text2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text2').addClass('inview');
    },800);//500が遅延の時間 500ミリ秒
  });
  $('.top-text2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text2.inview').addClass('inview3');
    },1300);//500が遅延の時間 500ミリ秒
  });
  $('.top-text2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.top-text2').addClass('inview2');
    },1300);//500が遅延の時間 500ミリ秒
  });
  $('.mainvidual-subtext').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.mainvidual-subtext').addClass('inview');
    },500);//500が遅延の時間 500ミリ秒
  });
  $('.mainvidual-subtext').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.mainvidual-subtext.inview').addClass('inview3');
    },1000);//500が遅延の時間 500ミリ秒
  });
  $('.mainvidual-subtext').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.mainvidual-subtext').addClass('inview2');
    },1000);//500が遅延の時間 500ミリ秒
  });

// ナビゲーション
		$('.nav li')
			 .css({opacity: 0})
			 .each(function(i){
					 $(this).delay(300 * i).animate({opacity:1}, 500);
			 });

	// 下層ナビゲーション
		$('.subpage-nav li')
			 .css({opacity: 0})
			 .each(function(i){
					 $(this).delay(300 * i).animate({opacity:1}, 500);
			 });

	// 下層タイトル
  $('.subpage-title.sub').on('inview', function() {
    $(".subpage-title.sub").animate({
      opacity: "1"
    }, 500);
  });
  $('.subpage-title.sub').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    /*遅れて実行させる内容*/
    setTimeout(function(){
      $(".subpage-title.sub").animate({color:"#008DD0"},500);
    },500);//500が遅延の時間 500ミリ秒
  });
  $('.subpage-title.sub').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.subpage-title.sub').addClass('top-bottom');
    },500);//500が遅延の時間 500ミリ秒
  });

	$('.subpage-title.one').on('inview', function() {
    $(".subpage-title.one").animate({
      opacity: "1"
    }, 500);
  });
	$('.subpage-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
	    $(".subpage-title.one").animate({color:"#008DD0"},500);
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.subpage-title.one').addClass('top-bottom');
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.two').on('inview', function() {
    $(".subpage-title.two").animate({
      opacity: "1"
    }, 500);
  });
	$('.subpage-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
	    $(".subpage-title.two").animate({color:"#008DD0"},500);
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.subpage-title.two').addClass('top-bottom');
	  },500);//500が遅延の時間 500ミリ秒
	});


	$('.subpage-title.three').on('inview', function() {
    $(".subpage-title.three").animate({
      opacity: "1"
    }, 500);
  });
	$('.subpage-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
	    $(".subpage-title.three").animate({color:"#008DD0"},500);
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.subpage-title.three').addClass('top-bottom');
	  },500);//500が遅延の時間 500ミリ秒
	});

	$('.subpage-title.four').on('inview', function() {
    $(".subpage-title.four").animate({
      opacity: "1"
    }, 500);
  });
	$('.subpage-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
	    $(".subpage-title.four").animate({color:"#008DD0"},500);
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.subpage-title.four').addClass('top-bottom');
	  },500);//500が遅延の時間 500ミリ秒
	});


	$('.subpage-title.five').on('inview', function() {
    $(".subpage-title.five").animate({
      opacity: "1"
    }, 500);
  });
	$('.subpage-title.five').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
	    $(".subpage-title.five").animate({color:"#008DD0"},500);
	  },500);//500が遅延の時間 500ミリ秒
	});
	$('.subpage-title.five').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.subpage-title.five').addClass('top-bottom');
	  },500);//500が遅延の時間 500ミリ秒
	});

  $('.subpage-title.six').on('inview', function() {
    $(".subpage-title.six").animate({
      opacity: "1"
    }, 500);
  });
  $('.subpage-title.six').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    /*遅れて実行させる内容*/
    setTimeout(function(){
      $(".subpage-title.six").animate({color:"#008DD0"},500);
    },500);//500が遅延の時間 500ミリ秒
  });
  $('.subpage-title.six').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.subpage-title.six').addClass('top-bottom');
    },500);//500が遅延の時間 500ミリ秒
  });


	$('.greeting').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.greeting').addClass('addbg');
	  },1000);//500が遅延の時間 500ミリ秒
	});

	$('.greeting').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.greeting-text').addClass('inview');
	  },1100);//500が遅延の時間 500ミリ秒
	});
  $('.company-info-wrap').on('inview', function() {
    $(".company-info-wrap").animate({
      opacity: "1"
    }, 1000);
  });
  $('.philosophyin').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.philosophyin').addClass('addbg');
	  },1000);//500が遅延の時間 500ミリ秒
	});
  $('.philosophyin').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.philosophy-lead').addClass('inview');
	  },1100);//500が遅延の時間 500ミリ秒
	});
  // $('.philosophy-box').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  //   setTimeout(function(){
	// 	$('.philosophy-box li')
	// 		 .css({opacity: 0})
	// 		 .each(function(i){
	// 				 $(this).delay(300 * i).animate({opacity:1}, 500);
	// 		 });
  // }, 1000);
  // });
  // var thum=$('.philosophy-box li'); //オブジェクトを取得
  // var interval=500; //フェードインさせる間隔
  $('.philosophy-box').on('inview', function() {
  $.each($('.philosophy-box li'),function(i){
    $('.philosophy-box li').eq(i).delay(i*500).animate({
      'opacity':'1'
  },900,'swing');
  });
  });
  $('.subpage-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.organization-chartimg').animate({opacity:"1"},1000);
	  },1000);//500が遅延の時間 500ミリ秒
	});
  $('.subpage-title.six').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.map').animate({opacity:"1"},1000);
	  },1000);//500が遅延の時間 500ミリ秒
	});
  $('.map').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.map2').animate({opacity:"1"},1000);
	  },1500);//500が遅延の時間 500ミリ秒
	});

  // $('.philosophyin').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  //   /*遅れて実行させる内容*/
	//   setTimeout(function(){
	//     $(".philosophy-lead h2 span").animate({backgroundColor:"#313269"},500);
	//   },1000);//500が遅延の時間 500ミリ秒
  // });
	// $('.subpage-title.top-bottom:after').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  // var div = $(".subpage-title.top-bottom:after");
	//   /*遅れて実行させる内容*/
	// 	setTimeout(function(){
	//     $(div).animate({top:"10px"},500);
	//   },500);//500が遅延の時間 500ミリ秒
	// });
	// $('.subpage-nav').on('inview', function() {
  //   $(".subpage-title span").animate({
  //     color: "#008DD0"
  //   }, 500);
  // });


// フッターの共通コンテンツ
  // var thum=$('.common-content li'); //オブジェクトを取得
  // var interval=200; //フェードインさせる間隔
  $('.common-content').on('inview', function() {
  $.each($('.common-content li'),function(i){
    $('.common-content li').eq(i).delay(i*300).animate({
      'opacity':'1'
  },900,'swing');
  });
  });
  $('.entryform h2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

    /*遅れて実行させる内容*/
    setTimeout(function(){
        $('.entryform h2').animate({opacity:"1"},1000);
    },100);//500が遅延の時間 500ミリ秒
  });
  $('.form-nav-wrap').on('inview', function() {
  $.each($('.form-nav-wrap div'),function(i){
    $('.form-nav-wrap div').eq(i).delay(i*500).animate({
      'opacity':'1'
  },1200,'swing');
  });
  });
  $('.entryform table').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.entryform table').animate({opacity:"1"},1000);
	  },1500);//500が遅延の時間 500ミリ秒
	});
});


// リクルートのアニメーション
$(function() {
  setTimeout(function(){

	  /*遅れて実行させる内容*/
	  setTimeout(function(){
        $('.rec-mainvidual-bg').animate({opacity:"1"},1000);
	  },100);//500が遅延の時間 500ミリ秒
	});
  $('.rec-nav').on('inview', function() {
    //ブラウザの表示域に表示されたときに実行する処理
    $(".rec-nav").animate({
      height: "100%"
    }, 1000);
  });
  setTimeout(function(){
    //ブラウザの表示域に表示されたときに実行する処理
    $(".rec-logo").animate({
      opacity: "1"
    }, 1000);
  });
  setTimeout(function(){
    //ブラウザの表示域に表示されたときに実行する処理
    $(".logo-rec").animate({
      opacity: "1"
    }, 1000);
  });
  // $('.rec-mainvidual-bg').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  //
	//   /*遅れて実行させる内容*/
	//   setTimeout(function(){
  //       $('.rec-nav').animate({height:"100%"},1000);
	//   },500);//500が遅延の時間 500ミリ秒
	// });
  $(' .rec-sp-nav.entry li')
      .css({
          // marginLeft : '-40px',
          opacity: 0
      })
      .each(function(i){
          $(this).delay(300 * i)
              .animate({
                  // marginLeft : '0',
                  opacity: 1
              }, 700);
      });
    $('.rec-sp-nav.top li')
        .css({
            marginLeft : '-40px',
            opacity: 0
        })
        .each(function(i){
            $(this).delay(300 * i)
                .animate({
                    marginLeft : '0',
                    opacity: 1
                }, 700);
        });
        $('.rec-main-text .first').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .first').addClass('inview');
          },500);//500が遅延の時間 500ミリ秒
        });
        $('.rec-main-text .first').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .first.inview').addClass('inview3');
          },1000);//500が遅延の時間 500ミリ秒
        });
        $('.rec-main-text .first').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .first').addClass('inview2');
          },1000);//500が遅延の時間 500ミリ秒
        });

        $('.rec-main-text .sec').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .sec').addClass('inview');
          },800);//500が遅延の時間 500ミリ秒
        });
        $('.rec-main-text .sec').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .sec.inview').addClass('inview3');
          },1300);//500が遅延の時間 500ミリ秒
        });
        $('.rec-main-text .sec').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.rec-main-text .sec').addClass('inview2');
          },1300);//500が遅延の時間 500ミリ秒
        });
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.one').addClass('inview');
      	  },500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.one.inview').addClass('inview3');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.one').addClass('inview2');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.two').addClass('inview');
      	  },500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.two.inview').addClass('inview3');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.two').addClass('inview2');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.three').addClass('inview');
      	  },500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.three.inview').addClass('inview3');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.three').addClass('inview2');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.four').addClass('inview');
      	  },500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.four.inview').addClass('inview3');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.rec-title.four').addClass('inview2');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});

        $('.message-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-left').addClass('inview');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.message-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-left.inview').addClass('inview3');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});
        $('.message-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-left').addClass('inview2');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});


        $('.message-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-right').addClass('inview');
      	  },1100);//500が遅延の時間 500ミリ秒
      	});
        $('.message-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-right.inview').addClass('inview3');
      	  },1600);//500が遅延の時間 500ミリ秒
      	});
        $('.message-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.message-content-right').addClass('inview2');
      	  },1600);//500が遅延の時間 500ミリ秒
      	});

        // $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //
      	//   /*遅れて実行させる内容*/
      	//   setTimeout(function(){
        //     $('.vision-content-left').animate({
        //       opacity: "1"
        //
        //     },300);
        // },1000);//500が遅延の時間 500ミリ秒
      	// });
        // $('.vision-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //
      	//   /*遅れて実行させる内容*/
        //   setTimeout(function(){
        //       $('.vision-content-right').addClass('inview');
        //   },1200);//500が遅延の時間 500ミリ秒
        // });
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-left').addClass('inview');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-left.inview').addClass('inview3');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-left').addClass('inview2');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});

        $('.vision-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-right').addClass('inview');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});
        $('.vision-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-right.inview').addClass('inview3');
      	  },2000);//500が遅延の時間 500ミリ秒
      	});
        $('.vision-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.vision-content-right').addClass('inview2');
      	  },2000);//500が遅延の時間 500ミリ秒
      	});

        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-right').addClass('inview');
      	  },1900);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-right.inview').addClass('inview3');
      	  },2400);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-right').addClass('inview2');
      	  },2400);//500が遅延の時間 500ミリ秒
      	});

        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-left').addClass('inview');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-left.inview').addClass('inview3');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.environment-content-left').addClass('inview2');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});

        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.first').addClass('inview');
      	  },1000);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.first.inview').addClass('inview3');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.first').addClass('inview2');
      	  },1500);//500が遅延の時間 500ミリ秒
      	});

        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.sec').addClass('inview');
      	  },1300);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.sec.inview').addClass('inview3');
      	  },1800);//500が遅延の時間 500ミリ秒
      	});
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      	  /*遅れて実行させる内容*/
      	  setTimeout(function(){
              $('.philosophy-content li.sec').addClass('inview2');
      	  },1800);//500が遅延の時間 500ミリ秒
      	});

        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.philosophy-content li.thi').addClass('inview');
          },1600);//500が遅延の時間 500ミリ秒
        });
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.philosophy-content li.thi.inview').addClass('inview3');
          },2100);//500が遅延の時間 500ミリ秒
        });
        $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
          /*遅れて実行させる内容*/
          setTimeout(function(){
              $('.philosophy-content li.thi').addClass('inview2');
          },2100);//500が遅延の時間 500ミリ秒
        });


        // $('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //   setTimeout(function(){
      	// 	$('.philosophy-content li')
      	// 		 // .css({opacity: 0})
      	// 		 .each(function(i){
      	// 				 $(this).delay(300 * i).animate({opacity:1}, 500);
      	// 		 });
        // }, 1000);
        // });


        // $('.rec-title.three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //
      	//   /*遅れて実行させる内容*/
      	//   setTimeout(function(){
        //     $('.environment-content-left').animate({
        //       opacity: "1"
        //
        //     },300);
        // },1000);//500が遅延の時間 500ミリ秒
      	// // });
        // $('.environment-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        //
      	//   /*遅れて実行させる内容*/
        //   setTimeout(function(){
        //       $('.environment-content-right').addClass('inview');
        //   },2500);//500が遅延の時間 500ミリ秒
        // });
        $('.environment-content-right').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

      	  /*遅れて実行させる内容*/
          setTimeout(function(){
            $('.rec-readmore-btn.plus a').animate({
              opacity:"1",
              width: "310px"
            },400);
        },1500);//500が遅延の時間 500ミリ秒
});
// $('.interview-content-wrap').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
//   setTimeout(function(){
//   $('.interview-content-one.show')
//      // .css({opacity: 0})
//      .each(function(i){
//          $(this).delay(300 * i).animate({opacity:1}, 500);
//      });
// }, 1000);
// });
//
// $('.interview-content-one.hide').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
//   setTimeout(function(){
//   $('.interview-content-one.hide')
//      // .css({opacity: 0})
//      .each(function(i){
//          $(this).delay(300 * i).animate({opacity:1}, 500);
//      });
// }, 10);
// });

$('.interview-content-wrap').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  setTimeout(function(){
  $('.interview-content-over.show')
     // .css({opacity: 0})
     .each(function(i){
         $(this).delay(300 * i).addClass('inview');
     });
}, 1000);
setTimeout(function(){
$('.interview-content-over.show.inview')
   // .css({opacity: 0})
   .each(function(i){
       $(this).delay(300 * i).addClass('inview3');
   });
}, 1500);
setTimeout(function(){
$('.interview-content-over.show')
   // .css({opacity: 0})
   .each(function(i){
       $(this).delay(300 * i).addClass('inview2');
   });
}, 1500);

});

$('.interview-content-over.hide').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  setTimeout(function(){
  $('.interview-content-over.hide')
     // .css({opacity: 0})
     .each(function(i){
         $(this).delay(300 * i).addClass('inview');
     });
}, 100);
setTimeout(function(){
$('.interview-content-over.hide.inview')
   // .css({opacity: 0})
   .each(function(i){
       $(this).delay(300 * i).addClass('inview3');
   });
}, 600);
setTimeout(function(){
$('.interview-content-over.hide')
   // .css({opacity: 0})
   .each(function(i){
       $(this).delay(300 * i).addClass('inview2');
   });
}, 600);

});

$('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.philosophy-content li.sec').addClass('inview');
  },1300);//500が遅延の時間 500ミリ秒
});
$('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.philosophy-content li.sec.inview').addClass('inview3');
  },1800);//500が遅延の時間 500ミリ秒
});
$('.rec-title.two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.philosophy-content li.sec').addClass('inview2');
  },1800);//500が遅延の時間 500ミリ秒
});


$('.message-title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.message-title').addClass('inview');
  },500);//500が遅延の時間 500ミリ秒
});
$('.message-title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.message-title.inview').addClass('inview3');
  },1000);//500が遅延の時間 500ミリ秒
});
$('.message-title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.message-title').addClass('inview2');
  },1000);//500が遅延の時間 500ミリ秒
});
$('.message-title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.message-title.inview2').addClass('inview4');
  },1500);//500が遅延の時間 500ミリ秒
});


// $('.message-title').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
//
//   setTimeout(function(){
//     $('.message-content-left').animate({
//       opacity:"1"
//
//     },600);
// },1000);//500が遅延の時間 500ミリ秒
// });
// $('.message-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
//
//   setTimeout(function(){
//     $('.message-content-right').animate({
//       opacity:"1"
//
//     },600);
// },1200);//500が遅延の時間 500ミリ秒
// });
$('.message-content-left').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  setTimeout(function(){
    $('.message-content-right-text p')
        .css({
            marginLeft : '-40px',
            opacity: 0
        })
        .each(function(i){
            $(this).delay(500 * i)
                .animate({
                    marginLeft : '0',
                    opacity: 1
                }, 700);
        });
}, 1000);
});
$('.message-content-right-text p').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.message-content-right-text + p').animate({
      opacity:"1"

    },600);
},2500);//500が遅延の時間 500ミリ秒
});
$('footer').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.footer-entry-btns').animate({
       opacity:"1"

    },600);
},300);//500が遅延の時間 500ミリ秒
});
$('.footer-entry-btns').on('inview', function() {
  setTimeout(function(){
    $('.footer-entry-btns p')
        .css({
            // opacity: 0
        })
        .each(function(i){
            $(this).delay(500 * i)
                .animate({
                    marginTop : '0',
                    opacity: 1
                }, 700);
        });
}, 1000);
});
// $('footer').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
//   setTimeout(function(){
//     $('footer li')
//         .css({
//             opacity: 0
//         })
//         .each(function(i){
//             $(this).delay(500 * i)
//                 .animate({
//                     marginTop : '0',
//                     opacity: 1
//                 }, 700);
//         });
// }, 100);
// });
// var thum=$('.footer li'); //オブジェクトを取得
// var interval=200; //フェードインさせる間隔
$('.footer').on('inview', function() {
$.each($('.footer li'),function(i){
  $('.footer li').eq(i).delay(i*300).animate({
    'opacity':'1'
},900,'swing');
});
});
$('footer').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.footer-logo, .copyright').animate({
      opacity:"1"

    },600);
},500);//500が遅延の時間 500ミリ秒
});
});

$(function() {
$('.service-intr').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.service-intr').addClass('inview');
  },500);//500が遅延の時間 500ミリ秒
});
$('.service-intr h2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.service-intr p').animate({
      opacity:"1"

    },600);
},1000);//500が遅延の時間 500ミリ秒
});
});


$(function() {
$('.insurance-content').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.insurance-content').animate({
      opacity:"1"

    },600);
},1000);//500が遅延の時間 500ミリ秒
});
$('.insurance1').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.insurance1').animate({
      opacity:"1"

    },600);
},1000);//500が遅延の時間 500ミリ秒
});
$('.diagram').on('inview', function() {
  setTimeout(function(){
    $('.diagram li')
        .css({
            // marginTop : '-20px'
            // opacity: 0
        })
        .each(function(i){
            $(this).delay(500 * i)
                .animate({
                    marginTop : '0',
                    opacity: 1
                }, 700);
        });
}, 1000);
});
$('.diagram').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.diagram').addClass('inview');
  },3000);//500が遅延の時間 500ミリ秒
});
$('.diagram').on('inview', function() {

  /*遅れて実行させる内容*/
  setTimeout(function(){
      $('.diagram').addClass('addbg');
  },3000);//500が遅延の時間 500ミリ秒
});
$('.insurance-list').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {

  setTimeout(function(){
    $('.insurance-list-title').animate({
      opacity:"1"

    },600);
},500);//500が遅延の時間 500ミリ秒
});

$('.insurance-list').on('inview', function() {
  setTimeout(function(){
    var $list = $('.insurance-list-content li');
    //配列をランダムにする
    Array.prototype.shuffle = function() {
        var i = this.length;
        while(i){
            var j = Math.floor(Math.random()*i);
            var t = this[--i];
            this[i] = this[j];
            this[j] = t;
        }
        return this;
    }
    var random = [];
    $list.each(function(i){
        random.push(i);
    });
    random.shuffle();
    // 遅延してリストを表示
    $list
//         .css({opacity: 0})
        .each(function(i){
            $(this).delay(random[i]*150).animate({opacity:1});
        });
},1000);//500が遅延の時間 500ミリ秒
});
});

$(function() {
  $('#checkBtn').on('change', function(){
    if ($(this).is(':checked')) {



    //チェックが入ったら、送信ボタンを押せる
    $('#submitBtn').prop('disabled', false);



    } else {



    //チェックが入っていなかったら、送信ボタンを押せない
    $('#submitBtn').prop('disabled', true);
    }
  });
});

// リクルートのインタビューモーダル
$(function() {
  $('.popup-modal').magnificPopup({
    preloader: false,
    focus: '#username',
    modal: true,
    gallery: { //ギャラリー表示にする
    enabled: true

    }
  });
  $(document).on('click', '.modal-close', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
