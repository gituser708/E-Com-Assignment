const express = require('express');
const Cart = require('../model/Cart');

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    try {
        const items = await Cart.find();
        const totalCost = items.reduce((acc, item) => acc + item.totalPrice, 0);
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
        res.json({ items, totalCost, totalItems });
    } catch (error) {
        res.status(404).json({
            message: 'Item not found!'
        });
        console.error(error);
    };
});

cartRouter.post("/", async (req, res) => {
    try {
        const { productId, title, price, image, quantity } = req.body;

        let existing = await Cart.findOne({ productId });
        if (existing) {
            existing.quantity += quantity;
            existing.totalPrice = existing.quantity * existing.price;
            await existing.save();
            return res.json(existing);
        };
        const newItem = new Cart({
            productId, title, price, image, quantity, totalPrice: price * quantity
        });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error to add product' });
        console.error(error);
    };
});

cartRouter.put("/:id", async (req, res) => {
    try {
        const { quantity } = req.body;
        const item = await Cart.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found!' });

        item.quantity = quantity;
        item.totalPrice = item.price * quantity;
        await item.save();
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: 'An error occured!' });
        console.error(error);
    };
});

cartRouter.delete("/:id", async (req, res) => {
    try {
        const deleted = await Cart.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Item not found!' });
        res.json({ message: 'Item removed' });
    } catch (error) {
        res.status(500).json({ message: 'There is an error!' });
        console.error(error);
    };
});

module.exports = cartRouter;