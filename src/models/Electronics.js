const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        minLength: [10, 'Name should be at least 10 characters long.']
    },
    type: {
        type: String,
        required: [true, 'Please enter type'],
        minLength: [2, 'Name should be at least 2 characters long.']
    },
    damages: {
        type: String,
        required: [true, 'Please enter damages'],
        minLength: [10, 'Name should be at least 10 characters long.']
    },
    image: {
        type: String,
        required: [true, 'Please enter image'],
        match: [/^https?:\/\//, ' Image is required and should start with http:// or https://']
    },
    description: {
        type: String,
        required: [true, 'Please enter description'],
        minLength: [10, 'Description is required and should be between 10 and 200 characters.'],
        maxLength: [200, 'description is required and should be between 10 and 200 characters.']
    },
    production: {
        type: Number,
        required: [true, 'Please enter production'],
        min: [1900, 'Production should be between 1900 and 2023.'],
        maxL: [2023, 'Production should be between 1900 and 2023.']
    },
    exploitation: {
        type: Number,
        required: [true, 'Please enter exploitation'],
        min: [0, 'Please enter valid number']
    },
    price: {
        type: Number,
        required: [true, 'Please enter price'],
        min: [0, 'Please enter valid price.']
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