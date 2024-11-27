import React from "react";

const ImageBox = ({ image }) => {
  return (
    <>
      <div className="mt-5 rounded-2xl border h-96 mb-5">
        <img
          className="w-full h-full shadow-md rounded-2xl object-cover"
          alt=""
          src={image}
        />
      </div>
    </>
  );
};

export default ImageBox;
