import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSortBy } from '../../../store/slice/fillterSlice';

/**
 * Component dropdown để chọn cách sắp xếp sản phẩm
 * Kết nối với Redux để lưu trữ và cập nhật sortBy state
 */
const SortDropdown = () => {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector(state => state.filters);

  // Định nghĩa các tùy chọn sắp xếp với label hiển thị
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Best Rating' },
  ];

  // Handler để xử lý khi user chọn option mới
  const handleSortChange = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <div className="relative">
      {/* Select element với styling custom */}
      <select
        value={sortBy}
        onChange={(e) => handleSortChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      >
        {/* Render tất cả options */}
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            Sort by: {option.label}
          </option>
        ))}
      </select>

      {/* Icon dropdown arrow */}
      <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default SortDropdown;
