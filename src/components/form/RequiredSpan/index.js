import React from "react";

const RequiredSpan = ({ className = "text-red-600 px-1" }) => {
  return (
    <>
      <span className={className}>*</span>
    </>
  );
};

export default RequiredSpan;
