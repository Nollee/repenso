$(document).ready(function() {

$("#index").scrollTop(0);


   $(".burger, .burger-frontpage, .overlay").click(function() {
     $('.mobileNav div, .overlay').toggleClass("slide");
   });

   //navbar scroll change color
   // https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
   $(document).scroll(function () {
	  var $nav = $(".frontpage-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if($(this).scrollTop() > $nav.height()) {
        $('#logo-frontpage').attr('src','images/repenso_dark.svg');
        $(".burger-frontpage div").css("background-color", "#001624");

    }
    else {
        $('#logo-frontpage').attr('src',"images/repenso_white.svg");
        $(".burger-frontpage div").css("background-color", "white");

    }
	});
  //navbar scroll change color end

  (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        quoteIndex++;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);

    }

    showNextQuote();

})();

(function() {

  var quotes = $('.casecontent');
  var quoteIndex = -1;

  function showNextQuote() {
      quoteIndex++;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(0)
          .delay(10000)
          .fadeOut(2000, showNextQuote);
  }

  showNextQuote();

})();

/////////////////////makes reCaptcha required/////////////////////////////
window.onload = function() {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
      $recaptcha.setAttribute("required", "required");
  }
};
///////////////////////////////////////////////////////////////////////// 

});
