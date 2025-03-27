import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../../context/CommonContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputBox from "../../../components/form/InputBox";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { useFormik } from "formik";
import {
  changePasswordInitialValues,
  changePasswordValidationSchema,
  changePasswordValidationSchemaGujarati,
  changePasswordValidationSchemaHindi,
  sendOtpInitialValues,
  sendOtpValidationSchema,
  sendOtpValidationSchemaGujarati,
  sendOtpValidationSchemaHindi,
} from "./Schema";
import { MuiOtpInput } from "mui-one-time-password-input";

const ResetPassword = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { modelOpen, setModelOpen, currentLangCode } =
    useContext(CommonContext);
  const [verifyModel, setVerifyModel] = useState(false);
  const [changepasswordModel, setChangePasswordModel] = useState(false);
  const [otp, setOtp] = useState("");

  const formik = useFormik({
    initialValues: sendOtpInitialValues,
    validationSchema:
      currentLangCode === "hn"
        ? sendOtpValidationSchemaHindi
        : currentLangCode === "guj"
        ? sendOtpValidationSchemaGujarati
        : sendOtpValidationSchema,
    onSubmit: async (values) => {
      setVerifyModel(true);
    },
  });

  const formik2 = useFormik({
    initialValues: changePasswordInitialValues,
    validationSchema:
      currentLangCode === "hn"
        ? changePasswordValidationSchemaHindi
        : currentLangCode === "guj"
        ? changePasswordValidationSchemaGujarati
        : changePasswordValidationSchema,
    onSubmit: async (values) => {
      navigate("/login");
    },
  });

  const handleOtpChange = (newValue) => {
    setOtp(newValue);
  };

  const handleOtpCheck = (e) => {
    e.preventDefault();
    setChangePasswordModel(true);
  };

  useEffect(() => {
    if (pathname === "/reset-password") {
      setModelOpen(true);
    }
  });

  return (
    modelOpen && (
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-60 flex base_font justify-center items-center z-50"
        onClick={() => setModelOpen(false)}
      >
        <div
          className="bg-white rounded-lg w-full sm:w-96 p-8 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl noto_font font-semibold text-center text-gray-800 mb-4">
            {!verifyModel
              ? currentLangCode === "hn"
                ? "अपना पासवर्ड रीसेट करें"
                : currentLangCode === "guj"
                ? "તમારો પાસવર્ડ રીસેટ કરો"
                : "Reset Your Password"
              : !changepasswordModel
              ? currentLangCode === "hn"
                ? "ओटीपी दर्ज करें"
                : currentLangCode === "guj"
                ? "ઓટીપી દાખલ કરો"
                : "Enter otp"
              : currentLangCode === "hn"
              ? "पासवर्ड बदलें"
              : currentLangCode === "guj"
              ? "પાસવર્ડ બદલો"
              : "Change Password"}
          </h2>
          <p className="text-sm text-center text-gray-600 mb-8">
            {!verifyModel
              ? currentLangCode === "hn"
                ? "कृपया भेजे गए ओटीपी पर अपना ईमेल दर्ज करें"
                : currentLangCode === "guj"
                ? "મોકલેલ otp માટે કૃપા કરીને તમારો ઈમેલ દાખલ કરો"
                : "Please enter your email to sent otp."
              : !changepasswordModel
              ? currentLangCode === "hn"
                ? "कृपया आपके ईमेल पर भेजा गया ओटीपी दर्ज करें"
                : currentLangCode === "guj"
                ? "કૃપા કરીને ઓટીપી દાખલ કરો જે તમારા ઇમેઇલ પર મોકલવામાં આવે છે"
                : "Please enter otp which is sent to your email"
              : currentLangCode === "hn"
              ? "अपना खाता पासवर्ड अपडेट करें"
              : currentLangCode === "guj"
              ? "તમારો એકાઉન્ટ પાસવર્ડ અપડેટ કરો"
              : "Update your account password"}
          </p>

          {/* Reset Password Form */}
          {!verifyModel ? (
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <InputBox
                  name={"email"}
                  type={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "अपना ईमेल दर्ज करें"
                      : currentLangCode === "guj"
                      ? "તમારો ઈમેલ દાખલ કરો"
                      : `Enter your email`
                  }
                  required
                />
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
              </div>

              <div className="flex justify-center gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 noto_font text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
                >
                  {currentLangCode === "hn"
                    ? "ओटीपी भेजें"
                    : currentLangCode === "guj"
                    ? "Otp મોકલો"
                    : `Send Otp`}
                </button>
              </div>
            </form>
          ) : !changepasswordModel ? (
            <form>
              <div className="mb-3">
                <MuiOtpInput
                  inputProps={{ type: "password" }}
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={handleOtpCheck}
                  className="w-full mt-4 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
                >
                  {currentLangCode === "hn"
                    ? "ओटीपी सत्यापित करें"
                    : currentLangCode === "guj"
                    ? "Otp ચકાસો"
                    : `Verify Otp`}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={formik2.handleSubmit}>
              <div className="mb-3">
                <InputBox
                  name={"password"}
                  type={"password"}
                  value={formik2.values.password}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "अपना पासवर्ड भरें"
                      : currentLangCode === "guj"
                      ? "તમારો પાસવર્ડ દાખલ કરો"
                      : `Enter your password`
                  }
                  required
                />
                {formik2.errors.password && formik2.touched.password && (
                  <ErrorMessage message={formik2.errors.password} />
                )}
              </div>

              <div className="mb-3">
                <InputBox
                  name={"confirm_password"}
                  type={"password"}
                  value={formik2.values.confirm_password}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "अपना पुष्टिकरण पासवर्ड दर्ज करें"
                      : currentLangCode === "guj"
                      ? "તમારો કન્ફર્મ પાસવર્ડ દાખલ કરો"
                      : `Enter your confirm password`
                  }
                  required
                />
                {formik2.errors.confirm_password &&
                  formik2.touched.confirm_password && (
                    <ErrorMessage message={formik2.errors.confirm_password} />
                  )}
              </div>

              <div className="flex justify-center gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
                >
                  {currentLangCode === "hn"
                    ? "पासवर्ड अपडेट करें"
                    : currentLangCode === "guj"
                    ? "પાસવર્ડ અપડેટ કરો"
                    : `Update password`}
                </button>
              </div>
            </form>
          )}

          <hr className="mb-3" />
          <p className="text-sm text-center">
            {currentLangCode === "hn"
              ? "पासवर्ड याद"
              : currentLangCode === "guj"
              ? "પાસવર્ડ યાદ રાખો"
              : `Remember password`}
            !{" "}
            <Link to="/login" className="text-blue-600 noto_font hover:text-blue-800">
              {currentLangCode === "hn"
                ? "लॉग इन करें"
                : currentLangCode === "guj"
                ? "લોગ ઇન કરો"
                : `Log In`}
            </Link>{" "}
          </p>
        </div>
      </div>
    )
  );
};

export default ResetPassword;
