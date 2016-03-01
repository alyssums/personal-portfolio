$(document).ready(function() {

  // nav color change on scroll
  var scrollInit = 0;
  var about = $('.about__main');
  var offset = about.offset();
  $(document).scroll(function() {
    scrollInit = $(this).scrollTop();
    if (scrollInit > offset.top) {
      $('.navbar-default').css('background-color', 'white');
    } else {
      $('.navbar-default').css('background-color', '#EACD65');
    }
  });

  // close responsive nav menu on click
  function closeNav(){
    var navMenu = $("#navbar__main");
    navMenu.on("click", "a", null, function () {
      navMenu.collapse('hide');
    });
  }

  closeNav();

});
