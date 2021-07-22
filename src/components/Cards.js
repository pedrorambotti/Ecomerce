import React from "react";
import Product from "./Product";

const Cards = (props) => {
  const { products } = props;
  return (
    <div>
      <div className="header">
        <h1>Products</h1>
        <div>Carrito 🛒</div>
      </div>
      <div className="cards-grid">
        {products.map((product, idx) => {
          return <Product product={product} key={product.title} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
