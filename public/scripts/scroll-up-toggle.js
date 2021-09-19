$(document).ready(function() {
  $('.button-up').hide();

  $(window).on('scroll', function() {

    if ($(this).scrollTop()) {
      $('.button-up').show(500);
      $('nav div.column').hide();
    } else {
      $('.button-up').hide(500);
      $('nav div.column').show();
    }
  });
  
  $('.button-up').on('click', function() {
    window.scrollTo(0, 0);
  });
})