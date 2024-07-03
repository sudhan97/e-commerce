import React, { useEffect } from "react";
import "./App.css";
import ProductList from "./Components/Product List/ProductList.tsx";
import { getProducts } from "./store/ProductsSlice.js";
import { useDispatch, useSelector } from "react-redux";
export function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return <ProductList products={products?.data} />;
}
