import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
