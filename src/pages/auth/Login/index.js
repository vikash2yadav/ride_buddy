import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../../context/CommonContext";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputBox from "../../../components/form/InputBox";
import SelectBox from "../../../components/form/SelectBox";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import { useFormik } from "formik";
import {
  loginByUsernameInitialValues,
  loginByUsernameValidationSchema,
  loginByUsernameValidationSchemaGujarati,
  loginByUsernameValidationSchemaHindi,
  loginInitialValues,
  loginValidationSchema,
  loginValidationSchemaGujarati,
  loginValidationSchemaHindi,
} from "./Schema";
import { loginAPi } from "../../../apis/auth";
import ErrorMessage from "../../../components/form/ErrorMessage";
import { authenticationOptions } from "../../../utils/helper";

const Login = () => {
  const [type, setType] = useState("email");
  const {
    setSnackOpen,
    setSnackMessage,
    setMessageType,
    setIsLogin,
    setIsLoading,
    currentLangCode,
  } = useContext(CommonContext);

  const formik = useFormik({
    initialValues:
      type === "email" ? loginInitialValues : loginByUsernameInitialValues,
    validationSchema:
      type === "email"
        ? currentLangCode === "hn"
          ? loginValidationSchemaHindi
          : currentLangCode === "guj"
          ? loginValidationSchemaGujarati
          : loginValidationSchema
        : currentLangCode === "hn"
        ? loginByUsernameValidationSchemaHindi
        : currentLangCode === "guj"
        ? loginByUsernameValidationSchemaGujarati
        : loginByUsernameValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      let response = await loginAPi("user/sign-in", values, "POST");

      if (response?.status === 200) {
        setIsLoading(false);
        setSnackOpen(true);
        setMessageType("success");
        setSnackMessage(response?.data?.message);
        setModelOpen(false);
        setIsLogin(true);
        localStorage.setItem("authorization", response?.data?.data?.token);
        localStorage.setItem("profileImage", response?.data?.data?.profile);
        navigate("/");
      } else {
        setIsLoading(true);
        setSnackOpen(true);
        setMessageType("error");
        setSnackMessage(response?.data?.message);
        localStorage.removeItem("authorization");
        localStorage.removeItem("profileImage");
        navigate("/login");
      }
    },
  });

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { modelOpen, setModelOpen } = useContext(CommonContext);

  useEffect(() => {
    if (pathname === "/login") {
      setModelOpen(true);
    }
  });

  return (
    <>
      {modelOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setModelOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-full sm:w-96 p-8 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            {pathname !== "/login" && (
              <div className="flex justify-end">
                <IconButton onClick={() => setModelOpen(false)}>
                  <CloseIcon className="hover:text-orange-600" />
                </IconButton>
              </div>
            )}

            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
              {currentLangCode === "hn"
                ? "लॉग इन"
                : currentLangCode === "guj"
                ? "લૉગિન"
                : "Login"}
            </h2>
            <p className="text-sm text-center text-gray-600 mb-8">
              {currentLangCode === "hn"
                ? "जारी रखने के लिए कृपया अपनी साख दर्ज करें।"
                : currentLangCode === "guj"
                ? "ચાલુ રાખવા માટે કૃપા કરીને તમારા ઓળખપત્રો દાખલ કરો."
                : "Please enter your credentials to continue."}
            </p>

            {/* Login Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <SelectBox
                  name={"type"}
                  value={formik.values.type}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setType(e.target.value);
                    if (type === "email") {
                      formik.setFieldValue("email", "");
                      formik.setFieldValue("password", "");
                    } else {
                      formik.setFieldValue("username", "");
                      formik.setFieldValue("password", "");
                    }
                  }}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "प्रमाणीकरण प्रकार चुनें"
                      : currentLangCode === "guj"
                      ? "પ્રમાણીકરણ પ્રકાર પસંદ કરો"
                      : "Select Authentication type"
                  }
                  options={authenticationOptions}
                  required
                />
                {formik.errors.type && formik.touched.type && (
                  <ErrorMessage message={formik.errors.type} />
                )}
              </div>

              <div className="mb-3">
                <InputBox
                  name={type === "email" ? `email` : "username"}
                  type={type === "email" ? `email` : "text"}
                  value={
                    type === "email"
                      ? formik.values.email
                      : formik.values.username
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? `अपना ${
                          type === "email" ? "ईमेल" : "उपयोगकर्ता नाम"
                        } दर्ज करें`
                      : currentLangCode === "guj"
                      ? `તમારો ${
                          type === "email" ? "ઈમેલ" : "વપરાશકર્તા નામ"
                        } દાખલ કરો`
                      : `Enter your ${type === "email" ? "email" : "username"}`
                  }
                  required
                />
                {type === "email"
                  ? formik.errors.email &&
                    formik.touched.email && (
                      <ErrorMessage message={formik.errors.email} />
                    )
                  : formik.errors.username &&
                    formik.touched.username && (
                      <ErrorMessage message={formik.errors.username} />
                    )}
              </div>

              <div className="mb-3">
                <InputBox
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full"
                  label={
                    currentLangCode === "hn"
                      ? "अपना पासवर्ड भरें"
                      : currentLangCode === "guj"
                      ? "તમારો પાસવર્ડ દાખલ કરો"
                      : "Enter your Password"
                  }
                  required
                />
                {formik.errors.password && formik.touched.password && (
                  <ErrorMessage message={formik.errors.password} />
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 rounded text-orange-600"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    {currentLangCode === "hn"
                      ? "मुझे याद करो"
                      : currentLangCode === "guj"
                      ? "મને યાદ રાખો"
                      : "Remember me"}
                  </label>
                </div>
                <Link
                  to="/reset-password"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {currentLangCode === "hn"
                    ? "पासवर्ड भूल गए"
                    : currentLangCode === "guj"
                    ? "પાસવર્ડ ભૂલી ગયા છો"
                    : "Forgot Password"}
                </Link>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                  type="submit"
                  className="w-full py-3 bg-white text-black border border-gray-300 rounded-lg shadow-md mb-5"
                >
                  {currentLangCode === "hn"
                    ? "पीछे"
                    : currentLangCode === "guj"
                    ? "પાછળ"
                    : "Back"}
                </button>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
                >
                  {currentLangCode === "hn"
                    ? "लॉग इन करें"
                    : currentLangCode === "guj"
                    ? "લૉગિન કરો"
                    : "Login"}
                </button>
              </div>

              <hr className="mb-3" />
              <p className="text-sm text-center">
                {currentLangCode === "hn"
                  ? "कोई खाता नहीं है?"
                  : currentLangCode === "guj"
                  ? "ખાતું નથી?"
                  : "Don't have an account?"}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {currentLangCode === "hn"
                    ? " साइन अप करें"
                    : currentLangCode === "guj"
                    ? " સાઇન અપ કરો"
                    : " Sign Up"}
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
