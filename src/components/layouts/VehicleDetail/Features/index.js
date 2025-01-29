import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Features = ({ title, data }) => {
  const [openSections, setOpenSections] = useState(new Set());
  const [show, setShow] = useState(false);

  const groupedData =
    data?.length > 0 &&
    data?.reduce((acc, item) => {
      const specType = item?.feature_type?.name;

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
        newSections.delete(specType);
      } else {
        newSections.add(specType);
      }
      return newSections;
    });
  };

  return (
    <div id="features" className="border border-gray-300  text-gray-800 py-4 rounded-2xl shadow-sm mb-3">
      <h1 className="text-xl font-medium mx-8 mb-5">{title}</h1>

      <div className="mx-8">
        {Object.keys(groupedData)?.length > 0 ? (
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
                          <span className="text-orange-600">&#9650;</span>
                        ) : (
                          <span className="text-orange-600">&#9660;</span>
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Render items if the section is open or if it's "Basic" */}
              {(openSections.has(specType) || specType === "Basic") && (
                <div className="grid grid-cols-3 text-sm gap-4 text-gray-600 mt-1">
                  {groupedData[specType].map((item) => (
                    <div className="flex">
                      <span>
                        {React.cloneElement(<CheckIcon />, {
                          className: `text-sm mr-2 text-green-600`,
                          style: { fontSize: "15px" },
                        })}
                      </span>
                      <span>{item?.title}</span>
                    </div>
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
      <p
        onClick={() => setShow(!show)}
        className="mx-8 text-orange-600 text-sm font-medium cursor-pointer mt-6"
      >
        {show ? "Collapse" : "View All Features"}
        <ChevronRightIcon className="text-orange-600 rounded-2xl" />
      </p>
    </div>
  );
};

export default Features;
