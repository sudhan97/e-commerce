import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../Components/Product List/ProductList.tsx";
import "./MyCart.css";
function MyCart() {
  const cart = useSelector((state: any) => state.cart);
  return (
    <Fragment>
      {cart?.length ? <ProductList products={cart} /> : <h1>Cart is Empty</h1>};
    </Fragment>
  );
}
export default MyCart;
