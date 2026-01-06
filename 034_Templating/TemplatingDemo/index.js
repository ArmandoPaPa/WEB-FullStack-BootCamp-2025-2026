const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // res.send("HI!");
    res.render('home'); // no need to specify .ejs extension
});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats', { catsList: cats });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subredditName: subreddit });
});

app.get('/rand', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: randomNum });
});

app.listen(8080, () => {
   console.log("Server is running on http://localhost:8080");
});
