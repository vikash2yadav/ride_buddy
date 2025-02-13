import React, { useContext, useEffect } from "react";
import { CommonContext } from "../../context/CommonContext";
import { useFormik } from "formik";
import ErrorMessage from "../../components/form/ErrorMessage";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { Typography } from "@mui/material";
import { genderOptions } from "../../utils/helper";
import { getProfileData, updateProfileData } from "../../apis/user";
import {
  profileInitialValues,
  profileValidationSchema,
  profileValidationSchemaGujarati,
  profileValidationSchemaHindi,
} from "./schema";
import { LocationContext } from "../../context/LocationContext";
import AvatarImage from "../../components/AvatarImage";

const Profile = () => {
  const {
    currentLangCode,
    setIsLoading,
    setSnackOpen,
    setMessageType,
    setSnackMessage,
  } = useContext(CommonContext);
  const { citiesList, statesList, cities, states } =
    useContext(LocationContext);
  const formik = useFormik({
    initialValues: profileInitialValues,
    validationSchema:
      currentLangCode === "hn"
        ? profileValidationSchemaHindi
        : currentLangCode === "guj"
        ? profileValidationSchemaGujarati
        : profileValidationSchema,
    onSubmit: async (values) => {
      let response = await updateProfileData("user/update", values, "PUT", {});
      if (response.status === 200) {
        setSnackOpen(true);
        setMessageType("success");
        setSnackMessage(response?.data?.message);
        handleGetProfile();
      } else {
        setSnackOpen(true);
        setMessageType("error");
        setSnackMessage(response?.data?.message);
      }
    },
  });

  const handleGetProfile = async () => {
    setIsLoading(true);
    let response = await getProfileData("user/profile", {}, "GET", {});
    if (response.status === 200) {
      formik.setValues(response.data.data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    // Fetch
    handleGetProfile();
  }, []);

  useEffect(() => {
    statesList();
    citiesList();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:py-4">
      <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-10 lg:mx-60 text-gray-800 md:mb-5 mb-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="px-10 py-6">
            <h2 className="text-xl font-normal font-roboto text-center text-gray-800 mb-8">
              Your Profile
            </h2>
            <hr />
            <div className="flex justify-center mb-2 lg:mb-10 mt-4 md:mt-14">
              <div>
                <AvatarImage
                  name="profile"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: 150, height: 150 }}
                />
                {formik.errors.firstname && formik.touched.firstname && (
                  <ErrorMessage
                    message={formik.errors.firstname}
                    large={true}
                  />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10 mt-8">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "First Name"}
                </Typography>
                <InputBox
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.firstname && formik.touched.firstname && (
                  <ErrorMessage
                    message={formik.errors.firstname}
                    large={true}
                  />
                )}
              </div>
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Last Name"}
                </Typography>
                <InputBox
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.lastname && formik.touched.lastname && (
                  <ErrorMessage message={formik.errors.lastname} large={true} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Email"}
                </Typography>
                <InputBox
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.email && formik.touched.email && (
                  <ErrorMessage message={formik.errors.email} large={true} />
                )}
              </div>
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "UserName"}
                </Typography>
                <InputBox
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full"
                />
                {formik.errors.username && formik.touched.username && (
                  <ErrorMessage message={formik.errors.username} large={true} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Licence No."}
                </Typography>
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
                    <ErrorMessage
                      message={formik.errors.license_number}
                      large={true}
                    />
                  )}
              </div>
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Licence Expiry"}
                </Typography>
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
                    <ErrorMessage
                      message={formik.errors.license_expiry}
                      large={true}
                    />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Phone No."}
                </Typography>
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
                  <ErrorMessage message={formik.errors.phone} large={true} />
                )}
              </div>
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Alternate Phone No."}
                </Typography>
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
                    <ErrorMessage
                      message={formik.errors.alternate_phone}
                      large={true}
                    />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Gender"}
                </Typography>
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
                    <ErrorMessage
                      message={formik.errors.dealership_city_id}
                      large={true}
                    />
                  )}
              </div>

              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Date Of Birth"}
                </Typography>
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
                    <ErrorMessage
                      message={formik.errors.date_of_birth}
                      large={true}
                    />
                  )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "State"}
                </Typography>
                <SelectBox
                  name="state_id"
                  value={formik.values.state_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={states}
                  className="w-full"
                />
                {formik.errors.state_id && formik.touched.state_id && (
                  <ErrorMessage message={formik.errors.state_id} large={true} />
                )}
              </div>

              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "City"}
                </Typography>
                <SelectBox
                  name="city_id"
                  value={formik.values.city_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="outlined-basic"
                  variant="outlined"
                  options={cities}
                  className="w-full"
                />
                {formik.errors.city_id && formik.touched.city_id && (
                  <ErrorMessage message={formik.errors.city_id} large={true} />
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
              <div>
                <Typography>
                  {currentLangCode === "hn"
                    ? "अपना नाम दर्ज करें"
                    : currentLangCode === "guj"
                    ? "તમારું નામ દાખલ કરો"
                    : "Postal Code"}
                </Typography>
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
                  <ErrorMessage
                    message={formik.errors.postal_code}
                    large={true}
                  />
                )}
              </div>
            </div>
            <div className="grid mb-2 lg:mb-10">
              <Typography>
                {currentLangCode === "hn"
                  ? "अपना नाम दर्ज करें"
                  : currentLangCode === "guj"
                  ? "તમારું નામ દાખલ કરો"
                  : "Address"}
              </Typography>
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
              {formik.errors.address && formik.touched.address && (
                <ErrorMessage message={formik.errors.address} large={true} />
              )}
            </div>
            <div className="grid mb-2 lg:mb-10">
              <Typography>
                {currentLangCode === "hn"
                  ? "अपना नाम दर्ज करें"
                  : currentLangCode === "guj"
                  ? "તમારું નામ દાખલ કરો"
                  : "Native Address"}
              </Typography>
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
                {/* {currentLangCode === "hn"
                  ? "अपना नाम दर्ज करें"
                  : currentLangCode === "guj"
                  ? "તમારું નામ દાખલ કરો"
                  : "Save"} */}
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
