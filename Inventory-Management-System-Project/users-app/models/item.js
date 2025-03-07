//define schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const itemSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    category: {
        type: String, 
        required: true 
    },
    quantity: {
        type: Number,
        default: 0 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        default: '' 
    },
    createdAt: { type: Date, default: Date.now }
})

//export
//Item will be the name 
module.exports = mongoose.model('Item', itemSchema);


