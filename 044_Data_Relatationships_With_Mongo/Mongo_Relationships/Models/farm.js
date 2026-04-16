const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

// Product.insertMany([
//     {name: 'Grapes', price: 5, season: 'Fall'},
//     {name: 'Strawberries', price: 8, season: 'Spring'},
//     {name: 'Watermelon', price: 10, season: 'Summer'},
//     {name: 'Oranges', price: 6, season: 'Winter'},
// ]);

const Farm = mongoose.model('Farm', farmSchema);

// const makeFarm = async () => {
//     const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'});
//     const grapes = await Product.findOne({name: 'Grapes'});
//     const oranges = await Product.findOne({name: 'Oranges'});
//     farm.products.push(grapes);
//     farm.products.push(oranges);
//     await farm.save();
// };

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name: 'Full Belly Farms'});
    const strawberries = await Product.findOne({name: 'Strawberries'});
    farm.products.push(strawberries);
    await farm.save();
};

// addProduct();

Farm.findOne({name: 'Full Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm));

