import React from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import EmailIcon from "@mui/icons-material/Email";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { bussinessWithRidebuddy, ourOffices } from "../../config/sampleData";

const ContactUs = () => {
  const handleShowForTerms = () => {
    alert(
      "This form have some fields and you are sharing your personal data with us, Please share your right information that we will contact you."
    );
  };
  return (
    <>
      <Header />
      <h1 className="text-2xl mx-4 md:mx-20 lg:mx-40 font-semibold text-left text-gray-800 mt-10">
        Contact Us
      </h1>
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800 grid md:grid-cols-2 md:mb-5 mb-3">
        <div className="mx-4 py-6">
          <EmailIcon className="text-orange-600" />{" "}
          <span className="">E-MAIL</span>
          <p className="text-xl mt-2 mx-7">support@ridebuddy.com</p>
        </div>
        <div className="px-6 py-6">
          <p className="mb-10">LET US CONTACT YOU</p>

          <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
            <InputBox
              id="outlined-basic"
              variant="outlined"
              label="Enter Name"
            />
            <InputBox
              id="outlined-basic"
              variant="outlined"
              label="Enter Email"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
            <InputBox
              id="outlined-basic"
              variant="outlined"
              label="Enter Mobile Number"
            />
            <SelectBox
              id="outlined-basic"
              variant="outlined"
              label="City"
              options={[
                {
                  title: "dfdsf",
                  value: "dsfdsf",
                },
              ]}
            />
          </div>
          <div className="grid lg:gap-4 mb-2 lg:mb-5">
            <TextArea
              minRows={3}
              maxRows={6}
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={""}
              type="text"
              placeholder="Please share your feedback"
            />
          </div>

          <div className="grid grid-cols-1 mb-5">
            <div className="flex ">
              <CheckBox className="text-orange-600" />
              <p className="mx-2">
                I agree to{" "}
                <span className="text-blue-600">
                  <Link onClick={handleShowForTerms}>Terms & Conditions</Link>
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-5">
            <button className="w-64 px-12 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800">
        <h1 className="text-xl font-semibold mx-4 text-left text-gray-800 mt-4">
          Bussiness With RideBuddy
        </h1>

        <div className="flex md:flex-row flex-col">
          {bussinessWithRidebuddy.map((item, index) => (
            <>
              <div className="px-6 py-6">
                <span className="text-orange-600"> {item?.icon} </span>
                <span className="">{item?.title}</span>
                <p className="text-xl mt-2 mx-7">
                  <Link>{item?.link}</Link>
                </p>
              </div>
              {index < bussinessWithRidebuddy.length - 1 && (
                <div className="hidden md:block border-l border-gray-300 mx-4"></div>
              )}
            </>
          ))}
        </div>

        <hr className="md:mt-10 mt-5 md:mb-10 mb-5 mx-4" />

        <h1 className="text-xl font-semibold mx-4 text-left text-gray-800 mt-4 ">
          Our Offices
        </h1>

        <div className="flex md:flex-row flex-col md:mb-5 mb-3">
          {ourOffices.map((item, index) => (
            <>
              <div className="mx-4 py-4 md:flex-3 md:w-64 w-full">
                <p className="text-sm font-semibold md:mb-5 mb-3">
                  {item?.name}
                </p>
                <p className="text-sm">{item?.address}</p>
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