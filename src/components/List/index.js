import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const List = () => {
  // Ref for the container that holds the vehicle list
  const listRef = useRef(null);

  // Function to scroll the container left
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to scroll the container right
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-4 py-4">
          <h1 className="text-2xl text-left text-gray-800 mb-4">
            The most searched cars
          </h1>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute top-1/2 transform -translate-y-1/2 text-gray-800 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition"
            >
              <ChevronLeftIcon />
            </button>

            {/* Vehicle list container */}
            <div
              ref={listRef}
              className="flex space-x-4 overflow-x-auto overflow-hidden scrollbar-hide py-2"
            >
              {/* Vehicle items */}
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle1.jpg"
                  alt="Vehicle 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle2.jpg"
                  alt="Vehicle 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle3.jpg"
                  alt="Vehicle 3"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle4.jpg"
                  alt="Vehicle 4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle1.jpg"
                  alt="Vehicle 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle2.jpg"
                  alt="Vehicle 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle3.jpg"
                  alt="Vehicle 3"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="min-w-[200px] h-[150px] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="vehicle4.jpg"
                  alt="Vehicle 4"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Add more vehicle items here */}
            </div>

            {/* Right button */}
            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
