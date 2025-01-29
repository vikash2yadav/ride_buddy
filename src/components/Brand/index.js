import React, { useRef, useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const Brand = ({ title, brandList }) => {
  const listRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Function to handle left scroll
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  // Function to handle right scroll
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  // Handle visibility of left and right buttons based on scroll position
  useEffect(() => {
    const checkScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
      setShowLeft(scrollLeft > 0); // Show left button only if scrolled right
      setShowRight(scrollLeft < scrollWidth - clientWidth); // Show right button only if scrolled left
    };

    // Initial check
    checkScrollButtons();

    // Add event listener to update buttons visibility on scroll
    const handleScroll = () => {
      checkScrollButtons();
    };

    listRef.current.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [brandList]);

  return (
    <div className="relative bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 md:mt-8 mt-3 text-gray-800">
      <div className="max-w-full mx-auto py-4">
        {/* Title Section */}
        <h1 className="mx-4 md:text-2xl text-xl text-left font-medium text-gray-800 mb-6">
          {title}
        </h1>

        {/* Brand List Section */}
        <div
          ref={listRef}
          className="w-full flex items-center space-x-4 overflow-x-auto scrollbar-hidden p-4 mb-3"
        >
          {brandList?.map((brand) => (
            <Link to={brand?.website_url} target="_blank">
              <div
                key={brand?.id}
                className="flex-shrink-0 md:w-48 md:h-48 border border-gray-300 rounded-xl cursor-pointer flex flex-col justify-center items-center p-4 mb-3"
              >
                {/* Brand Icon */}
                <img
                  src={brand?.logo_url}
                  alt={brand?.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover mb-3"
                />
                {/* Brand Name */}
                <p className="text-center text-xs md:text-base text-gray-800">
                  {brand?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Buttons (Left and Right) */}
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute shadow-md md:flex hidden top-1/2 left-2 transform -translate-y-1/2 text-black bg-white z-10 rounded-full p-3 hover:bg-opacity-75 transition"
            aria-label="Scroll Left"
          >
            <ChevronLeftIcon />
          </button>
        )}

        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute shadow-md md:flex hidden top-1/2 right-2 transform -translate-y-1/2 text-black bg-white z-10 rounded-full p-3 hover:bg-opacity-75 transition"
            aria-label="Scroll Right"
          >
            <ChevronRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Brand;
