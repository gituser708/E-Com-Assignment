import React from "react";
import axios from "axios";
import { addToCart } from "../API/cartAPI";
import toast from "react-hot-toast";

const PRODUCT_URL = "https://fakestoreapi.com/products";

export default function Products({ setCartCount }) {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => { 
    axios.get(PRODUCT_URL).then((res) => {
      setLoading(false);
      setProducts(res.data);
    }).catch((err) => {
      setError(err);
      setLoading(false);
      console.error(err);
    });
  }, []);

  const handleAddToCart = async (productId) => {
    try {
       await addToCart(productId);
      toast.success("Added to cart!");

      setCartCount((prev) => prev + 1);
    } catch (err) {
      toast.error("Failed to add item!");
    }
  };

  return (
    <div className="p-6">
      {error && <h2 className="text-red-500 text-center">{error}</h2>}
      {loading && <h2 className="animate-bounce text-red-400 text-center text-3xl"
      >Loading Products...</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain p-4"
            />
            <div className="flex flex-col grow p-4">
              <p className="text-base font-semibold mb-2 line-clamp-2">
                {product.title}
              </p>
              <p className="text-red-500 font-semibold text-lg mb-4">
                ${product.price}
              </p>
              <button
                className="mt-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold 
                px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
