const data = [
    // index 0
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },

    // index 1
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }

  ]

const createTweetElement = function(tweet) {
  let $tweet =  $(`<article class="tweet-container tweet">

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
    console.log(tweet)
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

$(document).ready(function() {
  renderTweets(data);
});