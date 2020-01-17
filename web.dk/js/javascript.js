$(document).ready(function() {
//

$("#index").scrollTop(0);
//when site is refreshed, the site will scroll to top

   $(".burger, .burger-frontpage, .overlay").click(function() {
     $('.mobileNav div, .overlay').toggleClass("slide");
   });
   // Burgermenu -  toggle Class

   //navbar scroll change color
   // https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
   $(document).scroll(function () {
	  var $nav = $(".frontpage-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    // Toggle class if the amount you have scrolled is higher then the hight of the navbar.
    $("#logo-frontpage").toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if($(this).scrollTop() > $nav.height()) {
        $('#logo-frontpage').attr('src','images/repenso_dark.svg');
        $(".burger-frontpage div").css("background-color", "#001624");
        $("#logo-frontpage img").css("width", "20px");
    // changes attribute instead of adding class
    }
    else {
        $('#logo-frontpage').attr('src',"images/repenso_white.svg");
        $(".burger-frontpage div").css("background-color", "white");
    // changes the attribute back if the if staement no longer is true
    }
	});
  //navbar scroll change color end

  (function() {

    var quotes = $(".quotes");
    var quoteIndex = 0;

    function showNextQuote() {
        quotes.eq(quoteIndex)
        //finds which element with .quotes class to show from the quoteindex value
            .fadeIn(2000)// Display = block
            .delay(2000)
            .fadeOut(2000, showNextQuote );
            //Display= none - Starts loop
            quoteIndex++;
            if (quoteIndex == quotes.length) {
              quoteIndex = 0;
            }
            // sets the quoteIndex value to 0 if it reaches the length of the variable quotes
    }

    showNextQuote();

})();

(function() {
// see ShowNextQuote function
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
