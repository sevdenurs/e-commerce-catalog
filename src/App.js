import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  function removeFromCart(productId) {
    setCart(cart.filter(item => item.id !== productId));
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ana sayfa rotası, tüm ürünlerin listelendiği sayfa */}
          <Route path="/" element={<ProductList addToCart={addToCart} />} />

          {/* Ürün detay sayfası rotası, seçilen ürünün detayları gösterilir */}
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />} />
        </Routes>

        {/* Sepet bileşenini tüm sayfalarda göstermek için */}
        <Cart cart={cart} removeFromCart={removeFromCart} />

      </div>
    </Router>
  );
}

export default App;
