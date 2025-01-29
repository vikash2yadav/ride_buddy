import * as Yup from "yup";

// Initial values for the form fields
export const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: ""
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required!"),
  
  last_name: Yup.string()
    .required("Last name is required!"),
  
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
  
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),
  
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm password is required!")
});
