$(document).ready(function() {

$("#index").scrollTop(0);


   $(".burger, .burger-frontpage, .overlay").click(function() {
     $('.mobileNav div, .overlay').toggleClass("slide");
   });


$(".ready").click(function(){
  if ($(document).location.reload(true)) {
    alert("hej")
  }
  else{
    alert("nej")
  }


})
   //navbar scroll change color
   // https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
   $(document).scroll(function () {
	  var $nav = $(".frontpage-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $("#logo-frontpage").toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if($(this).scrollTop() > $nav.height()) {
        $('#logo-frontpage').attr('src','images/repenso_dark.svg');
        $(".burger-frontpage div").css("background-color", "#001624");
        $("#logo-frontpage img").css("width", "20px");


    }
    else {
        $('#logo-frontpage').attr('src',"images/repenso_white.svg");
        $(".burger-frontpage div").css("background-color", "white");

    }
	});
  //navbar scroll change color end

  (function() {

    var quotes = $(".quotes");
    var quoteIndex = 0;

    function showNextQuote() {
        quotes.eq(quoteIndex)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
            quoteIndex++;
            if (quoteIndex == quotes.length) {
              quoteIndex = 0;
            }
    }

    showNextQuote();

})();

(function() {

  var cases = $('.casecontent');
  var caseIndex = 0;

  function showNextCase() {
      cases.eq(caseIndex)
          .fadeIn(0)
          .delay(3500)
          .fadeOut(2500, showNextCase);
          caseIndex++;

          if (caseIndex == cases.length) {
            caseIndex = 0;
          }
  }

  showNextCase();

})();

/////////////////////makes reCaptcha required/////////////////////////////
window.onload = function() {
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
      $recaptcha.setAttribute("required", "");
  }
};
/////////////////////////////////////////////////////////////////////////

});
