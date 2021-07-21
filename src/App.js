import React from "react";
import Searchbar from "./components/Searchbar";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards";
import "./styles.css";
import { getProducts, getProductsData } from "./api";

const { useState, useEffect } = React;

export default function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      const promises = data.results.map(async (products) => {
        return await getProductsData(products.url);
      });
      const results = await Promise.all(promises);
      setProducts(results);
    } catch (err) {}
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="App">
        <Searchbar />
        <Cards products={products} />
      </div>
    </div>
  );
}
