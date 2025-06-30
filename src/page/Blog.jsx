import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import PageHero from "../components/PageHero";
import SearchAndFilter from "../components/SearchAndFilter";
const Blog = () => {
  return (
    <div>
      <Header />
      <PageHero
        title="Our Blog"
        description="Discover the latest trends, tips, and insights about furniture and interior design"
      />

      <Footer />
    </div>
  );
};

export default Blog;
