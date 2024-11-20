import React from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import EmailIcon from "@mui/icons-material/Email";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { CheckBox } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <>
      <Header />
      <h1 className="text-2xl md:mx-20 lg:mx-40 font-semibold text-left text-gray-800 lg:mt-10">
        Contact Us
      </h1>
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800 grid grid-cols-2 gap-10">
        <div className="max-w-full px-6 py-6">
          <EmailIcon className="text-orange-600" />{" "}
          <span className="">E-MAIL</span>
          <p className="text-2xl pt-2 px-2">support@ridebuddy.com</p>
        </div>
        <div className="max-w-full px-6 py-6">
          <p className="mb-10">LET US CONTACT YOU</p>

          <div className="grid grid-cols-2 gap-10 mb-5">
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
          <div className="grid grid-cols-2 gap-10 mb-5">
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
          <div className="grid grid-cols-1 gap-10 mb-5">
            <TextArea
              minRows={3}
              maxRows={6}
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={""}
              type="text"
              placeholder="Please share your feedback"
            />
          </div>

          <div className="grid grid-cols-1 text-center gap-10 mb-5">
            <div className="flex ">
              <CheckBox className="text-orange-600" />
              <p className="mx-2">
                I agree to{" "}
                <span className="text-blue-600">
                  <a href="#">Terms & Conditions</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
