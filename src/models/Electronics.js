const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        minLength: [10, 'Name should be at least 10 characters']
    },
    type: {
        type: String,
        required: [true, 'Please enter type'],
        minLength: [2, 'Type should be at least 2 characters']
    },
    damages: {
        type: String,
        required: [true, 'Please enter damages'],
        minLength: [10, 'Damages should be at least 10 characters']
    },
    image: {
        type: String,
        required: [true, 'Please enter image'],
        match: [/^https?:\/\//, ' Image is required and should start with http:// or https://']
    },
    description: {
        type: String,
        required: [true, 'Please enter description'],
        minLength: [10, 'Description should be at least 10 characters'],
        maxLength: [200, 'Description should be  maximum 200 characters']
    },
    production: {
        type: Number,
        required: [true, 'Please enter production'],
        min: [1900, 'Year of production should be between 1900 and 2023'],
        max: [2023, 'Year of production should be between 1900 and 2023']
    },
    exploitation: {
        type: Number,
        required: [true, 'Please enter exploitation'],
        min: [0, 'Exploitation should be positive number']
    },
    price: {
        type: Number,
        required: [true, 'Please enter price'],
        min: [0, 'Price should be positive number']
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});


const Electronics = mongoose.model('Electronics', electronicsSchema);

module.exports = Electronics;