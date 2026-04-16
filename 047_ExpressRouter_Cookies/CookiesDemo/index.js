const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('mysecretkey'));

app.get('/greet', (req, res) => {
    // console.log(req.cookies);
    const { name = 'Minion'} = req.cookies;
    res.send(`Hey there, ${name}! Welcome to the world of cookies!`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'John Snow');
    res.cookie('animal', 'Direwolf');
    res.send("Cookie has been set!");
});

app.get('/getsignedcookie', (req, res) => {
    res.cookie('Unit', 'SWAT', { signed: true });
    res.send("Signed cookie has been set!");
});

app.get('/verifysignedcookie', (req, res) => {
    console.log(req.cookies);
    const { Unit } = req.signedCookies;
    if (Unit) {
        res.send(`The value of the signed cookie 'Unit' is: ${Unit}`);
    } else {
        res.send("No valid signed cookie found for 'Unit'.");
    }
});

app.listen(3000, () => {
    console.log('Server is running on localhost: 3000');
});