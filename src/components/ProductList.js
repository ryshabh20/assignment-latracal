import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
