$(document).ready(function() {

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
    
      <section class="container">
        <form>
          <p>${tweet.content.text}</p>
        </form>
      </section>
    
      <footer class="container">
        <span class="need_to_be_rendered" datetime="2016-07-07T09:24:17Z"></span>
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
      let tweetObj = tweetData[tweetData.length - 1];
      $('.tweets').prepend(createTweetElement(tweetObj));
    });
  };
  
  const ajaxSubmit = function() {
    $("form").submit(function(event) {
      event.preventDefault();
      const text = $(this).serialize();
      $.ajax({
        method: "POST",
        url: "/tweets/",
        data: text
      });
      reloadTweet();
      $(this).trigger("reset");
    });
  };
  
  
  loadTweets();
  ajaxSubmit();
});