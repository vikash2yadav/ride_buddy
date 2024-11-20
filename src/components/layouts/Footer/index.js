import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-800 py-12 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT RIDEBUDDY</h3>
            <ul>
              <li>
                <Link
                  to="/home"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Careers With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">CONNECT WITH US</h3>
            <ul>
              <li>
                <Link
                  to="/home"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Become Partner Dealer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">QUICK LINKS</h3>
            <ul>
              <li>
                <Link
                  to="/home"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rentals"
                  className="text-xs text-gray-500 hover:text-gray-800"
                >
                  Rentals
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">CONTACT US</h3>
            <ul>
              <li className="text-xs text-gray-500 hover:text-gray-800 mb-2">
                📍 Address: 123 Street, Ahmedabad, India
              </li>
              <li className="text-xs text-gray-500 hover:text-gray-800 mb-2">
                📧 Email: support@ridebuddy.com
              </li>
              <li className="text-xs text-gray-500 hover:text-gray-800 mb-2">
                📞 Phone: +91 76986 61812
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 w-full pt-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              {/* Social Media Links */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-gray-500 hover:text-gray-800"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-gray-500 hover:text-gray-800"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-gray-500 hover:text-gray-800"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>

            <div className="text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-800 mr-4">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-500 hover:text-gray-800">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
