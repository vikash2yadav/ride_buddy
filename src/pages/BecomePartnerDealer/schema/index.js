import * as Yup from "yup";

// Initial values for the form fields
export const partnerInitialValues = {
  name: "",
  dealership: "",
  phone: "",
  email: "",
  dealership_city_id: "",
  comment: "",
};

// Validation schema using Yup
export const partnerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  dealership: Yup.string().required("Dealership is required!"),
  phone: Yup.string().required("Phone is required!"),
  email: Yup.string().required("Email is required!"),
  dealership_city_id: Yup.string().required("Dealership City is required!"),
});
