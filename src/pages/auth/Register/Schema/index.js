import * as Yup from "yup";

// Initial values for the form fields
export const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  username: "",
  gender: "",
  // date_of_birth: ''
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required!"),

  lastname: Yup.string().required("Last name is required!"),

  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm password is required!"),

  phone: Yup.string().required("Phone is required!"),

  username: Yup.string().required("UserName is required!"),

  gender: Yup.string().required("Gender is required!"),

  // date_of_birth: Yup.date()
  //   .required("Date of birth is required!")
  //   .nullable()
  //   .min(new Date(2010, 0, 1), "Date of birth cannot be earlier than 2010")
  //   .max(new Date(), "Date of birth cannot be in the future")
});
