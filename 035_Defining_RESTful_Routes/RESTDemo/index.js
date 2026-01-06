const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); // needed to install older version of uuid: 11.1.0
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    { id: uuid(), username: 'Todd', comment: 'I love tacos!' },
    { id: uuid(), username: 'Skyler', comment: 'Tacos are the best food.' },
    { id: uuid(), username: 'Sk8erBoi', comment: 'Can never have too many tacos.' },
    { id: uuid(), username: 'onlysayswoof', comment: 'woof woof woof' }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(comment => comment.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // const commentIndex = comments.findIndex(comment => comment.id === id);
    // comments.splice(commentIndex, 1);
    comments = comments.filter(comment => comment.id !== id);
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send("POST /tacos response");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
