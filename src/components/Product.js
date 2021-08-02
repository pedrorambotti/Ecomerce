import React from "react";

const Product = (props) => {
  const { product, setComprar } = props;

  return (
    <div>
      <div>
        <div>
          <div className="grid-container">
            <div className="item1">
              <h3>{product.title}</h3>
              <img src={product.image} className="product-image" />
              <div className="grid-item">${product.price}</div>
              <div className="grid-item">{product.description}</div>
              <div className="grid-item">{product.category}</div>
            </div>
            <button
              className="agregar-carrito"
              onClick={() => {
                setComprar();
              }}
            >
              Agregar al carrito 🛒
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
