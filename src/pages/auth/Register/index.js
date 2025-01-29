import React from "react";
import InputBox from "../../../components/form/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Schema";

const Register = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      <div className="w-full md:h-screen inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50 overflow-y-auto">
        <div
          className="bg-white rounded-lg p-8 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Register
          </h2>
          <p className="text-sm text-center text-gray-600 mb-8">
            Create a new account by filling the form below.
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <InputBox
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-64"
                label="Enter First Name"
                required
              />
              <InputBox
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-64"
                label="Enter Last Name"
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                className="w-full"
                label="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className="w-full"
                label="Enter Password"
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className="w-full"
                label="Enter Confirm Password"
                required
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

            <div className="grid md:grid-cols-2 gap-2">
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 bg-white text-black border border-gray-300 rounded-lg shadow-md mb-5"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
              >
                Submit
              </button>
            </div>
            <hr className="mb-3" />
            <p className="text-sm text-center">
              have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
