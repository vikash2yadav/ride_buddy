import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
// import { useParams } from "react-router-dom";
import {
  overviewDetails,
  vehicleDetailKeyFeatures,
} from "../../config/sampleData";
import Overview from "../../components/layouts/Overview";

const VehicleDetails = () => {
  // const params = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <div className="py-3 grid grid-cols-5 gap-3 py-4 mt-3 mx-40">
        <div className="col-span-3 mx-10 ">
          <div className="mt-5 rounded-2xl border h-96 mb-5">
            <img
              className="w-full h-full shadow-md rounded-2xl object-cover"
              alt=""
              src="https://images10.gaadi.com/usedcar_image/4234356/original/processed_0b1e5188641eb731ad09354fc0fe212a.jpg?imwidth=640"
            />
          </div>

          <div className="border border-gray-300 py-2 rounded-2xl shadow-sm mb-5 overflow-x-auto">
            <div className="flex justify-start items-center text-gray-500">
              {vehicleDetailKeyFeatures?.map((keys, index) => (
                <>
                  <div
                    key={index}
                    className={`text-sm ml-8 py-1 font-bold cursor-pointer inline-block whitespace-nowrap 
            ${
              activeIndex === index
                ? "text-gray-800 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {keys?.title}
                  </div>
                  <span className="absolute left-0 right-0 top-0 h-[2px] bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                </>
              ))}
            </div>
          </div>

          {/* overview */}
          <Overview title="Overview" data={overviewDetails} />
        </div>

        <div className="">
          <h1>this is second part</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VehicleDetails;
