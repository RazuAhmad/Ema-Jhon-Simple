import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // console.log("Product added", product);
    const newCart = [...cart, product];
    setCart(newCart);
    const productCount = newCart.filter((pd) => pd.key === product.key);
    const count = productCount.length;
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((nk) => (
          <Product
            key={nk.key}
            products={nk}
            handleAddProduct={handleAddProduct}
            showAddToCart={true}
          ></Product>
        ))}
      </div>

      <div className="addTo-Cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
