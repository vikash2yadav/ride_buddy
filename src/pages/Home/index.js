import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Link } from "react-router-dom";
import { slides } from "../../config/sampleData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to first slide
  };

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    ); // Loop back to last slide
  };

  return (
    <>
      <Header />

      <div className=" md:mx-20 md:m-0 m-2 relative md:h-[550px] h-[300px] overflow-hidden rounded-2xl">
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
                    <p className={`w-32 px-1 md:mb-3 mb-1 text-center`}>
                      <span className="w-full text-2xl mb-2 text-gray-200">
                        {slides[currentSlide].premiumTitle}
                      </span>
                      <div className={`bg-orange-600 h-0.5`} />
                    </p>
                  </>
                )}

                <h1 className="md:text-2xl md:flex hidden text-xl text-center font-semibold md:mb-3 mb-1">
                  {slides[currentSlide].title}
                </h1>
                <h1 className="md:text-4xl text-3xl font-bold md:mb-3 mb-1">
                  {slides[currentSlide].modelName}
                </h1>
                <p className="md:text-2xl text-xl font-semibold">
                  {slides[currentSlide].cta}
                  <ChevronRightIcon className="mx-1 bg-orange-600 rounded-2xl" />{" "}
                </p>
              </div>
              {/* Navigation Buttons (Left and Right) */}
              <button
                onClick={handlePrevSlide}
                className="absolute md:flex hidden top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-orange-600 bg-opacity-50 z-10 rounded-full p-3 hover:bg-opacity-75 transition"
              >
                &#60;
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute md:flex hidden top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-orange-600  bg-opacity-50 z-10 rounded-full p-3 hover:bg-opacity-75 transition"
              >
                &#62;
              </button>
            </div>
          </Link>
        </div>

        <div className="absolute md:flex hidden bottom-2 left-1/2 transform items-end -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative flex flex-col items-start justify-center md:w-32 w-24  rounded-full py-2 px-1 cursor-pointer transition-all duration-300 
        text-white shadow-lg`}
            >
              <span className="text-sm font-semibold md:mb-2 mb-1">
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
      <div className="absolute top-200 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 md:hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative flex flex-col items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-all duration-300 
                ${currentSlide === index ? "bg-orange-600" : "bg-gray-400"}`}
          >
            <div
              className={`w-full transition-all duration-300 
                  ${currentSlide === index ? "h-2" : "h-1"}`}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
