const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    title: String,
    price: Number,
    image: String,
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: Number
}, {
    timestamps: true
});

module.exports =  mongoose.model("Cart", cartSchema);

