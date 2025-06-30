import React from "react";
import { useState } from "react";
import Button from "./Button";
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscring email", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text 3xl md:text-4xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-8">
            Stay updated with our latest products, exclusive offers, and
            interior design tips.
          </p>
          {submitted ? (
            <div className="bg-green-600 text-white p-4 rounded-lg">
              Thank you for subscribing!
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-amber-600"
                required
              />
              <Button
                type="submit"
                variant="primary"
                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
