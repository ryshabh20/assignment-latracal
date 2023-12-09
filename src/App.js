import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar products={products}/>
        <Routes>
          <Route
            path="/"
            element={<ProductList products={filteredProducts} />}
          ></Route>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
