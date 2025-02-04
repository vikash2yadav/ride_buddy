import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import EmailIcon from "@mui/icons-material/Email";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { bussinessWithRidebuddy, ourOffices } from "../../config/sampleData";
import emailjs from "emailjs-com"; // Import emailjs-com
import { CommonContext } from "../../context/CommonContext";

const ContactUs = () => {
  const { setSnackOpen, setMessageType, setSnackMessage, currentLangCode } =
    useContext(CommonContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    feedback: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShowForTerms = () => {
    alert(
      "This form have some fields and you are sharing your personal data with us, Please share your right information that we will contact you."
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Create the template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      feedback: formData.feedback,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then((result) => {
        setSnackOpen(true);
        setMessageType("success");
        setSnackMessage("Your message has been sent successfully!");
      })
      .catch((error) => {
        setSnackOpen(true);
        setMessageType("error");
        setSnackMessage("Something went wrong!");
      });
  };

  return (
    <>
      <Header />
      <h1 className="text-2xl mx-4 md:mx-20 lg:mx-40 font-semibold text-left text-gray-800 mt-10">
        {currentLangCode === "hn"
          ? "हमसे संपर्क करें"
          : currentLangCode === "guj"
          ? "અમારો સંપર્ક કરો"
          : "Contact Us"}
      </h1>
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800 grid md:grid-cols-2 md:mb-5 mb-3">
        <div className="mx-4 py-6">
          <EmailIcon className="text-orange-600" />{" "}
          <span className="">{`${
            currentLangCode === "hn"
              ? "ईमेल"
              : currentLangCode === "guj"
              ? "ઈમેલ"
              : "Email"
          }`}</span>
          <p className="text-xl mt-2 mx-7">support@ridebuddy.com</p>
        </div>
        <div className="px-6 py-6">
          <p className="mb-10">
            {`${
              currentLangCode === "hn"
                ? "आइए हम आपसे संपर्क करें"
                : currentLangCode === "guj"
                ? "ચાલો તમારો સંપર્ક કરીએ"
                : "LET US CONTACT YOU"
            }`}
          </p>

          <form onSubmit={sendEmail}>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
              <InputBox
                id="name"
                variant="outlined"
                label={`${
                  currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Enter Your Name"
                }`}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputBox
                type="email"
                id="email"
                variant="outlined"
                label={`${
                  currentLangCode === "hn"
                    ? "अपना ईमेल दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું ઇમેઇલ દાખલ કરો"
                    : "Enter Your Email"
                }`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
              <InputBox
                id="mobile"
                variant="outlined"
                label={`${
                  currentLangCode === "hn"
                    ? "अपना फ़ोन दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું ફોન દાખલ કરો"
                    : "Enter Mobile Number"
                }`}
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <SelectBox
                id="city"
                variant="outlined"
                label={`${
                  currentLangCode === "hn"
                    ? "अपना शहर दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું શહેર દાખલ કરો"
                    : "Select City"
                }`}
                name="city"
                options={[
                  { title: "Ahmedabad", value: "1" },
                  { title: "Surat", value: "2" },
                ]}
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid lg:gap-4 mb-2 lg:mb-5">
              <TextArea
                minRows={3}
                maxRows={6}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`${
                  currentLangCode === "hn"
                    ? "कृपया अपनी प्रतिक्रिया साझा करें"
                    : currentLangCode === "guj"
                    ? "કૃપા કરીને તમારો પ્રતિસાદ શેર કરો"
                    : "Please share your feedback"
                }`}
                name="feedback"
                value={formData.feedback}
                handleChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 mb-5">
              <div className="flex ">
                <CheckBox className="text-orange-600" />
                <p className="mx-2">
                  {currentLangCode === "hn"
                    ? "मैं सहमत हूं"
                    : currentLangCode === "guj"
                    ? "હું સંમત છું"
                    : "I agree to"}
                  <span className="text-blue-600">
                    <Link onClick={handleShowForTerms}>
                      {currentLangCode === "hn"
                        ? " नियम एवं शर्तें"
                        : currentLangCode === "guj"
                        ? " નિયમો અને શરતો"
                        : " Terms & Conditions"}
                    </Link>
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10 mb-5">
              <button
                type="submit"
                className="w-64 px-12 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {currentLangCode === "hn"
                  ? "सबमिट"
                  : currentLangCode === "guj"
                  ? "સબમિટ"
                  : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bussiness with RideBuddy Section */}
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800">
        <h1 className="text-xl font-semibold mx-4 text-left text-gray-800 mt-4">
          {currentLangCode === "hn"
            ? "RideBuddy के साथ व्यापार"
            : currentLangCode === "guj"
            ? "RideBuddy સાથે વ્યવસાય"
            : "Bussiness With RideBuddy"}
        </h1>

        <div className="flex md:flex-row flex-col">
          {bussinessWithRidebuddy.map((item, index) => (
            <>
              <div className="px-6 py-6">
                <span className="text-orange-600"> {item?.icon} </span>
                <span className="">
                  {currentLangCode === "hn"
                    ? item?.titleHindi
                    : currentLangCode === "guj"
                    ? item.titleGujarati
                    : item.title}
                </span>
                <p className="text-xl mt-2 mx-7">
                  <Link>
                    {currentLangCode === "hn"
                      ? item?.linkHindi
                      : currentLangCode === "guj"
                      ? item.linkGujarati
                      : item.link}
                  </Link>
                </p>
              </div>
              {index < bussinessWithRidebuddy.length - 1 && (
                <div className="hidden md:block border-l border-gray-300 mx-4"></div>
              )}
            </>
          ))}
        </div>

        <hr className="md:mt-10 mt-5 md:mb-10 mb-5 mx-4" />

        {/* Offices Section */}
        <h1 className="text-xl font-semibold mx-4 text-left text-gray-800 mt-4 ">
          {currentLangCode === "hn"
            ? "हमारे कार्यालय"
            : currentLangCode === "guj"
            ? "અમારા કચેરીઓ"
            : "Our Offices"}
        </h1>

        <div className="flex md:flex-row flex-col md:mb-5 mb-3">
          {ourOffices.map((item, index) => (
            <>
              <div className="mx-4 py-4 md:flex-3 md:w-64 w-full">
                <p className="text-sm font-semibold md:mb-5 mb-3">
                  {currentLangCode === "hn"
                    ? item.nameHindi
                    : currentLangCode === "guj"
                    ? item.nameGujarati
                    : item.name}
                </p>
                <p className="text-sm">
                  {currentLangCode === "hn"
                    ? item.addressHindi
                    : currentLangCode === "guj"
                    ? item.addressGujarati
                    : item.address}
                </p>
              </div>
              {index < ourOffices.length - 1 && (
                <div className="hidden md:block border-l border-gray-300 mx-10"></div>
              )}
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
