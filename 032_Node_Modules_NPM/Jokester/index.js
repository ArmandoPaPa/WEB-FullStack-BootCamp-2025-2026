const jokes = require("give-me-a-joke");
// console.dir(jokes);

const colors = require('colors');

// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
    console.log(joke);
});


// To get a random dad joke in Colors
jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});


