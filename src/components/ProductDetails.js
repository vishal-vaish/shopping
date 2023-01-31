import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function check() {
      setLoading(true);
      await fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setProductDetails(result);
          setLoading(false);
        });
    }
    check();
  }, [productDetails]);

  if (loading || !productDetails) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <img src={productDetails.image} width={400} height={300} alt="image" />
      <h1>{productDetails.price}</h1>
      <h3>{productDetails.title}</h3>
      <p>{productDetails.description}</p>
      <small>{productDetails.category}</small>
    </>
  );
}

export default ProductDetails;
