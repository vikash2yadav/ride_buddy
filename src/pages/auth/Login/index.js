import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../../context/CommonContext";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputBox from "../../../components/form/InputBox";
import SelectBox from "../../../components/form/SelectBox";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { modelOpen, setModelOpen } = useContext(CommonContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

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
              Login
            </h2>
            <p className="text-sm text-center text-gray-600 mb-8">
              Please enter your credentials to continue.
            </p>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <SelectBox
                  // onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  label="Enter Authentication type"
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
                  label="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <InputBox
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  label="Enter your Password"
                  required
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 rounded text-orange-600"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="flex justify-center gap-2">
                <button
                onClick={() => {navigate('/')}}
                  type="submit"
                  className="w-full py-3 bg-white text-black border border-gray-300 rounded-lg shadow-md mb-5"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5"
                >
                  Login
                </button>
              </div>

              <hr className="mb-3" />
              <p className="text-sm text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sign Up
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
