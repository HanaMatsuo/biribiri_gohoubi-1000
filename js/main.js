$(function($){
    $('.slider').slick({
      autoplay: true, // 自動でスクロール
      autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
      speed: 5000, // スライドが流れる速度を設定
      cssEase: "linear", // スライドの流れ方を等速に設定
      slidesToShow: 2.1, // 表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, // 矢印非表示
      pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });

    $('.h-banner').slick({
        autoplay: true, // 自動でスクロール
        autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
        speed: 3000, // スライドが流れる速度を設定
        cssEase: "linear", // スライドの流れ方を等速に設定
        slidesToShow: 5, // 表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 矢印非表示
        pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
            }
          }
        ]
      });

    $(window).scroll(function(){
      var targetElement = $('.fadein').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $('.fadein').css('opacity','1');
        $('.fadein').css('transform','translateY(0)');
      }

    });

    $(window).scroll(function(){
      var targetElement = $('.fadein2').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight+200) {
        $('.fadein2').css('opacity','1');
        $('.fadein2').css('transform','translateY(0)');
      }

    });

    $(window).scroll(function(){
      var targetElement = $('.fadein3').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 0) {
        $('.fadein3').css('opacity','1');
        $('.fadein3').css('transform','translateY(0)');
      }

    });

    $(window).scroll(function(){
      var targetElement = $('.fadein4').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 300) {
        $('.fadein4').css('opacity','1');
        $('.fadein4').css('transform','translateY(0)');
      }

    });

    $(window).scroll(function(){
      var targetElement = $('.fadein5').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 300) {
        $('.fadein5').css('opacity','1');
        $('.fadein5').css('transform','translateY(0)');
      }

    });

    $(window).scroll(function(){
      var targetElement = $('.fadein6').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 300) {
        $('.fadein6').css('opacity','1');
        $('.fadein6').css('transform','translateY(0)');
      }

    });




    $(window).scroll(function(){
      var targetElement = $('.fadein7').offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 0) {
        $('.fadein7').css('opacity','1');
        $('.fadein7').css('transform','translateY(0)');
      }

    });
  });

