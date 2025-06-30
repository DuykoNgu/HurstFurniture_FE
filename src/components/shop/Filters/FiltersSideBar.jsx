import React from "react";
import { Star, X, RotateCcw } from "lucide-react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  setCategory,
  setPriceRange,
  setMinRating,
  setShowOnSale,
  setShowNew,
  resetFilters,
} from "../../../store/slice/fillterSlice";

/**
 * Component sidebar chứa tất cả các filter options
 * Responsive: hiển thị dạng sidebar cố định trên desktop, overlay trên mobile
 */
const FilterSidebar = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  // Lấy state từ Redux
  const filters = useAppSelector((state) => state.filters);
  const { allProducts } = useAppSelector((state) => state.products);

  // Tính toán các giá trị động từ dữ liệu sản phẩm
  const categories = [
    "all",
    ...Array.from(new Set(allProducts.map((p) => p.category))),
  ];
  const maxPrice = Math.max(...allProducts.map((p) => p.price));

  // Handlers cho các filter actions
  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  const handlePriceRangeChange = (min, max) => {
    dispatch(setPriceRange({ min, max }));
  };

  const handleRatingChange = (rating) => {
    dispatch(setMinRating(rating));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  // Không render gì nếu sidebar đóng (chỉ áp dụng cho mobile)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Overlay cho mobile - click để đóng sidebar */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar content */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:shadow-none overflow-y-auto">
        <div className="p-6">
          {/* Header với title và các action buttons */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <div className="flex items-center gap-2">
              {/* Button reset filters */}
              <button
                onClick={handleResetFilters}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                title="Reset Filters"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              {/* Button đóng sidebar (chỉ hiện trên mobile) */}
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 lg:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* FILTER SECTION 1: Categories */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Categories
            </h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center cursor-pointer"
                >
                  {/* Radio button cho category selection */}
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                  />
                  <span className="ml-3 text-sm text-gray-700 capitalize">
                    {category === "all" ? "All Categories" : category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* FILTER SECTION 2: Price Range */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Price Range
            </h4>
            <div className="space-y-3">
              {/* Input fields cho min/max price */}
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange.min}
                  onChange={(e) =>
                    handlePriceRangeChange(
                      Number(e.target.value),
                      filters.priceRange.max
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange.max}
                  onChange={(e) =>
                    handlePriceRangeChange(
                      filters.priceRange.min,
                      Number(e.target.value)
                    )
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              {/* Range slider cho max price */}
              <input
                placeholder="number"
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange.max}
                onChange={(e) =>
                  handlePriceRangeChange(
                    filters.priceRange.min,
                    Number(e.target.value)
                  )
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* FILTER SECTION 3: Rating */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Minimum Rating
            </h4>
            <div className="space-y-2">
              {[4, 3, 2, 1, 0].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.minRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="w-4 h-4 text-amber-600 border-gray-300 focus:ring-amber-500"
                  />
                  <div className="ml-3 flex items-center">
                    {rating > 0 ? (
                      <>
                        {/* Render stars cho rating */}
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-700">& up</span>
                      </>
                    ) : (
                      <span className="text-sm text-gray-700">All Ratings</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* FILTER SECTION 4: Special Offers */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Special Offers
            </h4>
            <div className="space-y-3">
              {/* Checkbox cho "On Sale" filter */}
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.showOnSale}
                  onChange={(e) => dispatch(setShowOnSale(e.target.checked))}
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <span className="ml-3 text-sm text-gray-700">On Sale</span>
              </label>
              {/* Checkbox cho "New Arrivals" filter */}
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.showNew}
                  onChange={(e) => dispatch(setShowNew(e.target.checked))}
                  className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <span className="ml-3 text-sm text-gray-700">New Arrivals</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
