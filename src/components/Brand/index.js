import React from "react";

const Brand = ({ title, brandList }) => {
  return (
    <div className="relative bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 md:mt-8 mt-3 text-gray-800">
      <div className="max-w-full mx-auto py-4">
        {/* Title Section */}
        <h1 className="mx-4 md:text-2xl text-xl text-left font-medium text-gray-800 mb-6">
          {title}
        </h1>

        {/* Brand List Section */}
        <div className="w-full overflow-x-auto flex items-center space-x-4 p-4 mb-3">
          {brandList?.map((brand) => (
            <div
              key={brand?.id}
              className="flex-shrink-0 md:w-48 md:h-48 border border-gray-300 rounded-xl cursor-pointer flex flex-col justify-center items-center p-4 mb-3"
            >
              {/* Brand Icon */}
              <img
                src={brand?.icon}
                alt={brand?.name}
                className="w-20 h-20 md:w-24 md:h-24 object-cover mb-3" // Ensures consistent size across screen sizes
              />
              {/* Brand Name */}
              <p className="text-center text-xs md:text-base text-gray-800">
                {brand?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
