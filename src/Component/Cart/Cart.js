import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  const reducer = cart.reduce(
    (totals, product) => totals + product.price * product.quantity,
    0
  );
  debugger;

  const total = Number(reducer.toFixed(2));
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  return (
    <div>
      <h3>Order Summary </h3>
      <p>Items ordered: {cart.length}</p>
      <p>Product Price: {total}</p>
      <p>
        <small>Shipping cost:{shipping} </small>
      </p>
      <p>Total Price: {total + shipping}</p>

      <Link to="/review">
        <button className="main-button">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
