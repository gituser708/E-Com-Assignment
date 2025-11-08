import React from "react";
import { getCart, removeFromCart, updateQTY } from "../API/cartAPI";
import toast from "react-hot-toast";
import {FaTrash} from 'react-icons/fa';

const Cart = ({ setCartCount }) => {
  const [cart, setCart] = React.useState({ items: [], totalCost: 0, totalItems: 0 });

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
      setCartCount(data.totalItems);
    } catch (err) {
      toast.error("Failed to load cart");
    }
  };

  React.useEffect(() => {
    loadCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      toast.success("Item removed!");
      loadCart();
    } catch {
      toast.error("Error removing item!");
    }
  };

  const handleQtyChange = async (id, qty) => {
    if (qty < 1) return;
    try {
      await updateQTY(id, qty);
      loadCart();
    } catch {
      toast.error("Failed to update quantity!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">Your Cart</h2>

      {cart.items.length === 0 ? (
        <p className="text-center text-red-400 text-2xl">No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600">
                    ${item.price} × {item.quantity} ={" "}
                    <b>${item.totalPrice.toFixed(2)}</b>
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className="px-2 bg-gray-200 rounded-l cursor-pointer"
                  onClick={() => handleQtyChange(item._id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="px-2 bg-gray-200 rounded-r cursor-pointer"
                  onClick={() => handleQtyChange(item._id, item.quantity + 1)}
                >
                  +
                </button>
                <i
                  className="cursor-pointer ml-2"
                  onClick={() => handleRemove(item._id)}
                >
                  <FaTrash color="red" size={22} />
                </i>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-lg font-bold text-gray-800 text-center">
        Total Items: {cart.totalItems} | Total Cost: $
        {cart.totalCost.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
