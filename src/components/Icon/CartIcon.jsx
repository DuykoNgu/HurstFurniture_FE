import React from "react";
import { ShoppingCart } from "lucide-react";
import { selectCartItemsCount } from "../../store/slice/CartSlice";
import { useSelector } from "react-redux";
const CartIcon = ({ onClick }) => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  return (
    <button
      className="relative p-2 rounded-full group transition-colors duration-200"
      aria-label="Open cart"
      onClick={onClick}
    >
      <ShoppingCart
        size={24}
        className="transition-colors duration-200 group-hover:text-amber-500"
      />
      {cartItemsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs flex items-center justify-center rounded-full w-5 h-5 font-medium">
          {cartItemsCount > 9 ? "9+" : cartItemsCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
