import React from "react";

const Rows = ({ icon, title, value, ext }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 items-start mb-1">
        <div className="text-sm text-gray-500 flex items-center ">
          {icon &&
            React.cloneElement(icon, {
              className: `text-sm mr-3 ${icon?.props?.className || ""}`,
              style: { fontSize: "15px", ...icon.props.style },
            })}
          <span className="text-gray-500">{title}</span>
        </div>
        <div className="text-sm text-gray-800">
          {value} <span>{ext}</span>
        </div>
      </div>
    </>
  );
};

export default Rows;
