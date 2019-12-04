 $(document).ready(function() {

   $(".burger, .overlay").click(function() {
     $('div').toggleClass("slide");
   });

   //navbar scroll change color
   // https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
   $(document).scroll(function () {
	  var $nav = $(".frontpage-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $("#logo").attr('src', "hej", $(this).scrollTop() > $nav.height());
	});
  //navbar scroll change color end
 });
