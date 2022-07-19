import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .required("Name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});



export default validationSchema;