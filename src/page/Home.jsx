import React from "react";
import Hero from "../components/Hero";
import NewsLetter from "../components/comon/NewsLetter";
import Features from "../components/comon/Features";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import FeaturedProducts from "../components/Home/FeaturedProduct";
import { products } from "../data/demodata";
import SocialLink from "../components/comon/SocialLink";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          backgroundImage="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Modern Furniture"
          subtitle="WELCOME TO OUR COLLECTION"
          buttons={[
            {
              text: "Shop Now",
              variant: "primary",
              icon: <ChevronRight className="ml-2 h-4 w-4" />,
              className: "bg-amber-600 hover:bg-amber-700 text-white",
            },
            {
              text: "View Collection",
              variant: "outline",
              className: "text-white border-white hover:bg-white/10",
            },
          ]}
          onButtonClick={scrollToProducts}
        />
        <Features />
        <FeaturedProducts
          products={products}
          title="Featured Products"
          subtitle="Discover our handpicked selection of premium furniture pieces"
        />
        <NewsLetter />
        <SocialLink />
      </main>
      <Footer />
    </>
  );
};

export default Home;
