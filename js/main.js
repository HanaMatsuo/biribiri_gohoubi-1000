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
          breakpoint: 768,
          settings: {
          slidesToShow: 3,
          vertical: true,       //追記
 // 画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  

    $('.h-banner').slick({
        autoplay: true, // 自動でスクロール
        autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
        speed: 3000, // スライドが流れる速度を設定
        cssEase: "linear", // スライドの流れ方を等速に設定
        slidesToShow: 6, // 表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 矢印非表示
        pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
          {
            breakpoint: 768,
            settings: {
              autoplaySpeed: 0,
              slidesToShow: 6, // 画面幅750px以下でスライド3枚表示
              vertical:true,
            }
          }
        ]
      });
      
      
      $(window).scroll(function (){
        $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
          }
        });
    
       });
       $(window).scroll(function (){
        $('.fadein-footer').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight ){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
          }
        });
    
       });
    
    


  });

