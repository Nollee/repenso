 $(document).ready(function() {

   $(".burger, .burger-frontpage, .overlay").click(function() {
     $('.mobileNav div, .overlay').toggleClass("slide");
   });

   //navbar scroll change color
   // https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
   $(document).scroll(function () {
	  var $nav = $(".frontpage-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $(".burger-frontpage div").css

    if($(this).scrollTop() > $nav.height()) {
        $('#logo-frontpage').attr('src','images/RepensoLogoDark.svg');
        $(".burger-frontpage div").css("background-color", "#001624");

    }
    else {
        $('#logo-frontpage').attr('src',"images/RepensoLogoWhite.svg");
        $(".burger-frontpage div").css("background-color", "white");

    }
	});
  //navbar scroll change color end



 //slider
var currentSlide = 1;
var $slider = $(".slides");
var slideCount = $slider.children().length+1;
var slideTime = 2000;
var animationTime = 800;

setInterval(function(){
  $slider.animate({
    marginLeft : '-=900px'
  } , animationTime , function() {
    currentSlide++;
    if(currentSlide === slideCount) {
      currentSlide = 1;
      $(this).css("margin-left" , "0px");
    }
  });
}, slideTime);

 });
