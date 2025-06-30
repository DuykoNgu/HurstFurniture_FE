import React from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../comon/Button";
import { useNavigate } from "react-router-dom";

import {
  selectCart,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../store/slice/CartSlice";

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button variant="primary" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex mb-4 pb-4 border-b">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.product.id))
                        }
                        className="text-gray-500 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <p className="text-gray-500 text-sm">
                      {item.product.category}
                    </p>
                    <p className="font-semibold mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              productId: item.product.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                        className="p-1 border rounded-l border-gray-300 hover:bg-gray-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 border-t border-b border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              productId: item.product.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        className="p-1 border rounded-r border-gray-300 hover:bg-gray-100"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <Button variant="outline" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </Button>
                <Button
                  variant="primary"
                  onClick={handleCheckout}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
