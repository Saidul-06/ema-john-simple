import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>

      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product /* no work */)}
      >
        Add to Cart <FontAwesomeIcon icon={faCoffee} />
      </button>
    </div>
  );
};

export default Product;
