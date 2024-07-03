import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const CategorySlice = createSlice({
  name: "productByCategory",
  initialState,
  reducers: {
    filterByCategory(state, action) {
      state.data = action.payload;
    },
  },
});
export const { filterByCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
