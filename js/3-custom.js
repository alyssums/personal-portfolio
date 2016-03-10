$(document).ready(function() {

  // scroll actions
  $(document).scroll(function() {
    navChange();
  });

  // nav color change and navbar-brand add on scroll
  function navChange() {
    var scrollInit = 0;
    var content = $('.content');
    var offset = content.offset();
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
  var navMenu = $('#navbar__main');
  var navBrand = $('.navbar-brand--hide');
  function closeNav(){
    navMenu.collapse('hide');
  }

  navMenu.on('click', 'a', null, closeNav);
  navBrand.on('click', closeNav);

});
