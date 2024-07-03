import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;

export function getProducts() {
  return function getInitialProductsThunk(dispatch, getState) {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(fetchProducts(data)));
  };
}
