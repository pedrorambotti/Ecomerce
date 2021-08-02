import React, { useState } from "react";
import Product from "./Product";
import Modal from "./Modal";
const Cards = (props) => {
  const { products } = props;
  const [comprar, setComprar] = useState([]);
  const [mostrarCompra, setMostrarCompra] = useState(false);
  const [isOpenModal, openModal] = useState(false);
  const [contenidoModal, setContenidoModal] = useState({});

  return (
    <div>
      <div className="header">
        <h1>Products</h1>
        <button
          className="button-carrito"
          onClick={() => setMostrarCompra(!mostrarCompra)}
        >
          Carrito 🛒({comprar.length})
        </button>
      </div>

      <div className="cards-grid">
        {!mostrarCompra
          ? products &&
            products.length &&
            products.map((product, idx) => {
              return (
                <Product
                  product={product}
                  setComprar={() => setComprar([...comprar, product])}
                />
              );
            })
          : comprar.map((product, idx) => {
              return (
                <Product
                  product={product}
                  setComprar={() => setComprar([...comprar, product])}
                />
              );
            })}

        <button onClick={() => {}}>Pagar</button>
      </div>
    </div>
  );
};

export default Cards;
