const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use((req, res, next) => {
//     console.log('HEYYYY!!!');
// });

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('THIS IS MY FIRST MIDDLEWARE!!!');
//     return next();
//     // return next() will stop the execution of the current middleware and move on to the next one. If we don't call next(),
//     // the request will be left hanging and won't proceed to the next middleware
//     // or route handler. Any line after next() will not be executed, so if we want to do something after the next middleware has finished,
//     // we can place it after the next() call.
//     console.log('THIS IS MY FIRST MIDDLEWARE AFTER CALLING NEXT!!!');
// });
//
// app.use((req, res, next) => {
//     console.log('THIS IS MY SECOND MIDDLEWARE!!!');
//     return next();
// });
//
// app.use((req, res, next) => {
//     console.log('THIS IS MY THIRD MIDDLEWARE!!!');
//     return next();
// });

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

// app.use('/secret', (req, res, next) => {
//     console.log(req.query);
//     const {password} = req.query;
//     if (password === 'meow') {
//         return next();
//     }
//     res.send('SORRY YOU NEED A PASSWORD!!!');
// });

const verifyPassword = ((req, res, next) => {
    console.log(req.query);
    const {password} = req.query;
    if (password === 'meow') {
        return next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!!');
});

app.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
    console.log(req.requestTime);
    res.send('WOOF WOOF');
});

app.get('/secret', verifyPassword, (req, res) => {
    console.log(req.requestTime);
    res.send('THIS IS A SECRET!!!');
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!!');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});

