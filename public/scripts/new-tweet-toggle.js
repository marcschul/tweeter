// Toggle tweet's input field when clicking on "Write a new tweet"
$(document).ready(function() {
  let state = true;
  $('nav div.column').on("click", function() {
    if (state) {
      $('form.tweet-form').hide(1000);
      state = false;
    } else {
      $('form.tweet-form').show(1000);
      $('#tweet-text').focus();
      state = true;
    }
  });
});