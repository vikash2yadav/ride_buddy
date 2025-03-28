import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
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
import Loader from "../../components/layouts/Loader";
import { CommonContext } from "../../context/CommonContext";

const VehicleDetails = () => {
  const params = useParams();
  const { isLoading, currentLangCode } = useContext(CommonContext);
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

  // Refs for each section
  const overviewRef = useRef();
  const featuresRef = useRef();
  const reviewsRef = useRef();

  useMemo(() => {
    setTimeout(() => {
      setCurrentPrice(vehicleData?.price_per_day);
      setLoadingPrice(false);
    }, 100);
  }, [getVehicleDetail]);

  useEffect(() => {
    getVehicleDetail(params?.id);
  }, []);

  useEffect(() => {
    if (activeIndex === 0 && overviewRef.current) {
      window.scrollTo({
        top: overviewRef.current.offsetTop - 60,
        behavior: "smooth",
      });
    } else if (activeIndex === 1 && featuresRef.current) {
      window.scrollTo({
        top: featuresRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (activeIndex === 2 && reviewsRef.current) {
      window.scrollTo({
        top: reviewsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return !isLoading ? (
    <>
      <Header />
      <div className="relative grid md:grid-cols-8 grid-cols-1 gap-3 md:mt-4 xl:mx-40 md:mx-10 lg:mx-20 mx-1">
        <div className="md:col-span-5 md:mx-10">
          {/* {image box } */}
          <ImageBox images={vehicleData?.vehicle_images} />
          {/* {detail keys} */}
          <Detailkeys
            keys={vehicleDetailKeyFeatures}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* overview */}
          <div ref={overviewRef}>
            <Overview
              title={
                currentLangCode === "hn"
                  ? "सिंहावलोकन"
                  : currentLangCode === "guj"
                  ? "વિહંગાવલોકન"
                  : "Overview"
              }
              data={vehicleData}
            />
          </div>

          {/* {features} */}
          <div ref={featuresRef}>
            <Features
              title={
                currentLangCode === "hn"
                  ? "विशेषताएँ"
                  : currentLangCode === "guj"
                  ? "લક્ષણો"
                  : "Features"
              }
              data={vehicleFeature}
            />
          </div>

          {/* Specifications */}
          <div>
            <Specifications
              title={
                currentLangCode === "hn"
                  ? "विशेष विवरण"
                  : currentLangCode === "guj"
                  ? "વિશિષ્ટતાઓ"
                  : "Specifications"
              }
              data={vehicleSpecification}
            />
          </div>

          {/* Review */}
          <div ref={reviewsRef}>
            <ReviewBox
              title={
                currentLangCode === "hn"
                  ? "समीक्षाएं एवं रेटिंग"
                  : currentLangCode === "guj"
                  ? "સમીક્ષાઓ અને રેટિંગ્સ"
                  : "Reviews & Ratings"
              }
              data={vehicleReview}
            />
          </div>
        </div>

        {!loadingPrice ? (
          <div className="border border-gray-300 w-full md:mt-4 shadow-md md:h-80 p-4 md:col-span-3 rounded-2xl">
            <h1 className="md:text-2xl text-xl mb-1 noto_font">
              {vehicleData?.brand?.name +
                " " +
                vehicleData?.modell?.name +
                " " +
                vehicleData?.modell?.year}
            </h1>
            <div className="flex md:text-sm text-xs  items-center text-gray-600 gap-2 md:mb-8 mb-5 w-full base_font">
              <p>{vehicleData?.km_driven + " km"}</p>-
              <p>{vehicleData?.fuel_type}</p>-<p>{vehicleData?.transmission}</p>
              -<p>{vehicleData?.ownership + " Owner"}</p>
            </div>

            <h1 className="md:text-2xl text-xl mb-5 flex gap-2 noto_font">
              <span>₹</span>
              {current_amount}
              <SelectBox
                handleChange={(e) => {
                  setCurrentPrice(e?.target?.value);
                }}
                className="h-6 w-20 base_font"
                options={[
                  { title: "per hour", value: vehicleData?.price_per_hour },
                  { title: "per day", value: vehicleData?.price_per_day },
                ]}
              />
            </h1>

            <p className="mb-5 md:text-sm text-xs base_font">
              <FmdGoodOutlinedIcon className="text-[#EA850C]" />{" "}
              {vehicleData?.rto} RTO
            </p>
            {vehicleData?.availability_status === "Available" ? (
              <p className="text-sm mb-1 text-green-900 base_font italic">
                {vehicleData?.availability_status}
              </p>
            ) : (
              <p className="text-sm mb-1 text-red-900 base_font">
                {vehicleData?.availability_status}
              </p>
            )}

            <button
              type="submit"
              disabled={
                vehicleData?.availability_status !== "Available" ? true : false
              }
              onClick={() => navigate("checkout")}
              className={`w-full font-medium md:py-3 py-2 ${
                vehicleData?.availability_status !== "Available"
                  ? "bg-white text-dark"
                  : "bg-orange-600 text-white"
              } rounded-lg noto_font shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5`}
            >
              {currentLangCode === "hn"
                ? "आदेश दें"
                : currentLangCode === "guj"
                ? "ઓર્ડર મૂકો"
                : "Place Order"}
            </button>

            <div className="flex justify-evenly text-gray-600 text-xs base_font">
              <p className="underline cursor-pointer">
                {currentLangCode === "hn"
                  ? "रिपोर्ट विज्ञापन"
                  : currentLangCode === "guj"
                  ? "જાહેરાતની જાણ કરો"
                  : "Report Ad"}
              </p>
              <p
                className="underline cursor-pointer"
                onClick={() => alert("we are working on this feature")}
              >
                {currentLangCode === "hn"
                  ? "मालिक के साथ चैट करें"
                  : currentLangCode === "guj"
                  ? "માલિક સાથે ચેટ કરો"
                  : "Chat With Owner"}
              </p>
              <p className="underline cursor-pointer">
                {currentLangCode === "hn"
                  ? "शेयर करना"
                  : currentLangCode === "guj"
                  ? "શેર કરો"
                  : "Share"}
              </p>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default VehicleDetails;
