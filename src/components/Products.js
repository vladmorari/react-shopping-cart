import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
// Components
import Product from "./Product";

const Products = () => {
  const value = useContext(ProductContext);
  console.log(">>>>",value.prod)
  return (
    <div className="products-container">
      {value.prod.map((product) => (
        <Product key={product.id} product={product} addItem={value.fun} />
      ))}
    </div>
  );
};

export default Products;
