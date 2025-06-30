import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "all", // Mặc định hiển thị tất cả danh mục
  priceRange: { min: 0, max: 1000 }, // Khoảng giá mặc định rộng
  minRating: 0, // Không filter theo rating
  sortBy: "featured", // Sắp xếp mặc định theo "nổi bật"
  searchQuery: "", // Không có từ khóa tìm kiếm
  showOnSale: false, // Không filter theo sale
  showNew: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRangericeRange = action.payload;
    },
    setMinRating: (state, action) => {
      state.minRating = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setShowOnSale: (state, action) => {
      state.showOnSale = action.payload;
    },
    setShowNew: (state, action) => {
      state.showNew = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = "all";
      state.priceRange = { min: 0, max: 1000 };
      state.minRating = 0;
      state.searchQuery = "";
      state.showOnSale = false;
      state.showNew = false;
      // Giữ lại sortBy không reset
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setMinRating,
  setSortBy,
  setSearchQuery,
  setShowOnSale,
  setShowNew,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
