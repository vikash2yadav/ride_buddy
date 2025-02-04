import React, { useContext, useEffect } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { CommonContext } from "../../context/CommonContext";

const Investor = () => {
  const { currentLangCode } = useContext(CommonContext);

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text("Investor Report", 20, 20);

    // Add content - list of investors
    const investors = [
      { name: "Vikash Yadav", share: "30%" },
      { name: "Rohit Sharma", share: "20%" },
      { name: "Virat Kohli", share: "50%" },
    ];

    doc.setFontSize(12);
    let yPosition = 30;
    investors.forEach((investor, index) => {
      doc.text(`${investor.name}: ${investor.share}`, 20, yPosition);
      yPosition += 10;
    });

    // Save the PDF
    doc.save("investor_report.pdf");
  };

  useEffect(() => {
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
            {currentLangCode === "hn"
              ? "हमारे निवेशक"
              : currentLangCode === "guj"
              ? "અમારા રોકાણકારો"
              : "Our Investors"}
          </h1>

          <div className="md:flex block">
            <p className="text-lg mb-3 md:mb-0">
              {currentLangCode === "hn"
                ? "वर्ष 2024-25"
                : currentLangCode === "guj"
                ? "વર્ષ 2024-25"
                : "Year 2024-25"}
            </p>

            <p className="text-lg md:px-8 mb-3 md:mb-0">
              {currentLangCode === "hn"
                ? "राइडबडी सॉफ्टवेयर प्राइवेट लिमिटेड"
                : currentLangCode === "guj"
                ? "રાઇડબડી સોફ્ટવેર પ્રાઇવેટ લિમિટેડ"
                : "RideBuddy Software Private Limited"}
            </p>

            <p className="text-orange-600 hover:text-orange-500 hover:underline mb-3 md:mb-0">
              <Link onClick={generatePDF}>
                {currentLangCode === "hn"
                  ? "डाउनलोड पर जाएं"
                  : currentLangCode === "guj"
                  ? "ડાઉનલોડ પર જાઓ"
                  : "Go To Download"}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
