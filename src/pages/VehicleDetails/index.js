import React, { useContext, useEffect, useMemo, useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { vehicleDetailKeyFeatures } from "../../config/sampleData";
import Overview from "../../components/layouts/VehicleDetail/Overview";
import Detailkeys from "../../components/layouts/VehicleDetail/Detailkeys";
import ImageBox from "../../components/layouts/VehicleDetail/ImageBox";
import Features from "../../components/layouts/VehicleDetail/Features";
import Specifications from "../../components/layouts/VehicleDetail/Specifications";
import { VehicleContext } from "../../context/VehicleContext";
import { useNavigate, useParams } from "react-router-dom";
import ReviewBox from "../../components/layouts/VehicleDetail/ReviewBox";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SelectBox from "../../components/form/SelectBox";

const VehicleDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    vehicleSpecification,
    vehicleData,
    getVehicleDetail,
    vehicleFeature,
    vehicleReview,
  } = useContext(VehicleContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [current_amount, setCurrentPrice] = useState();
  const [loadingPrice, setLoadingPrice] = useState(true);
  
  useMemo(() => {
    setTimeout(() => {
      setCurrentPrice(vehicleData?.price_per_day);
      setLoadingPrice(false);
    }, 100);
  }, [getVehicleDetail]);

  useEffect(() => {
    getVehicleDetail(params?.id);
  }, []);

  return (
    <>
      <Header />
      <div className="relative grid grid-cols-8 gap-3 mt-4 mx-40">
        <div className="col-span-5 mx-10">
          {/* {image box } */}
          <ImageBox images={vehicleData?.vehicle_images} />
          {/* {detail keys} */}
          <Detailkeys
            keys={vehicleDetailKeyFeatures}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          {/* overview */}
          <Overview title="Overview" data={vehicleData} />
          {/* {features} */}
          {/* <Features title={"Features"} data={vehicleFeature} /> */}
          {/* Specifications */}
          {/* <Specifications title="Specifications" data={vehicleSpecification} /> */}

          {/* Review */}
          <ReviewBox title="Rewiews & Ratings" data={vehicleReview} />
        </div>

        {!loadingPrice ? (
          <div className="border border-gray-300 mt-4 shadow-md mr-10 md:h-80 p-4 col-span-3 rounded-2xl">
            <h1 className="text-2xl mb-1">
              {vehicleData?.brand?.name +
                " " +
                vehicleData?.modell?.name +
                " " +
                vehicleData?.modell?.year}
            </h1>
            <div className="flex text-sm items-center text-gray-600 gap-2 mb-8">
              <p>{vehicleData?.km_driven + " km"}</p>-
              <p>{vehicleData?.fuel_type}</p>-<p>{vehicleData?.transmission}</p>
              -<p>{vehicleData?.ownership + " Owner"}</p>
            </div>

            <h1 className="text-2xl mb-5 flex gap-2">
              ₹{current_amount}
              <SelectBox
                handleChange={(e) => {
                  setCurrentPrice(e?.target?.value);
                }}
                className="h-6 w-20"
                options={[
                  { title: "per hour", value: vehicleData?.price_per_hour },
                  { title: "per day", value: vehicleData?.price_per_day },
                  { title: "per week", value: vehicleData?.price_per_week },
                ]}
              />
            </h1>

            <p className="mb-5 text-sm">
              <FmdGoodOutlinedIcon /> {vehicleData?.rto} RTO
            </p>
            {vehicleData?.availability_status === "Available" ? (
              <p className="text-sm mb-1 text-green-900">
                {vehicleData?.availability_status}
              </p>
            ) : (
              <p className="text-sm mb-1 text-red-900">
                {vehicleData?.availability_status}
              </p>
            )}

            <button
              type="submit"
              disabled={
                vehicleData?.availability_status !== "Available" ? true : false
              }
              onClick={() => navigate("checkout")}
              className={`w-full font-medium py-3 ${
                vehicleData?.availability_status !== "Available"
                  ? "bg-white text-dark"
                  : "bg-orange-600 text-white"
              } rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5`}
            >
              Place Order
            </button>

            <div className="flex justify-evenly text-gray-600 text-xs ">
              <p className="underline cursor-pointer">Report Ad</p>
              <p
                className="underline cursor-pointer"
                onClick={() => alert("we are working on this feature")}
              >
                Chat With Owner
              </p>
              <p className="underline cursor-pointer">Share</p>
            </div>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default VehicleDetails;
