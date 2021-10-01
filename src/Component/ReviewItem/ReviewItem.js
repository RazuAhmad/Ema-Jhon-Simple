import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, quantity, price, seller, key } = props.product;
  return (
    <div className="reviewItem">
      <h3 className="product-name">{name}</h3>
      <br />

      <div className="another">
        <div className="sellerQuantity">
          <p> $ {price}</p>
          <p>sold by: {seller}</p>
          <p>Quantity: {quantity}</p>
          <button
            className="main-button"
            onClick={() => props.handleRemoveClick(key)}
          >
            Remove
          </button>
        </div>

        <div className="shippingOptions">
          <h4>Shipping Options</h4>
          <p>
            <input type="radio" name="" id="" />
            8-10 business days
          </p>
          <p>$0-Free Shipping</p>
          <p>
            <input type="radio" name="" id="" />
            5-7 business days
          </p>
          <p>$3.99-Regular Shipping</p>
          <p>
            <input type="radio" name="" id="" />
            8-10 business days
          </p>
          <p>$7.99-Standard Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
