const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['General']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function() {
    console.log("Hello! Hi! Howdy!");
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 1.99});
};

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct);
    // foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

// findProduct();

Product.fireSale().then(res => console.log(res));

// const bike = new Product({name: 'Mountain Bike', price: 599.99, color: 'red'});
// const bike = new Product({name: 'Bike Helmet', price: 29.50, categories: ['Cycling', 'Safety']});
// const bike = new Product({name: 'Tire Pump', price: 9.50, categories: ['Cycling']});
// bike.save()
//     .then(data => {
//         console.log("Product saved:", data);
//     })
//     .catch(err => {
//         console.log("Error saving product:", err);
//     });


// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 12.99}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("Product saved:", data);
//     })
//     .catch(err => {
//         console.log("Error saving product:", err);
//     });

