import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  name: string;
  catagory: string;
  qty: number;
}
const initialState: ProductState[] = [
  { name: "shoes", catagory: "bata", qty: 2 },
  { name: "sandle", catagory: "stylo", qty: 4 },
  { name: "heel", catagory: "metro", qty: 7 },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      // initialState in this state
      state.push(action.payload)
    },
    deleteProduct(state, action) {},
  },
});


export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
