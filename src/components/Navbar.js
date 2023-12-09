
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ products }) => {
 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="container mx-auto bg-gray-800 p-4 flex justify-between items-center text-white">
      <div>
        <span className="text-lg font-bold">Latracal</span>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded text-black focus:outline-none"
          onChange={handleSearchChange}
          value={searchTerm}
          list="productsList"
        />
        <datalist id="productsList">
          {filteredProducts.map((product) => (
            <option key={product.id} value={product.title} />
          ))}
        </datalist>
        {searchTerm && (
          <div className="absolute bg-white w-full mt-1 border text-black border-gray-300 rounded z-50 max-h-40 overflow-y-auto">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="block px-4 py-2 text-black hover:bg-gray-200"
                style={{ display: "block", width: "100%" }}
              >
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
