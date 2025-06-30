import React, { useState } from "react";
import { X } from "lucide-react";
import ProductCard from "../ProductCard";
import Button from "../comon/Button";
import PropTypes from "prop-types";
import { addToCart } from "../../store/slice/CartSlice";
import { useDispatch } from "react-redux";

const FeaturedProducts = ({ products, title, subtitle }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    closeModal();
  };
  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
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
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grpoiid-cols-2 gap-8 mt-4">
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
                  <Button variant="outline" size="large" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="large"
                    onClick={
                      () =>
                        // This would add to cart and close the modal
                        handleAddToCart(selectedProduct)
                      // closeModal();
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

FeaturedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default FeaturedProducts;
