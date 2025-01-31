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
export const loginByUsernameValidationSchema = Yup.object().shape({
  type: Yup.string().required("Select Authentication Type!"),

  username: Yup.string().required("Username is required!"),

  password: Yup.string().required("Password is required!"),
});
