import React from "react";

const Features = ({ title, data }) => {
  return (
    <>
      <div className="border border-gray-300 py-4 rounded-2xl shadow-sm mb-5">
        <h1 className="text-xl font-medium mx-8 mb-5">{title}</h1>

        <div className="mx-8 text-gray-800 mb-5">
          <div className="grid grid-cols-3 gap-4">
            <h1 className="text-gray-600 text-sm">First Task</h1>
            <h1 className="text-gray-600">First Task</h1>
            <h1 className="text-gray-600">First Task</h1>
            <h1 className="text-gray-600">First Task</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
