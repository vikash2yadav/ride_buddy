import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Link } from "react-router-dom";
import { CarCategories, slides } from "../../config/sampleData";
import List from "../../components/List";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Location from "../../components/Location";
import Brand from "../../components/Brand";
import { BrandContext } from "../../context/BrandContext";
import { LocationContext } from "../../context/LocationContext";
import { VehicleContext } from "../../context/VehicleContext";
import { CommonContext } from "../../context/CommonContext";
import Loader from "../../components/layouts/Loader";
import "./../../global.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isLoading, currentLangCode } = useContext(CommonContext);
  const { brandList, allBrands } = useContext(BrandContext);
  const { cityList, allCities } = useContext(LocationContext);
  const { mostlySearchedVehicles, getVehicleList } = useContext(VehicleContext);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to first slide
  };

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    ); // Loop back to last slide
  };

  useEffect(() => {
    allBrands();
    allCities();
    getVehicleList();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);

  return !isLoading ? (
    <>
      <Header />

      <div className="md:mx-20 md:m-0 relative md:h-[550px] h-[300px] base_font overflow-hidden md:rounded-none">
        <div className="absolute top-0 left-0 w-full h-full transition-transform duration-1000">
          <Link to="/">
            <div className="relative w-full h-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0"></div>

              <div className="absolute inset-0 flex flex-col items-center md:justify-center justify-end text-white px-4 z-10">
                {slides[currentSlide].premiumTitle && (
                  <>
                    <p
                      className={`w-32 px-1 md:mb-3 mb-1 text-center noto_font`}
                    >
                      <span className="w-full text-2xl mb-2 text-gray-200">
                        {slides[currentSlide].premiumTitle}
                      </span>
                      <div className={`bg-orange-600 h-0.5`} />
                    </p>
                  </>
                )}

                <h1 className="md:text-2xl md:flex hidden text-xl text-center md:mb-3 mb-1 base_font">
                  {slides[currentSlide].title}
                </h1>
                <h1 className="md:text-4xl text-3xl font-bold md:mb-3 mb-1">
                  {slides[currentSlide].modelName}
                </h1>
                <p className="md:text-2xl text-xl font-semibold">
                  {slides[currentSlide].cta}
                  <ChevronRightIcon className="mx-1 bg-orange-600 rounded-2xl base_font" />{" "}
                </p>
              </div>

              {/* Navigation Buttons (Left and Right) */}
              <button
                onClick={handlePrevSlide}
                className="absolute md:hidden flex top-1/2 left-1 transform -translate-y-1/2 text-black bg-white z-10 rounded-full p-1 hover:bg-opacity-90 transition"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute md:hidden flex top-1/2 right-1 transform -translate-y-1/2 text-black bg-white z-10 rounded-full p-1 hover:bg-opacity-90 transition"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </Link>
        </div>

        <div className="absolute md:flex hidden bottom-2 left-1/2 transform items-end -translate-x-1/2 space-x-2 z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative flex flex-col items-start justify-center md:w-32 w-24  rounded-full py-2 px-1 cursor-pointer transition-all duration-300 
      text-white shadow-lg`}
            >
              <span className="text-sm font-semibold md:mb-2 mb-1 base_font">
                {slide.slideTitle}
              </span>

              <div
                className={`w-full transition-all duration-300 
        ${currentSlide === index ? "bg-white h-1.5" : "bg-gray-400 h-0.5"}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* mostly Searched Vehicles */}
      <List
        title={`${
          currentLangCode === "hn"
            ? "सबसे ज्यादा सर्च की गई गाड़ियां"
            : currentLangCode === "guj"
            ? "સૌથી વધુ શોધાયેલ વાહનો"
            : "The most searched Vehicles"
        }`}
        categories={CarCategories}
        vehicleList={mostlySearchedVehicles}
      />

      <Brand
        title={`${
          currentLangCode === "hn"
            ? "लोकप्रिय ब्रांड"
            : currentLangCode === "guj"
            ? "લોકપ્રિય બ્રાન્ડ્સ"
            : "Popular brands"
        }`}
        brandList={brandList}
      />

      <Location
        title={`${
          currentLangCode === "hn"
            ? "आस-पास विश्वसनीय किराये प्राप्त करें"
            : currentLangCode === "guj"
            ? "નજીકના વિશ્વસનીય ભાડા મેળવો"
            : "Get trusted rents nearby"
        }`}
        brandList={brandList}
        locationList={cityList}
      />
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default Home;
