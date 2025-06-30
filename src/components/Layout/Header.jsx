import React, { useState, useEffect } from "react";
import { Menu, X, Triangle } from "lucide-react";
import CartIcon from "../Icon/CartIcon";
import Nav from "./Nav";
import CartSidebar from "./CartSidebar";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "../Icon/LoginIcon";
const Header = ({ isScrolled: isScrolledProp }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolledState, setIsScrolledState] = useState(false);
  // Nếu có prop isScrolled thì ưu tiên dùng prop, không thì dùng state
  const isScrolled =
    typeof isScrolledProp === "boolean" ? isScrolledProp : isScrolledState;

  useEffect(() => {
    if (typeof isScrolledProp === "boolean") return;
    const handleScroll = () => {
      setIsScrolledState(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolledProp]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            className="text-black p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center">
            <Link
              to="/"
              className={`font-semibold text-xl ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Hurst
            </Link>
            <Triangle
              className={`ml-1 ${isScrolled ? "text-amber-600" : "text-white"}`}
              size={16}
            />
          </div>

          <div className={`${isScrolled ? "text-black" : "text-white"}`}>
            <LoginIcon onClick={() => navigate("/login")} />
            <CartIcon onClick={() => setIsCartOpen(!isCartOpen)} />
          </div>
        </div>

        {/* Navigation */}
        <Nav isScrolled={isScrolled} isMobile={false} />

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center">
                <span className="font-semibold text-xl">Hurst</span>
                <Triangle className="ml-1 text-amber-600" size={16} />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <Nav
              isScrolled={true}
              isMobile={true}
              onItemClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
