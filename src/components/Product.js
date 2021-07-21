import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div>
        <img src={product.sprites.front_default} alt={product.title} />
        <div>
          <div>
            <h3>{product.title}</h3>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
          </div>
          <div>Agregar al carrito 🛒</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
