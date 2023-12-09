// src/components/ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p className="text-center text-gray-600 mt-4">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/3 pr-0 md:pr-4 mb-8 md:mb-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto rounded mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className="w-full h-auto rounded mb-4"
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-2/3">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

        <div className="mb-8">
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-blue-500 font-bold">Price: ${product.price}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="mb-2">
            <span className="font-bold">Brand:</span> {product.brand}
          </p>
          <p className="mb-2">
            <span className="font-bold">Rating:</span> {product.rating}
          </p>
          <p className="mb-2">
            <span className="font-bold">Stock:</span> {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
