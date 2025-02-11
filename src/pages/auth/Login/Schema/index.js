import * as Yup from "yup";

// Initial values for the form fields
export const loginInitialValues = {
  type: "",
  email: "",
  password: "",
};

// Initial values for the form fields
export const loginByUsernameInitialValues = {
  type: "",
  username: "",
  password: "",
};

// Validation schema using Yup
export const loginValidationSchema = Yup.object().shape({
  type: Yup.string().required("Select Authentication Type!"),

  email: Yup.string().required("Email is required!"),

  password: Yup.string().required("Password is required!"),
});

// Validation schema using Yup
export const loginValidationSchemaHindi = Yup.object().shape({
  type: Yup.string().required("प्रमाणीकरण प्रकार चुनें!"),

  email: Yup.string().required("ईमेल की जरूरत है!"),

  password: Yup.string().required("पासवर्ड आवश्यक है!"),
});

// Validation schema using Yup
export const loginValidationSchemaGujarati = Yup.object().shape({
  type: Yup.string().required("પ્રમાણીકરણ પ્રકાર પસંદ કરો!"),

  email: Yup.string().required("ઇમેઇલ આવશ્યક છે!"),

  password: Yup.string().required("પાસવર્ડ જરૂરી છે!"),
});

// Validation schema using Yup
export const loginByUsernameValidationSchema = Yup.object().shape({
  type: Yup.string().required("Select Authentication Type!"),

  username: Yup.string().required("Username is required!"),

  password: Yup.string().required("Password is required!"),
});

// Validation schema using Yup
export const loginByUsernameValidationSchemaHindi = Yup.object().shape({
  type: Yup.string().required("प्रमाणीकरण प्रकार चुनें!"),

  username: Yup.string().required("उपयोगकर्ता नाम आवश्यक है!"),

  password: Yup.string().required("पासवर्ड आवश्यक है!"),
});

// Validation schema using Yup
export const loginByUsernameValidationSchemaGujarati = Yup.object().shape({
  type: Yup.string().required("પ્રમાણીકરણ પ્રકાર પસંદ કરો!"),

  username: Yup.string().required("વપરાશકર્તા નામ જરૂરી છે!"),

  password: Yup.string().required("પાસવર્ડ જરૂરી છે!"),
});
