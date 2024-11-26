import React, { useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

const List = ({ title, categories, vehicleList }) => {
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
      <div className="relative bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 md:mt-8 mt-3 text-gray-800">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className="absolute md:flex hidden top-1/2 transform -translate-y-1/2 top-0 text-gray-800 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition"
          aria-label="Scroll Left"
        >
          <ChevronLeftIcon />
        </button>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className="absolute md:flex hidden top-1/2 right-0 transform -translate-y-1/2 text-gray-800 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition"
          aria-label="Scroll Right"
        >
          <ChevronRightIcon />
        </button>

        <div className="max-w-full mx-auto py-4">
          <h1 className="mx-4 md:text-2xl text-xl text-left font-medium text-gray-800 mb-6">
            {title}
          </h1>

          <div className="flex mx-4 justify-start items-left text-sm overflow-x-auto scrollbar-hidden mb-3">
            {categories?.map((category) => (
              <Link className="mr-8">{category?.name}</Link>
            ))}
          </div>
          <hr className="mx-0 bg-gray-300" />

          <div
            ref={listRef}
            className="flex flex-row md:space-x-4 space-x-2 p-4 md:overflow-hidden overflow-x-auto scrollbar-hidden mb-3"
          >
            {/* Add more vehicle items here */}
            {vehicleList?.map((item) => (
              <div className="border border-gray-300 md:min-w-[280px] md:max-w-[280px] min-w-44 max-w-full rounded-lg items-center justify-center shadow-md">
                <img
                  src={item?.image}
                  alt="Vehicle 2"
                  className="w-full min-w-28 max-w-full md:h-[200px] h-[140px] object-cover rounded-t-lg md:mb-5 mb-3"
                />
                <p className="mx-4 text-sm md:text-base mb-2 md:mb-1">
                  {item?.name}
                </p>
                <p className="mx-4 text-xs md:text-base mb-2 md:mb-1">
                  ₹ {item?.price} *
                </p>
                <div className="flex justify-center items-center mt-5 md:mb-4 mb-3">
                  <button className="w-full mx-4 md:py-2 py-1 rounded-lg text-orange-600 bg-white border border-orange-600 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                    {item?.go}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-4 text-orange-600 font-medium cursor-pointer">
            View All
            <ChevronRightIcon className="text-orange-600 rounded-2xl" />
          </p>
        </div>
      </div>
    </>
  );
};

export default List;
