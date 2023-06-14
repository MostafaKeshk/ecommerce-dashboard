import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik";
import useCallApi from "../hooks/useCallApi";
import signupSchema from "../validations/auth/signup";
import SignupApi from "../apis/signup";
import { useState } from "react";

const useSignupContainer = () => {
  const { callApi, loading } = useCallApi();
  const { handleLogin } = useAuth();

  const [image, setImage] = useState("");

  const handleSubmit = (values: any) => {
    const body: any = {
      type: values.type,
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      image: values.image,
      phoneNumber: values.phoneNumber,
    };

    callApi(SignupApi.signup(body), (response: any) => {
      handleLogin(response.user, response.token);
    });
  };

  const formik: any = useFormik({
    initialValues: {
      type: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
      phoneNumber: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values: any) => handleSubmit(values),
  });

  return {
    formik,
    loading,
    image,
    setImage,
  };
};

export default useSignupContainer;
