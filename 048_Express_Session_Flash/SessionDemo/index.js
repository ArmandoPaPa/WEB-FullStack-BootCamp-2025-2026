const express = require('express');
const app = express();
const session = require('express-session');

// Configure session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`);
});

app.get('/register', (req, res) => {
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.send(`User ${username} registered successfully`);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
