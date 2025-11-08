import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar ({ cartCount }) {
  const navigate = useNavigate();

    return (
      <React.Fragment>
    <nav className="bg-orange-600 text-white flex items-center justify-between px-8 py-4 shadow-md">
      <Link to="/" className="text-4xl font-semibold">
        ShopKart
      </Link>

      <button
        onClick={() => navigate("/cart")}
        className="relative flex items-center space-x-2"
      >
        <FaShoppingCart className="w-7 h-7 cursor-pointer" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>
            </nav>
            </React.Fragment>
  );
};

