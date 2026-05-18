const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('dev'));

app.use((req, res, next) => {
    // req.method = "GET";
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!!');
    next();
});

const verifyPassword = ((req, res, next) => {
    console.log(req.query);
    const {password} = req.query;
    if (password === 'meow') {
        return next();
    }
    throw new AppError('PASSWORD required!!!', 401);
    // res.send('SORRY YOU NEED A PASSWORD!!!');
});

app.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send('HOME PAGE');
});

app.get('/error', (req, res) => {
    throw new Error('ERROR msg from /error!!!');
    // chicken.fly();
});

app.get('/dogs', (req, res) => {
    console.log(req.requestTime);
    res.send('WOOF WOOF');
});

app.get('/secret', verifyPassword, (req, res) => {
    console.log(req.requestTime);
    res.send('THIS IS A SECRET!!!');
});

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin!!!', 403);
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!!');
});

// app.use((err, req, res, next) => {
//     console.log('***********');
//     console.log('ERROR!!!');
//     console.log(err);
//     console.log('***********');
//     // res.status(500).send('SOMETHING WENT WRONG!!! Msg from error handler');
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    const { message = 'Error!! Msg from error handler.' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});

