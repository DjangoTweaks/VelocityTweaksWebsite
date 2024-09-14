const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    fileName: { type: String, required: true },
    originalName: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
