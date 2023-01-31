import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to={`/product/${props.item.id}`} style={{ color: "black" }}>
      <img src={props.item.image} height={200} width={200} />
      <h1>{props.item.price}</h1>
      <p>{props.item.description}</p>
    </Link>
  );
}

export default Product;
