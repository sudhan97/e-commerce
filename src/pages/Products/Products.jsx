import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/ProductsSlice.js";
import ProductList from "../../Components/Product List/ProductList.tsx";
import { filterByCategory } from "../../store/CategorySlice.js";
import "./products.css";
export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products);
  const byCategories = useSelector((state) => state?.productByCategory);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(byCategories);
  return (
    <Fragment>
      <div className="filter_container">
        <select
          onChange={(e) => {
            const filteredProducts = products?.data?.filter(
              (item) => item?.category === e?.target?.value
            );
            dispatch(filterByCategory(filteredProducts));
          }}
        >
          <option value="men's clothing">Mens Clothing</option>
          <option value="jewelery">Jwellerkjsfky</option>
          <option value="women's clothing">Womens Clothing</option>
          <option value="electronis">Electronics</option>
        </select>
      </div>
      <ProductList
        products={
          byCategories?.data?.length ? byCategories?.data : products?.data
        }
      />
      ;
    </Fragment>
  );
}
