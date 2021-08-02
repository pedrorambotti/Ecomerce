export const searchProduct = async (product) => {
  try {
    let url = `https://fakestoreapi.com/products/${product}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
export const getProducts = async (limit = 15, offset = 0) => {
  try {
    let url = `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {}
};
export const getProductsData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
