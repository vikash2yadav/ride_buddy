import React from "react";

// Loader Component
const Loader = ({ inner }) => {
  return (
    <div
      className={`loader-container ${
        inner ? "h-[50vh]" : "h-screen"
      } top-0 left-0 w-full flex justify-center items-center`}
    >
      <div className="loader w-16 h-16 border-4 border-t-transparent border-orange-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
