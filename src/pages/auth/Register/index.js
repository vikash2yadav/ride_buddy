import React, { useState } from "react";
import InputBox from "../../../components/form/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";

const Register = () => {
  const navigate = useNavigate();
  const handleShowForTerms = () => {
    alert(
      "This form have some fields and you are sharing your personal data with us, Please share your right information that we will contact you."
    );
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
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

          <form onSubmit={handleLogin}>
            <div className="mb-3 grid md:grid-cols-2 gap-4">
              <InputBox
                // onChange={(e) => setEmail(e.target.value)}
                className="w-64"
                label="Enter First Name"
                options={[{ title: "Email" }, { title: "Username" }]}
                required
              />
              <InputBox
                // onChange={(e) => setEmail(e.target.value)}
                className="w-64"
                label="Enter Last Name"
                options={[{ title: "Email" }, { title: "Username" }]}
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                label="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                label="Enter Password"
                required
              />
            </div>

            <div className="mb-3">
              <InputBox
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                type="submit"
                onClick={()=> navigate('/')}
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
