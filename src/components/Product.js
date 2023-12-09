// src/components/Product.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
  description,
  price,
  images,
  stock,
  rating,
  brand,
  category,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="product border rounded overflow-hidden bg-white shadow-md transition-transform duration-300 hover:transform hover:scale-105">
      <Link to={`/products/${id}`}>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-40 object-cover object-center"
          loading="lazy"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">
          {isExpanded ? description : description.slice(0, 100) + "..."}
        </p>
        {isExpanded && (
          <div>
            <p className="text-gray-600 mb-2">Stock: {stock}</p>
            <p className="text-gray-600 mb-2">Rating: {rating}</p>
            <p className="text-gray-600 mb-2">Brand: {brand}</p>
            <p className="text-gray-600 mb-2">Category: {category}</p>
          </div>
        )}
        <p className="text-blue-500 font-bold">${price}</p>
        <button
          onClick={toggleDetails}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Product;
