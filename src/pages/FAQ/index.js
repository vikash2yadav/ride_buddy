import React, { useEffect } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { faqs } from "../../config/sampleData";

const FAQ = () => {
  useEffect(()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);
  return (
    <>
      <Header />
      <div className="bg-white shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl font-semibold text-left text-gray-800 mb-3">
            Mostly Asked Questions
          </h1>
          <section className="mb-6">
            {faqs.map((item) => (
              <>
                <p className="text-left text-m font-bold text-gray-600 mb-2">
                  Q.{item?.id}: {item?.question}
                </p>
                <p className="text-left text-m text-gray-600 mb-3">
                  <span className="font-semibold">Ans</span>: {item?.answer}
                </p>
                <hr className="mb-4" />
              </>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
