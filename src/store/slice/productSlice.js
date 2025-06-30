import { createSlice } from '@reduxjs/toolkit';
import { products as initialProducts } from '../../data/demodata';

// Khởi tạo state ban đầu
const initialState = {
  allProducts: initialProducts,     // Load dữ liệu demo ban đầu
  filteredProducts: initialProducts, // Ban đầu hiển thị tất cả sản phẩm
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action để set lại toàn bộ danh sách sản phẩm (dùng khi fetch từ API)
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    
    // Action để cập nhật danh sách sản phẩm đã được filter
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    
    // Action chính để sắp xếp sản phẩm theo các tiêu chí khác nhau
    sortProducts: (state, action) => {
      const sortOption = action.payload;
      // Tạo bản copy để tránh mutate trực tiếp
      let sortedProducts = [...state.filteredProducts];

      switch (sortOption) {
        case 'price-low':
          // Sắp xếp theo giá từ thấp đến cao
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          // Sắp xếp theo giá từ cao đến thấp
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // Sắp xếp theo độ mới: ưu tiên sản phẩm có flag isNew, sau đó theo ID
          sortedProducts.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return b.id - a.id;
          });
          break;
        case 'rating':
          // Sắp xếp theo rating từ cao đến thấp
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'featured':
        default:
          // Sắp xếp "nổi bật": ưu tiên sale -> new -> rating cao
          sortedProducts.sort((a, b) => {
            if (a.isSale && !b.isSale) return -1;
            if (!a.isSale && b.isSale) return 1;
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return b.rating - a.rating;
          });
          break;
      }
      state.filteredProducts = sortedProducts;
    },
    // Các action để quản lý trạng thái loading và error
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  sortProducts,
  setLoading,
  setError,
} = productsSlice.actions;

export default productsSlice.reducer;