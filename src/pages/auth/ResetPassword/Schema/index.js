import * as Yup from "yup";

// Initial values for the form fields
export const sendOtpInitialValues = {
  email: "",
};

// Initial values for the form fields
export const changePasswordInitialValues = {
  password: "",
  confirm_password: "",
};

// Validation schema using Yup
export const sendOtpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
});

// Validation schema using Yup
export const sendOtpValidationSchemaHindi = Yup.object().shape({
  email: Yup.string()
    .email("अमान्य ईमेल प्रारूप!")
    .required("ईमेल की जरूरत है!"),
});

// Validation schema using Yup
export const sendOtpValidationSchemaGujarati = Yup.object().shape({
  email: Yup.string().email("અમાન્ય ઇમેઇલ ફોર્મેટ").required("ઇમેઇલ આવશ્યક છે"),
});

// Validation schema using Yup
export const changePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Password is required!"),
});

// Validation schema using Yup
export const changePasswordValidationSchemaHindi = Yup.object().shape({
  password: Yup.string()
    .min(6, "पासवर्ड कम से कम 6 अंकों का होना चाहिए!")
    .required("पासवर्ड आवश्यक है!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "पासवर्डों को मेल खाना चाहिए!")
    .required("पासवर्ड आवश्यक है!"),
});

// Validation schema using Yup
export const changePasswordValidationSchemaGujarati = Yup.object().shape({
  password: Yup.string()
    .min(6, "પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરનો હોવો જોઈએ!")
    .required("પાસવર્ડ જરૂરી છે!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "પાસવર્ડ મેળ ખાતા હોવા જોઈએ!")
    .required("પાસવર્ડ જરૂરી છે!"),
});
