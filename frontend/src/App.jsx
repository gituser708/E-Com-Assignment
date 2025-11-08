import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/products";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { getCart } from "./API/cartAPI";

export default function App() {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getCart();
        setCartCount(data.totalItems);
      } catch {
        setCartCount(0);
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Products setCartCount={setCartCount} />} />
        <Route
          path="/cart"
          element={<Cart setCartCount={setCartCount} />}
        />{" "}
        {/* ✅ Fixed */}
      </Routes>
    </React.Fragment>
  );
}
