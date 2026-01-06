const express = require("express");

const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!!");
//     // res.send("Hello! We got your request! This is the response.");
//     // res.send({color: "red"});
//     res.send('<h1>This is my webpage</h1><p>Hello World</p>');
// });

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1><p>This is the main page.</p>');
});

app.post('/cats', (req, res) => {
    res.send('<h1>POST request to /cats</h1><p>You have posted to the cats page.</p>');
});

app.get('/cats', (req, res) => {
    res.send('<h1>Meow!</h1><p>This is the cats page.</p>');
});

app.get('/dogs', (req, res) => {
    res.send('<h1>Woof!</h1><p>This is the dogs page.</p>');
});

app.get('/r/:subreddit', (req, res) => {
    res.send("This is a subreddit page for: " + req.params.subreddit);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    res.send("Viewing post " + req.params.postId + " on the " + req.params.subreddit + " subreddit.");
});

app.get('/search', (req, res) => {
    console.log(req.query);
    if (!req.query.q) {
        return res.send('<h1>Search Page</h1><p>Please provide a search query.</p>');
    }
    res.send('<h1>Search Results</h1><p>You searched for: ' + req.query.q + '</p>');
});

app.get(/(.*)/, (req, res) => {
    res.send('<h1>404 Not Found</h1><p>Sorry, the page you are looking for does not exist.</p>');
});

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});

