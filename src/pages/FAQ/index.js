import React, { useContext, useEffect } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { faqs } from "../../config/sampleData";
import { CommonContext } from "../../context/CommonContext";

const FAQ = () => {
  const { currentLangCode } = useContext(CommonContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);
  return (
    <>
      <Header />
      <div className="bg-white shadow-md border border-gray-300 rounded-2xl md:mx-20 lg:mr-96 lg:ml-40 base_font mt-4 lg:mt-10 text-gray-800">
        <div className="max-w-full mx-auto px-6 py-6">
          <h1 className="text-2xl text-left text-gray-800 mb-3 noto_font">
            {currentLangCode === "hn"
              ? "अधिकतर पूछे जाने वाले प्रश्न"
              : currentLangCode === "guj"
              ? "મોટે ભાગે પૂછાતા પ્રશ્નો"
              : "Mostly Asked Questions"}
          </h1>
          <section className="mb-6">
            {faqs.map((item) => (
              <>
                <p className="text-left text-m text-gray-600 mb-2 noto_font">
                  Q.{item?.id}:{" "}
                  {currentLangCode === "hn"
                    ? item.questionHindi
                    : currentLangCode === "guj"
                    ? item?.questionGujarati
                    : item?.question}
                </p>
                <p className="text-left text-m text-gray-600 mb-3">
                  <span className="font-semibold">Ans</span>:{" "}
                  {currentLangCode === "hn"
                    ? item.answerHindi
                    : currentLangCode === "guj"
                    ? item?.answerGujarati
                    : item?.answer}
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
