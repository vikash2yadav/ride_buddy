import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {
  connectWithUsLinks,
  quickLinks,
  ridebuddyLinks,
} from "../../../config/sampleData";
import { CommonContext } from "../../../context/CommonContext";

const Footer = () => {
  const { currentLangCode } = useContext(CommonContext);

  return (
    <footer className="bg-white border-t border-gray-300 text-gray-800 py-12 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">
              {currentLangCode === "hn"
                ? "राइडबडी के बारे में"
                : currentLangCode === "guj"
                ? "રાઇડબડી વિશે"
                : "ABOUT RIDEBUDDY"}
            </h3>
            <ul>
              {ridebuddyLinks.map((item) => (
                <li>
                  <Link
                    to={item?.url}
                    className="text-sm text-gray-500 hover:text-orange-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold mb-4">
              {currentLangCode === "hn"
                ? "हमारे साथ जुड़ें"
                : currentLangCode === "guj"
                ? "તેની સાથે જોડાઓ"
                : "CONNECT WITH US"}
            </h3>
            <ul>
              {connectWithUsLinks.map((item) => (
                <li>
                  <Link
                    to={item?.url}
                    className="text-sm text-gray-500 hover:text-orange-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              {currentLangCode === "hn"
                ? "त्वरित सम्पक"
                : currentLangCode === "guj"
                ? "ઝડપી લિંક્સ"
                : "QUICK LINKS"}
            </h3>
            <ul>
              {quickLinks.map((item) => (
                <li>
                  <Link
                    to={item?.url}
                    className="text-sm text-gray-500 hover:text-orange-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              {currentLangCode === "hn"
                ? "हमसे संपर्क करें"
                : currentLangCode === "guj"
                ? "તેનો સંપર્ક કરો"
                : "QUICK LINKS"}
            </h3>
            <ul>
              <li className="text-sm text-gray-500 hover:text-orange-600 mb-2">
                {currentLangCode === "hn"
                  ? "📍 पता: 123 स्ट्रीट, हमीदाबाद, भारत"
                  : currentLangCode === "guj"
                  ? "📍 સરનામું: 123 સ્ટ્રીટ, અમદાવાદ, ભારત"
                  : "📍 Address: 123 Street, Ahmedabad, India"}
              </li>
              <li className="text-sm text-gray-500 hover:text-orange-600 mb-2">
                {currentLangCode === "hn"
                  ? "📧 ईमेल: support@readebuddy.com"
                  : currentLangCode === "guj"
                  ? "📧 ઇમેઇલ: support@readybuddy.com"
                  : "📧 Email: support@ridebuddy.com"}
              </li>
              <li className="text-sm text-gray-500 hover:text-orange-600 mb-2">
                {currentLangCode === "hn"
                  ? "📞 फ़ोन: +91 76986 61812"
                  : currentLangCode === "guj"
                  ? "📞 ફોન: +91 76986 61812"
                  : "📞 Phone: +91 76986 61812"}
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
                className="text-gray-500 hover:text-orange-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-600"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-600"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-600"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>

            <div className="text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-orange-600 mr-4"
              >
                {currentLangCode === "hn"
                  ? "पर्यावरण नीति"
                  : currentLangCode === "guj"
                  ? "ગોપનીયતા નીતિ"
                  : "Privacy Policy"}
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-500 hover:text-orange-600"
              >
                {currentLangCode === "hn"
                  ? "नियम एवं शर्तें"
                  : currentLangCode === "guj"
                  ? "નિયમો અને શરતો"
                  : "Terms & Conditions"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
