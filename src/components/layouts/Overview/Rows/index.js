import React from "react";

const Rows = ({ icon, title, value }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-start">
        <div className="text-sm text-gray-500 flex items-start">
          {React.cloneElement(icon, {
            className: `text-sm ${icon.props.className || ""}`,
            style: { fontSize: "15px", ...icon.props.style },
          })}
          <span className="ml-1 ">{title}</span>
        </div>
        <div className="text-sm">{value}</div>
      </div>
    </>
  );
};

export default Rows;
