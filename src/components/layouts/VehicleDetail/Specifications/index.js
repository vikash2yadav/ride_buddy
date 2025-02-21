import React, { useContext, useState } from "react";
import Rows from "../Overview/Rows";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CommonContext } from "../../../../context/CommonContext";

const Specifications = ({ title, data }) => {
  const { currentLangCode } = useContext(CommonContext);
  const [openSections, setOpenSections] = useState(new Set()); // Use Set to store open sections
  const [show, setShow] = useState(false);

  const groupedData =
    data?.length > 0 &&
    data?.reduce((acc, item) => {
      const specType = item?.specification_type?.name;

      if (!acc[specType]) {
        acc[specType] = [];
      }

      acc[specType].push(item);
      return acc;
    }, {});

  const handleToggle = (specType) => {
    setOpenSections((prevSections) => {
      const newSections = new Set(prevSections);
      if (newSections.has(specType)) {
        newSections.delete(specType); // If the section is open, close it
      } else {
        newSections.add(specType); // If the section is closed, open it
      }
      return newSections;
    });
  };

  return (
    <div className="border border-gray-300 py-4 text-gray-800 rounded-2xl shadow-sm mb-3">
      <h1 className="text-xl font-medium mx-8 mb-5">{title}</h1>

      <div className="mx-8">
        {Object.keys(groupedData).length > 0 ? (
          Object.keys(groupedData).map((specType, index) => (
            <div key={index} className="mb-4">
              {show && (
                <div className="flex items-center justify-between">
                  {specType !== "Basic" && (
                    <>
                      <h2 className="text-m text-gray-800 font-medium mb-4 mt-1">
                        {specType}
                      </h2>
                      <button onClick={() => handleToggle(specType)}>
                        {openSections.has(specType) ? (
                          <span className="text-orange-600">&#9650;</span> // "Up" arrow
                        ) : (
                          <span className="text-orange-600">&#9660;</span> // "Down" arrow
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Render items if the section is open or if it's "Basic" */}
              {(openSections.has(specType) || specType === "Basic") && (
                <div className="grid md:grid-cols-2 gap-4 text-gray-800 mt-1">
                  {groupedData[specType].map((item) => (
                    <Rows
                      key={item.id}
                      title={item.key}
                      value={item.value}
                      ext={item.ext}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* View All Button */}
      {Object.keys(groupedData).length > 1 && (
        <p
          onClick={() => setShow(!show)}
          className="mx-8 text-orange-600 text-sm font-medium cursor-pointer mt-6"
        >
          {show
            ? currentLangCode === "hn"
              ? "संकुचित करें"
              : currentLangCode === "guj"
              ? "સંકુચિત કરો"
              : "Collapse"
            : currentLangCode === "hn"
            ? "सभी सुविधाएँ देखें"
            : currentLangCode === "guj"
            ? "બધી સુવિધાઓ જુઓ"
            : "View All Features"}
          <ChevronRightIcon className="text-orange-600 rounded-2xl" />
        </p>
      )}
    </div>
  );
};

export default Specifications;
