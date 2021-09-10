$(document).ready(function() {

  $('#tweet-text').on('input', function() {
    const count = $("#tweet-text").val().length;
    const sum = 140 - count;

    if (sum < 0) {
      $(".counter").val(sum).css({color:'red'});
    } else {
      $(".counter").val(sum);
    }
  })

});
