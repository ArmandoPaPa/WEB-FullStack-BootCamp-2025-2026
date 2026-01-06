const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        // console.log(products);
        // res.send('ALL PRODUCTS FOR A PARTICULAR CATEGORY WILL BE DISPLAYED HERE');
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
    // const products = await Product.find({});
    // // console.log(products);
    // // res.send('ALL PRODUCTS WILL BE DISPLAYED HERE');
    // res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
    // res.send('FORM TO CREATE A NEW PRODUCT');
    res.render('products/new', { categories });
});

app.post('/products', async (req, res) => {
    // res.send('MAKE A NEW PRODUCT');
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    // res.send('DETAILS ABOUT A SINGLE PRODUCT WILL BE DISPLAYED HERE');
    res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // res.send('FORM TO EDIT A PRODUCT');
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    // res.send('UPDATE A PARTICULAR PRODUCT');
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    // res.send('DELETE A PARTICULAR PRODUCT');
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

app.listen(3000, () => {
    console.log('APP is running on http://localhost:3000');
});

