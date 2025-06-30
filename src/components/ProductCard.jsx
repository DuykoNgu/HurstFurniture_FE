import React from "react";
import { useDispatch } from "react-redux";
import Button from "./comon/Button";
import { addToCart } from "../store/slice/CartSlice";
import PropTypes from "prop-types";
import { Star } from "lucide-react";

const ProductCard = ({ product, onViewDetails }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative overflow-hidden group">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {product.isNew && (
          <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-medium px-2 py-1 rounded">
            New
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              -
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              %
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <p className="text-gray-500 text-xs mb-1">{product.category}</p>
        <div className="flex items-center gap-1">
          {" "}
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>
          {/* <span className="text-sm text-gray-500">({product.reviews})</span> */}
        </div>
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <span className="text-black font-semibold mb-4">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-lg text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
        <div className="mt-auto flex gap-2">
          <Button
            variant="outline"
            size="medium"
            className="flex-1"
            onClick={() => onViewDetails(product)}
          >
            View
          </Button>
          <Button
            variant="primary"
            size="medium"
            className="flex-1"
            onClick={() => dispatch(addToCart(product))}
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;
