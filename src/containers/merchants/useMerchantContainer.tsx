import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import { useFormik } from "formik";
import MerchantApi from "../../apis/merchant";
import paths from "../../routes/paths";
import { useAlert } from "../../contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import merchantSchema from "../../validations/merchant";

const useMerchantContainer = (merchantId?: any) => {
  const [pageLoading, setPageLoading] = useState(false);
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    if (merchantId) {
      setPageLoading(true);
      callApi(
        MerchantApi.getOne(merchantId),
        (response: any) => {
          setInitialValues({
            name: response.name,
            email: response.email,
            phoneNumber: response.phoneNumber,
            password: "",
            confirmPassword: "",
            image: "",
          });
          setImage(response.image);
          setPageLoading(false);
        },
        () => {
          setPageLoading(false);
        }
      );
    }
  }, [merchantId]);

  const handleAdd = (values: any) => {
    callApi(MerchantApi.add(values), (response: any) => {
      setSuccessMessage("Merchant has been added successfully.");
      navigate(paths.merchants);
    });
  };

  const handleEdit = (values: any) => {
    callApi(MerchantApi.edit(values), (response: any) => {
      setSuccessMessage("Merchant has been updated successfully.");
      navigate(paths.merchants);
    });
  };

  const handleSubmit = (values: any) =>
    merchantId ? handleEdit(values) : handleAdd(values);

  const formik: any = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: () => merchantSchema(merchantId),
    onSubmit: (values: any) => handleSubmit(values),
  });

  return { formik, loading, pageLoading, image, setImage };
};

export default useMerchantContainer;
