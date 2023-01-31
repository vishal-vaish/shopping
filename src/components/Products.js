import React, { useEffect, useState } from "react";
import ProductCard from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const allProducts = await response.json();
      setLoading(false);
      setProducts(allProducts);
    }
    getProducts();
  }, []);

  if (loading) {
    return <h1> Loading.....</h1>;
  }
  return (
    <>
      {products.map((product) => {
        return <ProductCard item={product} key={product.id} />;
      })}
    </>
  );
}
export default Products;
