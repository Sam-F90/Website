(function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
      $(".navbar-fade").hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 400) {
                  $('.navbar-fade').fadeIn();
              } else {
                  $('.navbar-fade').fadeOut();

            }
          });
      });
  
  });
    }(jQuery));