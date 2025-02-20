// Gender options
export const genderOptions = [
  { title: "Male", value: "male" },
  { title: "Female", value: "female" },
  { title: "Other", value: "other" },
];

// Authentication options
export const authenticationOptions = [
  { title: "Email", value: "email" },
  { title: "UserName", value: "username" },
];

export const dayJsConverter = (value) => {
  return value?.format("MM/DD/YYYY");
}