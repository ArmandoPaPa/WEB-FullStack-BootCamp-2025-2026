const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("Sorry, NOT an Admin!")
});

router.get('/topsecret', (req, res) => {
    res.send('This is Top Secret Admin Information');
});

router.get('/deleteeverything', (req, res) => {
    res.send('OK Deleting Everything');
});


module.exports = router;
