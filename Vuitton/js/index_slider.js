$( document ).ready(function(){
	  $( "#aaa" ).click(function(){

      var $lenght = $(".in_promo_img").length;
      var $elements = $('.in_promo_img');
      var index = 0;
      var intervalId = setInterval(function() {
        if (index >= $elements.length) {
          index = 0;
        };
        if ($elements.eq(index).hasClass("promo_img_view")) {
          $elements.eq(index).fadeOut(1500);

        }
        index++;

        $elements.eq(index).fadeIn(1500);

    

      }, 100);




      /* Получение



      var $i = 0;
      var $visible = $(".in_promo_img:eq($i)");
      $visible.fadeIn(300);


       количества картинок */




	  });
});
