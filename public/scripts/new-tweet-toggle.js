$(document).ready(function() {
  let state = true;
  $('nav div.column').on("click", function() {
    if (state) {
      $('form.tweet-form').hide(1000);
      state = false;
    } else {
      $('form.tweet-form').show(1000);
      state = true; 
    }
  })
});