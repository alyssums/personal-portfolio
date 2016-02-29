$(document).ready(function() {
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
});
