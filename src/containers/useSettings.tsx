import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import settingsApi from "../apis/settings";
import { useFormik } from "formik";
import useCallApi from "../hooks/useCallApi";
import settingsSchema from "../validations/settings";
import { useAlert } from "../contexts/AlertContext";

const useSettings = () => {
  const [image, setImage] = useState("");
  const { user, setUser } = useAuth();
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    phoneNumber: "",
  });

  useEffect(() => {
    setInitialValues({
      name: user.name,
      email: user.email,
      password: "",
      confirmPassword: "",
      image: "",
      phoneNumber: user.phoneNumber,
    });

    setImage(user.image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (values: any) => {
    const body: any = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      image: values.image,
      phoneNumber: values.phoneNumber,
    };

    callApi(settingsApi.update(body), (response: any) => {
      const newUser = {
        ...user,
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
      };
      if (body.image) {
        let reader = new FileReader();

        reader.readAsDataURL(body.image);
        reader.onloadend = () => (newUser.image = [reader.result]);
      }
      setUser(newUser);
      setSuccessMessage("Your account has been updated successfully.");
    });
  };

  const formik: any = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: settingsSchema,
    onSubmit: (values: any) => handleSubmit(values),
  });

  return { formik, loading, image, setImage };
};

export default useSettings;
