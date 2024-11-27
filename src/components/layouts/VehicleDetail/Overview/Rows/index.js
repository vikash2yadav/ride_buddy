import React from "react";

const Rows = ({ icon, title, value }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 items-start mb-1">
        <div className="text-sm text-gray-400 flex items-center">
          {React.cloneElement(icon, {
            className: `text-sm ${icon.props.className || ""}`,
            style: { fontSize: "15px", ...icon.props.style },
          })}
          <span className="ml-2 text-gray-400">{title}</span>
        </div>
        <div className="text-sm text-gray-700">{value}</div>
      </div>
    </>
  );
};

export default Rows;
