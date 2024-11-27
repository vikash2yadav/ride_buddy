import React from "react";
import { Link } from "react-router-dom";

const Location = ({ title, locationList }) => {
  return (
    <div className="relative bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 md:mt-8 mt-3 text-gray-800">
      <div className="max-w-full mx-auto py-4">
        <h1 className="mx-4 md:text-2xl text-xl text-left font-medium text-gray-800 mb-6">
          {title}
        </h1>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 md:gap-2 lg:gap-4 gap-1 p-4 mb-3">
          {locationList?.map((city) => (
            <Link to={`/location/${city?.id}`}>
              <div
                key={city?.id}
                className="md:border hover:md:border-gray-300 md:shadow-md hover:shadow-xl rounded-xl cursor-pointer flex flex-col justify-center items-center md:p-4 p-2 mb-3"
              >
                {/* City Icon */}
                {/* <div className="md:w-[90px] md:h-[90px] h-16"> */}
                <img
                  src={city?.icon}
                  alt={city?.name}
                  className="md:w-[90px] md:h-[90px] h-16 w-16 object-cover rounded-full opacity-80 md:mb-3 mb-2"
                />
                {/* </div> */}
                <p className="text-center text-xs text-gray-500 mb-1 ">
                  Book in
                </p>
                {/* City Name */}
                <p className="text-center md:text-base text-xs text-gray-800">
                  {city?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
