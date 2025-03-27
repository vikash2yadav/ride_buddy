import React, { useContext, useEffect, useRef, useState } from "react";
import { CommonContext } from "../../context/CommonContext";
import { useFormik } from "formik";
import ErrorMessage from "../../components/form/ErrorMessage";
import InputBox from "../../components/form/InputBox";
import SelectBox from "../../components/form/SelectBox";
import TextArea from "../../components/form/TextArea";
import { Box, IconButton, Typography } from "@mui/material";
import { dayJsConverter, genderOptions } from "../../utils/helper";
import { getProfileData, updateProfileData } from "../../apis/user";
import {
  profileInitialValues,
  profileValidationSchema,
  profileValidationSchemaGujarati,
  profileValidationSchemaHindi,
} from "./schema";
import { LocationContext } from "../../context/LocationContext";
import AvatarImage from "../../components/AvatarImage";
import RequiredSpan from "../../components/form/RequiredSpan";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { EditOutlined } from "@mui/icons-material";
import ProfileModel from "../../components/ProfileModel";
import { updateProfileImage } from "../../apis/util";
import BasicDatePicker from "../../components/DatePicker";
import dayjs from "dayjs";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [currentImageProfile, setCurrentImageProfile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const {
    currentLangCode,
    setIsLoading,
    setSnackOpen,
    setMessageType,
    setSnackMessage,
    setImageModal,
    imageModal,
    setProfile,
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

      if (response?.status === 200) {
        if (currentImageProfile) {
          localStorage.setItem("profileImage", currentImageProfile);
          setProfile(currentImageProfile);
        }
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
      formik.setFieldValue("firstname", response?.data?.data?.firstname);
      formik.setFieldValue("lastname", response?.data?.data?.lastname);
      formik.setFieldValue("email", response?.data?.data?.email);
      formik.setFieldValue("username", response?.data?.data?.username);
      formik.setFieldValue(
        "license_number",
        response?.data?.data?.license_number
      );
      formik.setFieldValue(
        "license_expiry",
        response?.data?.data?.license_expiry
      );
      formik.setFieldValue("phone", response?.data?.data?.phone);
      formik.setFieldValue(
        "alternate_phone",
        response?.data?.data?.alternate_phone
      );
      formik.setFieldValue("gender", response?.data?.data?.gender);
      formik.setFieldValue("state_id", response?.data?.data?.state_id);
      formik.setFieldValue("city_id", response?.data?.data?.city_id);
      formik.setFieldValue("postal_code", response?.data?.data?.postal_code);
      formik.setFieldValue("address", response?.data?.data?.address);
      formik.setFieldValue(
        "native_address",
        response?.data?.data?.native_address
      );
      formik.setFieldValue(
        "date_of_birth",
        response?.data?.data?.date_of_birth
      );
      setImageUrl(response.data.data?.profile);
      setSelectedDate(response?.data?.data?.date_of_birth);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  const handleShowProfile = async () => {
    setImageModal(true);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderName", "/users");

    let response = await updateProfileImage(
      "util/upload/multiple",
      formData,
      "POST",
      null
    );

    if (response?.status === 200) {
      setCurrentImageProfile(response?.data?.data[0].url);
      formik.setFieldValue("profile", response?.data?.data[0].name);
    }

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (newValue) => {
    let newDate = dayJsConverter(newValue);
    setSelectedDate(newDate);
    formik.setFieldValue("date_of_birth", newDate);
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
    <>
      <Header />
      <div className="w-full grid grid-cols-1 md:py-4 base_font">
        <div className="bg-white border border-gray-300 shadow-md rounded-2xl md:mx-10 lg:mx-60 text-gray-800 md:mb-5 mb-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="px-10 py-6">
              <h2 className="text-xl font-normal font-roboto text-center text-gray-800 mb-8">
                {currentLangCode === "hn"
                  ? "आपकी प्रोफाइल"
                  : currentLangCode === "guj"
                  ? "તમારું પ્રોફાઇલ"
                  : "Your Profile"}
              </h2>
              <hr />
              <div className="flex justify-center mb-2 lg:mb-10 mt-4 md:mt-8">
                <div>
                  <Box sx={{ position: "relative" }}>
                    <AvatarImage
                      name="profile"
                      src={imageUrl}
                      value={formik.values.firstname}
                      onClick={handleShowProfile}
                      onBlur={formik.handleBlur}
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: 150, height: 150, cursor: "pointer" }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        padding: "2px",
                        backgroundColor: "rgba(145, 144, 143, 0.8)",
                        borderRadius: "50%",
                      }}
                      onClick={() => fileInputRef.current.click()}
                    >
                      <EditOutlined sx={{ fontSize: 28, color: "white" }} />
                    </IconButton>
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    {formik.errors.firstname && formik.touched.firstname && (
                      <ErrorMessage
                        message={formik.errors.firstname}
                        large={true}
                      />
                    )}
                  </Box>
                  <ProfileModel
                    open={imageModal}
                    src={imageUrl}
                    onClose={() => setImageModal(false)}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10 mt-8">
                <div>
                  <Typography>
                    {currentLangCode === "hn"
                      ? "पहला नाम"
                      : currentLangCode === "guj"
                      ? "પ્રથમ નામ"
                      : "First Name"}
                    <RequiredSpan />
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
                      ? "अंतिम नाम"
                      : currentLangCode === "guj"
                      ? "છેલ્લું નામ"
                      : "Last Name"}
                    <RequiredSpan />
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
                    <ErrorMessage
                      message={formik.errors.lastname}
                      large={true}
                    />
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
                <div>
                  <Typography>
                    {currentLangCode === "hn"
                      ? "ઇમેઇલ"
                      : currentLangCode === "guj"
                      ? "ईमेल"
                      : "Email"}
                    <RequiredSpan />
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
                      ? "उपयोक्तानाम"
                      : currentLangCode === "guj"
                      ? "વપરાશકર્તા નામ"
                      : "UserName"}
                    <RequiredSpan />
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
                    <ErrorMessage
                      message={formik.errors.username}
                      large={true}
                    />
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
                <div>
                  <Typography>
                    {currentLangCode === "hn"
                      ? "लाइसेंस संख्या"
                      : currentLangCode === "guj"
                      ? "લાયસન્સ નં."
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
                      ? "लाइसेंस की समाप्ति"
                      : currentLangCode === "guj"
                      ? "લાઇસન્સ સમાપ્તિ"
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
                      ? "फोन नंबर"
                      : currentLangCode === "guj"
                      ? "ફોન નં"
                      : "Phone No."}
                    <RequiredSpan />
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
                      ? "वैकल्पिक फ़ोन नंबर"
                      : currentLangCode === "guj"
                      ? "વૈકલ્પિક ફોન નં"
                      : "Alternate Phone No."}
                    <RequiredSpan />
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
                      ? "लिंग"
                      : currentLangCode === "guj"
                      ? "જાતિ"
                      : "Gender"}
                    <RequiredSpan />
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
                      ? "जन्म तिथि"
                      : currentLangCode === "guj"
                      ? "જન્મ તારીખ"
                      : "Date Of Birth"}
                    <RequiredSpan />
                  </Typography>
                  <BasicDatePicker
                    name="date_of_birth"
                    value={selectedDate}
                    onChange={handleDateChange}
                    // onBlur={formik.handleBlur}
                    id="outlined-basic"
                    variant="outlined"
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
                      ? "राज्य"
                      : currentLangCode === "guj"
                      ? "રાજ્ય"
                      : "State"}
                    <RequiredSpan />
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
                    <ErrorMessage
                      message={formik.errors.state_id}
                      large={true}
                    />
                  )}
                </div>

                <div>
                  <Typography>
                    {currentLangCode === "hn"
                      ? "शहर"
                      : currentLangCode === "guj"
                      ? "શહેર"
                      : "City"}
                    <RequiredSpan />
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
                    <ErrorMessage
                      message={formik.errors.city_id}
                      large={true}
                    />
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 lg:gap-10 mb-3 lg:mb-10">
                <div>
                  <Typography>
                    {currentLangCode === "hn"
                      ? "पिन कोड"
                      : currentLangCode === "guj"
                      ? "પિન કોડ"
                      : "Postal Code"}
                    <RequiredSpan />
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
                    ? "पता"
                    : currentLangCode === "guj"
                    ? "સરનામું"
                    : "Address"}
                  <RequiredSpan />
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
                    ? "मूल पता"
                    : currentLangCode === "guj"
                    ? "મૂળ સરનામું"
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
                  className="w-80 px-12 py-3 rounded-lg noto_font text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {currentLangCode === "hn"
                    ? "सहेजें"
                    : currentLangCode === "guj"
                    ? "સાચવો"
                    : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
