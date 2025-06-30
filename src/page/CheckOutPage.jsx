import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCart, selectCartTotal } from "../store/slice/CartSlice";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const CheckOutPage = () => {
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    note: "",
  });
  const [payment, setPayment] = useState("cod");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Order info:", { shipping, payment, cart });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Header isScrolled={true} />
      <section className="bg-gray-50 py-12 min-h-screen">
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <h1 className="text-3xl font-bold mb-10 text-center text-gray-900 tracking-tight mt-12">
            Checkout
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 sm:p-10 rounded-2xl shadow-lg"
          >
            {/* Shipping Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={shipping.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={shipping.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={shipping.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={shipping.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={shipping.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
                <textarea
                  name="note"
                  value={shipping.note}
                  onChange={handleChange}
                  placeholder="Order Note (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  rows={3}
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Payment Method
                </h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={payment === "cod"}
                      onChange={handlePaymentChange}
                      className="accent-amber-600"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={payment === "card"}
                      onChange={handlePaymentChange}
                      className="accent-amber-600"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={payment === "bank"}
                      onChange={handlePaymentChange}
                      className="accent-amber-600"
                    />
                    <span>Bank Transfer</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`mt-10 w-full py-3 rounded-lg text-white font-semibold text-lg shadow transition-colors ${
                  submitted
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700"
                }`}
                disabled={submitted}
              >
                {submitted ? "Order Placed!" : "Place Order"}
              </button>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Order Summary
              </h2>
              <div className="bg-gray-100 rounded-xl p-4 mb-4 max-h-96 overflow-y-auto shadow-inner">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center justify-between mb-4 pb-4 border-b last:border-b-0 last:mb-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg border"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.product.category}
                          </p>
                          <p className="text-sm text-gray-500">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between items-center font-semibold text-lg px-2 py-4 border-t">
                <span>Total:</span>
                <span className="text-amber-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckOutPage;
