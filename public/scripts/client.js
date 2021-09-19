// Main client JS file.
$(document).ready(function() {
    
  $(".error").hide();

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet =  $(`
    <article class="tweet-container tweet">
  
      <header class="container">
        <section class="avatar">
          <img src="${tweet.user.avatars}">
          <span class="user-name">${tweet.user.name}</span>
        </section>
        <span id="tweetName">${tweet.user.handle}</span>  
      </header>
    
      <section class="container-text">
          <p>${escape(tweet.content.text)}</p>
      </section>
    
      <footer class="container">
        <span>${timeago.format(tweet.created_at)}</span>
        <section class="icons">
          <a href="www.google.ca"><i class="fas fa-flag"></i></a>
          <a href="www.google.ca"><i class="fas fa-retweet"></i></a>
          <a href="www.google.ca"><i class="fas fa-heart"></i></a>
        </section>
      </footer>
  
    </article>`);
    return $tweet;
  };

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('.tweets').prepend(createTweetElement(tweet));
    }
  };
  
  const loadTweets = function() {
    $.get("/tweets", function(tweetData) {
      renderTweets(tweetData);
    });
  };
  
  const reloadTweet = function() {
    $.get("/tweets", function(tweetData) {
      const tweetObj = tweetData[tweetData.length - 1];
      $('.tweets').prepend(createTweetElement(tweetObj));
    });
  };
  
  const ajaxSubmit = function() {
    $("form").submit(function(event) {
      event.preventDefault();

      if ($("#tweet-text").val().length > 140) {
        return $(".error").show(500);
      }

      if ($("#tweet-text").val().length <= 0) {
        return $(".error").show(500);
      }

      const form = $(this);

      const text = form.serialize();
      
      $.ajax({
        method: "POST",
        url: "/tweets/",
        data: text
      })
      .then(function(data) {
        reloadTweet();
        $(".error").hide(250);
        form.trigger("reset");
      })
      .catch(function(error) {
        console.log(error);
      });

    });
  };
  
  $('#tweet-text').focus();
  loadTweets();
  ajaxSubmit();
});