const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
    },
    type: {
        type: String,
        required: [true, 'Please enter type'],
    },
    damages: {
        type: String,
        required: [true, 'Please enter damages'],
    },
    image: {
        type: String,
        required: [true, 'Please enter image'],
    },
    description: {
        type: String,
        required: [true, 'Please enter description'],
    },
    production: {
        type: Number,
        required: [true, 'Please enter production'],
    },
    exploitation: {
        type: Number,
        required: [true, 'Please enter exploitation'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter price'],
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