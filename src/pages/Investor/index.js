import React, { useEffect } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Link } from "react-router-dom";

const Investor = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);
  return (
    <>
      <Header />
      <div className="md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:h-80 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-4xl text-left text-gray-800 mb-6">
            Our Investors
          </h1>

          <div className="md:flex block">
            <p className="text-lg mb-3 md:mb-0">Year 2024-25</p>

            <p className="text-lg md:px-8 mb-3 md:mb-0">RideBuddy Software Private Limited</p>

            <p className="text-orange-600 hover:text-orange-500 hover:underline mb-3 md:mb-0">
              <Link href="#">Go To Download</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
