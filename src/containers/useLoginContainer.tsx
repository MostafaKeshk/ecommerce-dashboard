import LoginApi from "../apis/login";
import { useAuth } from "../contexts/AuthContext";
import { useFormik } from "formik";
import useCallApi from "../hooks/useCallApi";
import loginSchema from "../validations/auth/login";
import paths from "../routes/paths";
import { useNavigate } from "react-router-dom";

const useLoginContainer = () => {
  const { callApi, loading } = useCallApi();
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    callApi(LoginApi.login(values), (response: any) => {
      handleLogin(response.user, response.token);
    });
  };

  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values: any) => handleSubmit(values),
  });

  const handleNavigateSignUp = () => {
    navigate(paths.signup);
  };

  return { formik, loading, handleNavigateSignUp };
};

export default useLoginContainer;
