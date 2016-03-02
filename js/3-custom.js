$(document).ready(function() {

  // scroll actions
  $(document).scroll(function() {
    navChange();
  });

  // nav color change and navbar-brand add on scroll
  function navChange() {
    var scrollInit = 0;
    var about = $('.about__main');
    var offset = about.offset();
    scrollInit = $(this).scrollTop();
    if (scrollInit > offset.top) {
      $('.navbar-default').css('background-color', 'white');
      $('.navbar-brand--hide').css('display', 'inherit');
    } else {
      $('.navbar-default').css('background-color', '#EACD65');
      $('.navbar-brand--hide').css('display', 'none');
    }
  }

  // close responsive nav menu on click
  function closeNav(){
    var navMenu = $("#navbar__main");
    navMenu.on("click", "a", null, function () {
      navMenu.collapse('hide');
    });
  }

  closeNav();

});
