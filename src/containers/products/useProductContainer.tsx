import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import { useFormik } from "formik";
import ProductApi from "../../apis/product";
import paths from "../../routes/paths";
import { useAlert } from "../../contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import productSchema from "../../validations/product";

const useProductContainer = (merchantId: any, productId?: any) => {
  const [pageLoading, setPageLoading] = useState(false);
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    name: "",
    price: "",
    qty: "",
    image: "",
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    if (productId) {
      setPageLoading(true);
      callApi(
        ProductApi.getOne(productId),
        (response: any) => {
          setInitialValues({
            name: response.name,
            price: response.price,
            qty: response.price,
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
  }, [productId]);

  const handleAdd = (values: any) => {
    callApi(ProductApi.add(values), (response: any) => {
      setSuccessMessage("Product has been added successfully.");
      navigate(paths.getProduct(merchantId, response.id));
    });
  };

  const handleEdit = (values: any) => {
    callApi(ProductApi.edit(values), (response: any) => {
      setSuccessMessage("Product has been updated successfully.");
      navigate(paths.getProduct(merchantId, response.id));
    });
  };

  const handleSubmit = (values: any) =>
    productId ? handleEdit(values) : handleAdd(values);

  const formik: any = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: () => productSchema(productId),
    onSubmit: (values: any) => handleSubmit(values),
  });

  return { formik, loading, pageLoading, image, setImage };
};

export default useProductContainer;
