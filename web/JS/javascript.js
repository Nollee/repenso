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

 });
