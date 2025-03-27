import React, { useContext } from "react";
import InputBox from "../../../components/form/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Schema";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { registerAPi } from "../../../apis/auth";
import SelectBox from "../../../components/form/SelectBox";
import { genderOptions } from "../../../utils/helper";
import { CommonContext } from "../../../context/CommonContext";
import "../../../global.css";

const Register = () => {
  const { setSnackOpen, setSnackMessage, setMessageType, currentLangCode } =
    useContext(CommonContext);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let response = await registerAPi("user/sign-up", values, "POST");
      if (response?.status === 200) {
        setSnackOpen(true);
        setMessageType("success");
        setSnackMessage(response?.data?.message);
        navigate("/login");
      } else {
        setSnackOpen(true);
        setMessageType("error");
        setSnackMessage(response?.data?.message);
      }
    },
  });

  const navigate = useNavigate();
  const handleShowForTerms = () => {
    alert(
      "This form have some fields and you are sharing your personal data with us, Please share your right information that we will contact you."
    );
  };

  return (
    <>
      <div className="w-full min-h-screen base_font md:py-5 inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50 overflow-y-auto">
        <div
          className="bg-white w-full sm:2/3 md:w-3/4 lg:w-2/5 rounded-lg p-8 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-semibold noto_font text-center text-gray-800 mb-4">
            {currentLangCode === "hn"
              ? "पंजीकरण करवाना"
              : currentLangCode === "guj"
              ? "નોંધણી કરો"
              : "Register"}
          </h2>
          <p className="text-sm text-center text-gray-600 mb-8">
            {currentLangCode === "hn"
              ? "नीचे दिया गया फॉर्म भरकर एक नया खाता बनाएं।"
              : currentLangCode === "guj"
              ? "નીચેનું ફોર્મ ભરીને નવું ખાતું બનાવો."
              : "Create a new account by filling the form below."}
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "प्रथम नाम दर्ज करें"
                      : currentLangCode === "guj"
                      ? "પ્રથમ નામ દાખલ કરો"
                      : "Enter First Name"
                  }
                  required
                />
                {formik.errors.firstname && formik.touched.firstname && (
                  <ErrorMessage message={formik.errors.firstname} />
                )}
              </div>
              <div>
                <InputBox
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "अंतिम नाम दर्ज करो"
                      : currentLangCode === "guj"
                      ? "છેલ્લું નામ દાખલ કરો"
                      : "Enter Last Name"
                  }
                  required
                />
                {formik.errors.lastname && formik.touched.lastname && (
                  <ErrorMessage message={formik.errors.lastname} />
                )}
              </div>
            </div>

            <div className="mb-3">
              <div>
                <InputBox
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "ईमेल दर्ज करें"
                      : currentLangCode === "guj"
                      ? "ઈમેલ દાખલ કરો"
                      : "Enter email"
                  }
                  required
                />
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
              </div>
            </div>

            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "पास वर्ड दर्ज करें"
                      : currentLangCode === "guj"
                      ? "પાસવર્ડ દાખલ કરો"
                      : "Enter Password"
                  }
                  required
                />
                {formik.errors.password && formik.touched.password && (
                  <ErrorMessage message={formik.errors.password} />
                )}
              </div>

              <div>
                <InputBox
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "पासवर्ड की पुष्टि कीजिये"
                      : currentLangCode === "guj"
                      ? "પાસવર્ડની પુષ્ટિ કરો"
                      : "Confirm Password"
                  }
                  required
                />
                {formik.errors.confirm_password &&
                  formik.touched.confirm_password && (
                    <ErrorMessage message={formik.errors.confirm_password} />
                  )}
              </div>
            </div>

            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <div>
                <InputBox
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "फ़ोन दर्ज करें"
                      : currentLangCode === "guj"
                      ? "ફોન દાખલ કરો"
                      : "Enter Phone"
                  }
                  required
                />
                {formik.errors.phone && formik.touched.phone && (
                  <ErrorMessage message={formik.errors.phone} />
                )}
              </div>
              <div>
                <InputBox
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "उपयोगकर्ता नाम दर्ज करें"
                      : currentLangCode === "guj"
                      ? "વપરાશકર્તા નામ દાખલ કરો"
                      : "Enter UserName"
                  }
                  required
                />
                {formik.errors.username && formik.touched.username && (
                  <ErrorMessage message={formik.errors.username} />
                )}
              </div>
            </div>

            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <div>
                <SelectBox
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "लिंग चुनें"
                      : currentLangCode === "guj"
                      ? "લિંગ પસંદ કરો"
                      : "Select Gender"
                  }
                  options={genderOptions}
                  required
                />
                {formik.errors.gender && formik.touched.gender && (
                  <ErrorMessage message={formik.errors.gender} />
                )}
              </div>
              {/* <div>
                <DatePickerComponent
                  name="date_of_birth"
                  value={formik.values.date_of_birth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label="Date Of Birth"
                  required
                />
                {formik.errors.date_of_birth && formik.touched.date_of_birth && (
                  <ErrorMessage message={formik.errors.date_of_birth} />
                )}
              </div> */}
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
                    <Link onClick={handleShowForTerms} className="noto_font">
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

            <div className="grid md:grid-cols-2 gap-2">
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 bg-white noto_font text-black border border-gray-300 rounded-lg shadow-md mb-5"
              >
                {currentLangCode === "hn"
                  ? "पीछे"
                  : currentLangCode === "guj"
                  ? "પાછળ"
                  : "Back"}
              </button>
              <button
                type="submit"
                className="w-full py-3 noto_font bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
              >
                {currentLangCode === "hn"
                  ? "जमा करना"
                  : currentLangCode === "guj"
                  ? "સબમિટ કરો"
                  : "Submit"}
              </button>
            </div>
            <hr className="mb-3" />
            <p className="text-sm text-center">
              {currentLangCode === "hn"
                ? "एक खाता है?"
                : currentLangCode === "guj"
                ? "ખાતું છે?"
                : "have an account?"}
              <Link to="/login" className="text-blue-600 noto_font hover:text-blue-800">
                {currentLangCode === "hn"
                  ? " लॉग इन करें"
                  : currentLangCode === "guj"
                  ? " લોગ ઇન કરો"
                  : " Log In"}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
