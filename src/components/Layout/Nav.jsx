import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = ({ isScrolled, isMobile, onItemClick }) => {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/product", label: "Products" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Us" },
  ];

  const baseStyles = isMobile
    ? "flex flex-col space-y-4"
    : "hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2";

  const getLinkStyles = (path) => {
    const active = location.pathname === path;
    return `text-base font-medium transition-colors duration-200 ${
      isScrolled
        ? active
          ? "text-amber-600"
          : "text-gray-700 hover:text-amber-600"
        : active
        ? "text-amber-400"
        : "text-white hover:text-amber-400"
    }`;
  };

  // const linkStyles = `text-base font-medium transition-colors duration-200 ${
  //   isScrolled
  //     ? isActive
  //       ? "text-amber-600"
  //       : "text-gray-700 hover:text-amber-600"
  //     : isActive
  //     ? "text-amber-400"
  //     : "text-white hover:text-amber-400"
  // }`;

  return (
    <nav className={baseStyles}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={getLinkStyles(item.path)}
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
