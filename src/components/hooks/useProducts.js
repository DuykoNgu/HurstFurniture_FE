import React, { useEffect } from "react";
import {
  setFilteredProducts,
  sortProducts,
} from "../../store/slice/productSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { products } from "../../data/demodata";
export const useProducts = () => {
  const dispatch = useAppDispatch();
  const { allProducts, filteredProducts, loading, error } = useAppSelector(
    (state) => state.products
  );
  const filters = useAppSelector((state) => state.filters);
  useEffect(() => {
    // Bắt đầu với toàn bộ danh sách sản phẩm
    let filtered = [...allProducts];

    // FILTER 1: Lọc theo danh mục
    if (filters.selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() ===
          filters.selectedCategory.toLowerCase()
      );
    }

    // FILTER 2: Lọc theo khoảng giá
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

    // FILTER 3: Lọc theo rating tối thiểu
    if (filters.minRating > 0) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.minRating
      );
    }

    // FILTER 4: Lọc theo từ khóa tìm kiếm
    // if (filters.searchQuery.trim()) {
    //   const query = filters.searchQuery.toLowerCase();
    //   filtered = filtered.filter(
    //     (product) =>
    //       // Tìm kiếm trong tên sản phẩm
    //       product.name.toLowerCase().includes(query) ||
    //       // Tìm kiếm trong mô tả
    //       product.description.toLowerCase().includes(query) ||
    //       // Tìm kiếm trong danh mục
    //       product.category.toLowerCase().includes(query)
    //   );
    // }

    // FILTER 5: Chỉ hiển thị sản phẩm đang sale
    if (filters.showOnSale) {
      filtered = filtered.filter((product) => product.isSale);
    }

    // FILTER 6: Chỉ hiển thị sản phẩm mới
    if (filters.showNew) {
      filtered = filtered.filter((product) => product.isNew);
    }

    // Dispatch kết quả filtering để cập nhật Redux store
    dispatch(setFilteredProducts(filtered));
  }, [allProducts, filters, dispatch]); // Dependencies: chạy lại khi có thay đổi
  useEffect(() => {
    dispatch(sortProducts(filters.sortBy));
  }, [filters.sortBy, dispatch]);

  return {
    products: filteredProducts, // Danh sách sản phẩm đã được filter và sort
    loading, // Trạng thái loading
    error, // Lỗi nếu có
    totalProducts: filteredProducts.length, // Tổng số sản phẩm sau filter
  };
};
