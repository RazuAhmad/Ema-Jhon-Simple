import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = (props) => {
  // console.log(props);
  const {
    name,

    key,
    features,
    stock,
    img,
    price,
    star,
    seller,
  } = props.products;
  const handleAddProduct = props.handleAddProduct;
  return (
    <div className="product-main">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div className="product-details">
        <p className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </p>
        <p>
          <small>by: {seller}</small>
        </p>
        <div className="price-review-feature">
          <div className="price">
            <p>${price}</p>
            <p>Only {stock} left in stock -order soon</p>
            {props.showAddToCart && (
              <button
                className="main-button"
                onClick={() => handleAddProduct(props.products)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart
              </button>
            )}
          </div>
          <div className="features">
            <h3>{star}</h3>
            <h4>Features</h4>
            {features.map((nk) => (
              <li className="features-text" key={Math.random(2)}>
                {nk.description} : <strong>{nk.value}</strong>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
