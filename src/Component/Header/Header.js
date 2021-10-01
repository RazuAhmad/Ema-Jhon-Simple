import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav className="navBar">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory here</a>
        <br />
        <input type="text" name="" id="" placeholder="type here to search" />
      </nav>
    </div>
  );
};

export default Header;
