import React, { useContext, useEffect } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  bussinessWithRidebuddyPartnerRequest,
  ourOffices,
} from "../../config/sampleData";
import { useFormik } from "formik";
import {
  partnerInitialValues,
  partnerValidationSchema,
  partnerValidationSchemaGujarati,
  partnerValidationSchemaHindi,
} from "./schema";
import ErrorMessage from "../../components/form/ErrorMessage";
import { addPartnerRequestAPi } from "../../apis/partner_request";
import { CommonContext } from "../../context/CommonContext";

const BecomePartnerDealer = () => {
  const { setSnackOpen, setSnackMessage, setMessageType, currentLangCode } =
    useContext(CommonContext);

  const formik = useFormik({
    initialValues: partnerInitialValues,
    validationSchema:
      currentLangCode === "hn"
        ? partnerValidationSchemaHindi
        : currentLangCode === "guj"
        ? partnerValidationSchemaGujarati
        : partnerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      let response = await addPartnerRequestAPi(
        "partner_request/add",
        values,
        "POST"
      );
      if (response?.status === 200) {
        setSnackOpen(true);
        setMessageType("success");
        setSnackMessage(response?.data?.message);
        resetForm();
      } else {
        setSnackOpen(true);
        setMessageType("error");
        setSnackMessage(response?.data?.message);
      }
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    });
  }, []);

  const handleShowForTerms = () => {
    alert(
      "This form have some fields and you are sharing your personal data with us, Please share your right information that we will contact you."
    );
  };
  return (
    <>
      <Header />
      <h1 className="text-2xl mx-4 md:mx-20 lg:mx-40 font-semibold text-left text-gray-800 mt-10">
        {currentLangCode === "hn"
          ? "भागीदार बनने का अनुरोध"
          : currentLangCode === "guj"
          ? "ભાગીદાર બનવા વિનંતી"
          : "Request To Become Partner"}
      </h1>
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800 md:mb-5 mb-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="px-6 py-6">
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5 mt-14">
              <div>
                <InputBox
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  label={`${
                    currentLangCode === "hn"
                      ? "अपना नाम दर्ज करें"
                      : currentLangCode === "guj"
                      ? "તમારું નામ દાખલ કરો"
                      : "Enter Your Name"
                  }`}
                  className="w-full"
                />
                {formik.errors.name && formik.touched.name && (
                  <ErrorMessage message={formik.errors.name} />
                )}
              </div>
              <div>
                <InputBox
                  name="dealership"
                  value={formik.values.dealership}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  label={`${
                    currentLangCode === "hn"
                      ? "डीलरशिप का नाम दर्ज करें"
                      : currentLangCode === "guj"
                      ? "ડીલરશીપનું નામ દાખલ કરો"
                      : "Enter Name Of Dealership"
                  }`}
                  className="w-full"
                />
                {formik.errors.dealership && formik.touched.dealership && (
                  <ErrorMessage message={formik.errors.dealership} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
              <div>
                <InputBox
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  label={`${
                    currentLangCode === "hn"
                      ? "मोबाइल नंबर दर्ज करें"
                      : currentLangCode === "guj"
                      ? "મોબાઈલ નંબર દાખલ કરો"
                      : "Enter Mobile Number"
                  }`}
                  className="w-full"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <ErrorMessage message={formik.errors.phone} />
                )}
              </div>
              <div>
                <InputBox
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  label={`${
                    currentLangCode === "hn"
                      ? "अपना ईमेल दर्ज करें"
                      : currentLangCode === "guj"
                      ? "તમારો ઈમેલ દાખલ કરો"
                      : "Enter Your Email"
                  }`}
                  className="w-full"
                />
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-5">
              <div>
                <SelectBox
                  name="dealership_city_id"
                  value={formik.values.dealership_city_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  label={`${
                    currentLangCode === "hn"
                      ? "डीलरशिप का शहर दर्ज करें"
                      : currentLangCode === "guj"
                      ? "ડીલરશીપનું શહેર દાખલ કરો"
                      : "Enter City Of Dealership"
                  }`}
                  options={[
                    {
                      title: "Ahmedabad",
                      value: "1",
                    },
                  ]}
                  className="w-full"
                />
                {formik.errors.dealership_city_id &&
                  formik.touched.dealership_city_id && (
                    <ErrorMessage message={formik.errors.dealership_city_id} />
                  )}
              </div>
            </div>
            <div className="grid lg:gap-4 mb-2 lg:mb-5">
              <TextArea
                name="comment"
                value={formik.values.comment}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={3}
                maxRows={6}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder={`${
                  currentLangCode === "hn"
                    ? "टिप्पणी"
                    : currentLangCode === "guj"
                    ? "ટિપ્પણી"
                    : "Comment"
                }`}
              />
            </div>

            <div className="flex justify-center mt-12 mb-3">
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

            <div className="flex justify-center mt-5 mb-5">
              <button
                type="submit"
                className="w-80 px-12 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {currentLangCode === "hn"
                  ? "सबमिट"
                  : currentLangCode === "guj"
                  ? "સબમિટ"
                  : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-20 lg:mx-40 mt-4 text-gray-800">
        <h1 className="text-xl font-semibold mx-4 text-left text-gray-800 mt-4">
          {currentLangCode === "hn"
            ? "RideBuddy के साथ व्यापार"
            : currentLangCode === "guj"
            ? "RideBuddy સાથે વ્યવસાય"
            : "Bussiness With RideBuddy"}
        </h1>

        <div className="flex md:flex-row flex-col flex-wrap">
          {bussinessWithRidebuddyPartnerRequest.map((item, index) => (
            <>
              <div className="px-6 py-6">
                <span className="text-orange-600"> {item?.icon} </span>
                <span className="">
                  {currentLangCode === "hn"
                    ? item?.titleHindi
                    : currentLangCode === "guj"
                    ? item?.titleGujarati
                    : item?.title}
                </span>
                <p
                  className={`${
                    item?.monstor ? "md:text-5xl text-3xl" : "md:text-xl"
                  } mt-2 mx-7`}
                >
                  <Link>
                    {currentLangCode === "hn"
                      ? item?.linkHindi
                      : currentLangCode === "guj"
                      ? item?.linkGujarati
                      : item?.link}
                  </Link>
                </p>
                {item?.description && (
                  <p className="mx-7 mt-2">
                    (
                    {currentLangCode === "hn"
                      ? item?.descriptionHindi
                      : currentLangCode === "guj"
                      ? item?.descriptionGujarati
                      : item?.description}
                    )
                  </p>
                )}
              </div>
              {index < bussinessWithRidebuddyPartnerRequest.length - 1 && (
                <div className="hidden md:block border-l border-gray-300 mx-4"></div>
              )}
            </>
          ))}
        </div>

        <hr className="md:mt-10 mt-5 md:mb-10 mb-5 mx-4" />

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

export default BecomePartnerDealer;
