import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductsSlice from "./ProductsSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
    productByCategory: CategorySlice,
  },
});
