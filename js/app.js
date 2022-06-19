const app = new Vue({
    el: '#app',
    data: {
      username: 'Front-End Engineer',
      newTweet: '',
      tweets: [
        'I have been coding for over 2 years!', 
        'Its time to code.', 
        'I am now using Vue.'
      ],
      bio: 'Excited Front-End Engineer.'
    }
  });