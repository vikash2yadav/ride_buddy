import * as Yup from "yup";

// Initial values for the form fields
export const profileInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  gender: "",
  phone: "",
  alternate_phone: "",
  date_of_birth: "",
  license_number: "",
  license_expiry: "",
  state_id: "",
  city_id: "",
  postal_code: "",
  address: "",
  native_address: "",
};

// Validation schema using Yup
export const profileValidationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required!"),
  lastname: Yup.string().required("Last Name is required!"),
  email: Yup.string().email("Invalid email").required("Email is required!"),
  username: Yup.string().required("UserName is required!"),
  gender: Yup.string().required("Gender is required!"),
  phone: Yup.string().required("Phone number is required!"),
  date_of_birth: Yup.string().required("Date of birth is required!"),
  address: Yup.string().required("Address is required!"),
  postal_code: Yup.string().required("Postal Code is required!"),
});

// Validation schema using Yup
export const profileValidationSchemaHindi = Yup.object().shape({
  firstname: Yup.string().required("पहला नाम आवश्यक है!"),
  lastname: Yup.string().required("उपाधि नाम आवश्यक है!"),
  email: Yup.string().email("अमान्य ईमेल").required("ईमेल आवश्यक है!"),
  username: Yup.string().required("उपयोगकर्ता नाम आवश्यक है!"),
  gender: Yup.string().required("लिंग आवश्यक है!"),
  phone: Yup.string().required("फोन नंबर आवश्यक है!"),
  date_of_birth: Yup.string().required("जन्मतिथि आवश्यक है!"),
  address: Yup.string().required("पता आवश्यक है!"),
  postal_code: Yup.string().required("पिन कोड आवश्यक है!"),
});

// Validation schema using Yup
export const profileValidationSchemaGujarati = Yup.object().shape({
  firstname: Yup.string().required("પ્રથમ નામ જરૂરી છે!"),
  lastname: Yup.string().required("આખરી નામ જરૂરી છે!"),
  email: Yup.string().email("અમાન્ય ઇમેઇલ").required("ઇમેઇલ જરૂરી છે!"),
  username: Yup.string().required("ઉપયોગકર્તાનું નામ જરૂરી છે!"),
  gender: Yup.string().required("લિંગ જરૂરી છે!"),
  phone: Yup.string().required("ફોન નંબર જરૂરી છે!"),
  date_of_birth: Yup.string().required("જન્મ તારીખ જરૂરી છે!"),
  address: Yup.string().required("સરનામું જરૂરી છે!"),
  postal_code: Yup.string().required("પોસ્ટલ કોડ જરૂરી છે!"),
});
