import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const Product = () => {
  return (
    <div>
      <Header />
      <Hero
        title="Modern Furniture"
        subtitle="WELCOME TO OUR COLLECTION"
        buttonText="SHOP NOW"
      />
      <Footer />
    </div>
  );
};

export default Product;
