import React, { useState } from "react";
import { Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Features from "../components/comon/Features";
import PageHero from "../components/PageHero";
import FilterSidebar from "../components/shop/Filters/FiltersSideBar";
import SortDropdown from "../components/shop/Filters/SortDropDown";
import { useProducts } from "../components/hooks/useProducts";
import { addToCart } from "../store/slice/CartSlice";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lấy sản phẩm đã filter/sort từ custom hook
  const { products, loading, totalProducts } = useProducts();
  // Lấy search query từ Redux

  // Handler khi nhấn "View Details"
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    // Hoặc: điều hướng sang trang chi tiết nếu muốn
    // navigate(`/product/${product.id}`);
  };

  const closeModal = () => setSelectedProduct(null);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    closeModal();
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <PageHero
        title="Shop"
        subtitle="Discover our curated collection of premium products"
      />
      <Features />

      {/* Main shop section */}
      <section className="bg-gray-50 min-h-screen pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section với title và controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-gray-600 mt-1">
                {totalProducts} product
                {totalProducts !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 lg:hidden"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <SortDropdown />
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <FilterSidebar isOpen={true} onClose={() => {}} />
              </div>
            </div>
            {/* Mobile Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />

            {/* Products Grid Section */}
            <div className="flex-1">
              {products.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                      Load More Products
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search terms to find what
                    you're looking for.
                  </p>
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Adjust Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Modal hiển thị chi tiết sản phẩm */}
        {selectedProduct && (
          <>
            <div
              className="fixed inset-0 bg-black/50 opacity-60 z-50"
              onClick={closeModal}
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {selectedProduct.category}
                  </p>
                  <p className="text-xl font-bold mb-4">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700 mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className="border border-gray-300 rounded px-4 py-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-amber-600 text-white rounded px-4 py-2"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Shop;
