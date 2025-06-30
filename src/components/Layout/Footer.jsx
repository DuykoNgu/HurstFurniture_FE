import React from "react";
import { Triangle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo Section */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="text-gray-400 space-y-2">
              <p>
                20 Green Street Street Name,
                <br />
                New York City, USA
              </p>
              <p>Call Phone: (1234) - 123456789</p>
              <p>Email: your.mail@gmail.com</p>
            </div>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ACCOUNTS</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link
                  to="/account"
                  className="hover:text-white transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white transition-colors">
                  My Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="hover:text-white transition-colors"
                >
                  Check Out
                </Link>
              </li>
            </ul>
          </div>

          {/* Shipping Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SHIPPING</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link
                  to="/new-products"
                  className="hover:text-white transition-colors"
                >
                  New Products
                </Link>
              </li>
              <li>
                <Link
                  to="/top-sellers"
                  className="hover:text-white transition-colors"
                >
                  Top Sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/manufacturers"
                  className="hover:text-white transition-colors"
                >
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="hover:text-white transition-colors"
                >
                  Suppliers
                </Link>
              </li>
            </ul>
          </div>

          {/* Your Choice Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">YOUR CHOICE PRODUCTS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Featured Product 1"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Featured Product 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Hurst Furniture. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
