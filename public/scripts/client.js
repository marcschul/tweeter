/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// $(document).ready(function(){
//   const tweet = $(`<article class="tweet-container tweet">2nd tweet</article>`);
//   $('.tweets-container').append(tweet);
// });

// const createTweetElement = function($tweet) {
//   return $tweet;
// };


// Test / driver code (temporary). Eventually will get this from the server.

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(tweet) {
  let $tweet =  $(`<article class="tweet-container tweet">

  <header class="container">
    <section>
      <i class="fas fa-user"></i>
      <span id="userName">Rhoda Jacobs</span>
    </section>
    <span id="tweetName">@MrsJacobs</span>  
  </header>

  <section class="container">
    <form>
      <p>Hello World!</p>
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



const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log(createTweetElement(tweetData))
console.log($tweet); // to see what it looks like

$(document).ready(function() {
  
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})