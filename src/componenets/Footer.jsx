import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-zentry text-xl mb-4">Tech Titans</h3>
            <p className="text-gray-400">Turning Passion into Purpose</p>
          </div>
          <div>
            <h4 className="font-zentry text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#board" className="text-gray-400 hover:text-white">
                  Board
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-zentry text-lg mb-4">Contact Info</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/techtitans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com/techtitans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tech Titans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
