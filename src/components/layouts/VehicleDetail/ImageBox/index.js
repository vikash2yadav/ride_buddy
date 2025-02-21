import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageBox = ({ images = [] }) => {
  // Default to empty array if undefined
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative md:mt-5 mt-2 rounded-2xl border h-96 mb-5">
      {/* Check if images exist before rendering */}
      {images.length > 0 ? (
        <>
          <img
            className="w-full h-full shadow-md rounded-2xl object-cover"
            alt="Vehicle"
            src={images[currentIndex]?.image_url?.trim()} // Trim any unwanted spaces or newline characters from image_url
          />

          {images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-md"
              >
                <ChevronLeftIcon />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-md"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          {/* Optional: Dots to show which image is active */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)} // Click to navigate to a specific image
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-orange-600" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>

          <div className="absolute bottom-4 right-0 transform -translate-x-1/2 flex space-x-2">
            <button className=" text-sm rounded-lg bg-gray-600 text-white p-1">
              {images.length} images
            </button>
          </div>
        </>
      ) : (
        <p>No images available</p> // Fallback text if no images are available
      )}
    </div>
  );
};

export default ImageBox;
