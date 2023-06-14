import * as Yup from "yup";
import { phoneRegex } from "../utils/regex";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string(),
  confirmPassword: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),

  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(phoneRegex, "Phone Number is not valid"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default schema;
