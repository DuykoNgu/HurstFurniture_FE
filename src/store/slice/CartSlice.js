import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },

    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        // Nếu số lượng <= 0 thì xóa sản phẩm khỏi giỏ hàng
        state.items = state.items.filter(
          (item) => item.product.id !== productId
        );
      } else {
        // Nếu số lượng > 0 thì cập nhật số lượng mới
        const item = state.items.find((item) => item.product.id === productId);
        if (item) {
          item.quantity = quantity;
        }
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.cart.items;

// Selector để tính tổng tiền trong giỏ hàng
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

// Selector để đếm tổng số lượng sản phẩm trong giỏ hàng
export const selectCartItemsCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
