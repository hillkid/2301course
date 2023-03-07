//  建立宣告變數 
(function ($) {
   $("body").append("<img id='goTopButton' style='display:none; z-index:5;cursor:pointer;top:100px;right:100px;position:fixed;'title='回到頂端'/>");
   var img = "./image_miro/miro00.png",
      location=0.6,
      right=50,
      opacity=0.6,
      speed=1000,
      $button=$("#goTopButton"),
      $body=$(document),
      $win=$(window);
   $button.attr("src",img);
   // 設定移動時變化程式
   window.goTopMove= function(){
      var scrollH=$body.scrollTop(),
         winh=$win.height(),
         css={"top":winh * location + "px","position":"fixed","right":right,"opacity":opacity};
      if (scrollH>20){
         $button.css(css);
         $button.fadeIn("slow");
      } else {
         css={"transform":"none","transition":"none"};
         $button.css(css);
         $button.fadeOut("slow");
      }
   };
   // goTopMove程式啟動方式
   $win.on({
      scroll:function(){goTopMove();},
      resize:function(){goTopMove();},
   });
   // 設定按鍵動作事件
   $button.on({
      mouseover:function(){$button.css("opacity",1);},
      mouseout:function(){$button.css("opacity",opacity);},
      click:function(){
         css={"transform":"scale(1.2,6)","transition":"transform 1s ease 0s"};
         $button.css(css);
         $("html,body").animate({scrollTop:0},speed);}
   });
})(jQuery);