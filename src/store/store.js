import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import filtersReducer from "./slice/fillterSlice";
import productsReducer from "./slice/productSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer,
    products: productsReducer,
  },
});
