import axios from 'axios';
const API_URL = "http://localhost:5000/api/cart";

export const getCart = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const addToCart = async (product) => {
    await axios.post(API_URL, {
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
    });
};

export const updateQTY = async (id, quantity) => {
    await axios.put(`${API_URL}/${id}`, { quantity });
};

export const removeFromCart = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};