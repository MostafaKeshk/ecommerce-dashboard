import * as Yup from "yup";
import { phoneRegex } from "../utils/regex";

const schema = (id?: any) =>
  Yup.object().shape({
    name: Yup.string().required("Name is required"),

    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .when("id", {
        is: id,
        then: Yup.string().required("Password is required"),
        otherwise: Yup.string(),
      }),
    confirmPassword: Yup.string()
      .when("id", {
        is: id,
        then: Yup.string().required("Password is required"),
        otherwise: Yup.string(),
      })
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),

    image: Yup.mixed().when("id", {
      is: id,
      then: Yup.mixed().required("Image is required"),
      otherwise: Yup.mixed(),
    }),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegex, "Phone Number is not valid"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

export default schema;
