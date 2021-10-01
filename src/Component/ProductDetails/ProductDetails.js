import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = (props) => {
  //   console.log(props);
  const { productKey } = useParams();
  const product = fakeData.find((nk) => nk.key === productKey);
  // console.log(product);
  return (
    <div>
      <Product products={product} showAddToCart={false}></Product>
    </div>
  );
};

export default ProductDetails;
