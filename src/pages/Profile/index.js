import React, { useContext } from "react";
import { CommonContext } from "../../context/CommonContext";
import { useFormik } from "formik";
import ErrorMessage from "../../components/form/ErrorMessage";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { Typography } from "@mui/material";
import { genderOptions } from "../../utils/helper";

const Profile = () => {
  const { currentLangCode } = useContext(CommonContext);

  const formik = useFormik({
    initialValues: "",
    validationSchema: "",
    onSubmit: async (values, { resetForm }) => {},
  });

  return (
    <div className="w-full grid grid-cols-1 md:py-4">
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-10 lg:mx-60 text-gray-800 md:mb-5 mb-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="px-10 py-6">
            <h2 className="text-xl font-normal font-roboto text-center text-gray-800 mb-8">
              Your Profile
            </h2>
            <hr />
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10 mt-14">
              <div>
                <Typography>First Name</Typography>
                <InputBox
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  // label={`${
                  //   currentLangCode === "hn"
                  //     ? "अपना नाम दर्ज करें"
                  //     : currentLangCode === "guj"
                  //     ? "તમારું નામ દાખલ કરો"
                  //     : "Enter Your Name"
                  // }`}
                  className="w-full"
                />
                {formik.errors.first_name && formik.touched.first_name && (
                  <ErrorMessage message={formik.errors.first_name} />
                )}
              </div>
              <div>
                <Typography>Last Name</Typography>
                <InputBox
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  // label={`${
                  //   currentLangCode === "hn"
                  //     ? "डीलरशिप का नाम दर्ज करें"
                  //     : currentLangCode === "guj"
                  //     ? "ડીલરશીપનું નામ દાખલ કરો"
                  //     : "Enter Name Of Dealership"
                  // }`}
                  className="w-full"
                />
                {formik.errors.last_name && formik.touched.last_name && (
                  <ErrorMessage message={formik.errors.last_name} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>Email</Typography>
                <InputBox
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  // label={`${
                  //   currentLangCode === "hn"
                  //     ? "मोबाइल नंबर दर्ज करें"
                  //     : currentLangCode === "guj"
                  //     ? "મોબાઈલ નંબર દાખલ કરો"
                  //     : "Enter Mobile Number"
                  // }`}
                  className="w-full"
                />
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
              </div>
              <div>
                <Typography>UserName</Typography>
                <InputBox
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  // label={`${
                  //   currentLangCode === "hn"
                  //     ? "अपना ईमेल दर्ज करें"
                  //     : currentLangCode === "guj"
                  //     ? "તમારો ઈમેલ દાખલ કરો"
                  //     : "Enter Your Email"
                  // }`}
                  className="w-full"
                />
                {formik.errors.username && formik.touched.username && (
                  <ErrorMessage message={formik.errors.username} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>Licence No.</Typography>
                <InputBox
                  name="license_number"
                  value={formik.values.license_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.license_number &&
                  formik.touched.license_number && (
                    <ErrorMessage message={formik.errors.license_number} />
                  )}
              </div>
              <div>
                <Typography>Licence Expiry</Typography>
                <InputBox
                  name="license_expiry"
                  value={formik.values.license_expiry}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.license_expiry &&
                  formik.touched.license_expiry && (
                    <ErrorMessage message={formik.errors.license_expiry} />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>Phone No.</Typography>
                <InputBox
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <ErrorMessage message={formik.errors.phone} />
                )}
              </div>
              <div>
                <Typography>Alternate Phone No.</Typography>
                <InputBox
                  name="alternate_phone"
                  value={formik.values.alternate_phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.alternate_phone &&
                  formik.touched.alternate_phone && (
                    <ErrorMessage message={formik.errors.alternate_phone} />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>Gender</Typography>
                <SelectBox
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={genderOptions}
                  className="w-full"
                />
                {formik.errors.dealership_city_id &&
                  formik.touched.dealership_city_id && (
                    <ErrorMessage message={formik.errors.dealership_city_id} />
                  )}
              </div>

              <div>
                <Typography>Date Of Birth</Typography>
                <SelectBox
                  name="date_of_birth"
                  value={formik.values.date_of_birth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={genderOptions}
                  className="w-full"
                />
                {formik.errors.date_of_birth &&
                  formik.touched.date_of_birth && (
                    <ErrorMessage message={formik.errors.date_of_birth} />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>State</Typography>
                <SelectBox
                  name="state_id"
                  value={formik.values.state_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={[]}
                  className="w-full"
                />
                {formik.errors.state_id && formik.touched.state_id && (
                  <ErrorMessage message={formik.errors.state_id} />
                )}
              </div>

              <div>
                <Typography>City</Typography>
                <SelectBox
                  name="city_id"
                  value={formik.values.city_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={[]}
                  className="w-full"
                />
                {formik.errors.city_id && formik.touched.city_id && (
                  <ErrorMessage message={formik.errors.city_id} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div>
                <Typography>Postal Code</Typography>
                <InputBox
                  name="postal_code"
                  value={formik.values.postal_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.postal_code && formik.touched.postal_code && (
                  <ErrorMessage message={formik.errors.postal_code} />
                )}
              </div>
            </div>
            <div className="grid mb-2 lg:mb-10">
              <Typography>Address</Typography>
              <TextArea
                name="address"
                value={formik.values.address}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={3}
                maxRows={6}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
            </div>
            <div className="grid mb-2 lg:mb-10">
              <Typography>Native Address</Typography>
              <TextArea
                name="native_address"
                value={formik.values.native_address}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                minRows={3}
                maxRows={6}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
            </div>
            <div className="flex justify-center mt-5 mb-10">
              <button
                type="submit"
                className="w-80 px-12 py-3 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
