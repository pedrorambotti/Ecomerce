//En este componente cuando escribo un producto y apreto el boton de buscar en la interfaz llamo a la funcion searchProduct , que ingresa en la api y utiliza el fetch api que me permite recibir la informacion del prodcuto que estoy buscando

import React from "react";
import { searchProduct } from "../api";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState("");

  const onChange = (evt) => {
    setSearch(evt.target.value);
  };
  const onClick = async (evt) => {
    const data = await searchProduct(search);
    setProduct(data);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="buscar producto" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
