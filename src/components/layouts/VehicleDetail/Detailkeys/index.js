import React, { useContext } from "react";
import { CommonContext } from "../../../../context/CommonContext";

const Detailkeys = ({ keys, activeIndex, setActiveIndex }) => {
  const { currentLangCode } = useContext(CommonContext);

  return (
    <>
      <div className="border border-gray-300 py-2 rounded-2xl shadow-sm mb-5 overflow-x-auto">
        <div className="flex justify-start items-center text-gray-500">
          {keys?.map((keys, index) => (
            <>
              <div
                key={index}
                className={`text-sm ml-8 py-1 font-bold cursor-pointer inline-block whitespace-nowrap base_font
            ${
              activeIndex === index
                ? "text-[#EA850C] border-b-2 border-[#EA850C] italic font-serif"
                : "text-gray-500"
            }`}
                onClick={() => setActiveIndex(index)}
              >
                {currentLangCode === "hn"
                  ? keys?.titleHindi
                  : currentLangCode === "guj"
                  ? keys?.titleGujarati
                  : keys?.title}
              </div>
              <span className="absolute left-0 right-0 top-0 h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detailkeys;
