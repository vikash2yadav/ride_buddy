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

// Validation schema using Yup
export const partnerValidationSchemaHindi = Yup.object().shape({
  name: Yup.string().required("नाम आवश्यक है!"),
  dealership: Yup.string().required("डीलरशिप की आवश्यकता है!"),
  phone: Yup.string().required("फ़ोन आवश्यक है!"),
  email: Yup.string().required("ईमेल की जरूरत है!"),
  dealership_city_id: Yup.string().required("डीलरशिप शहर की आवश्यकता है!"),
});

// Validation schema using Yup
export const partnerValidationSchemaGujarati = Yup.object().shape({
  name: Yup.string().required("નામ જરૂરી છે!"),
  dealership: Yup.string().required("ડીલરશિપ જરૂરી છે!"),
  phone: Yup.string().required("ફોન જરૂરી છે!"),
  email: Yup.string().required("ઇમેઇલ આવશ્યક છે!"),
  dealership_city_id: Yup.string().required(
    "ઈમેલ માંગે છે ડીલરશિપ સિટી જરૂરી છે!"
  ),
});
