import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import { useFormik } from "formik";
import paths from "../../routes/paths";
import { useAlert } from "../../contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import customerSchema from "../../validations/customer";
import CustomerApi from "../../apis/customer";

const useCustomerContainer = (customerId?: any) => {
  const [pageLoading, setPageLoading] = useState(false);
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const navigate = useNavigate();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(5);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
    lng: 0,
    lat: 0,
    address: "",
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    if (customerId) {
      setPageLoading(true);
      callApi(
        CustomerApi.getOne(customerId),
        (response: any) => {
          setInitialValues({
            name: response.name,
            email: response.email,
            phoneNumber: response.phoneNumber,
            lng: response.lng,
            lat: response.lat,
            address: response.address,
            password: "",
            confirmPassword: "",
            image: "",
          });
          setImage(response.image);
          setCenter({ lat: response.lat, lng: response.lng });

          setPageLoading(false);
        },
        () => {
          setPageLoading(false);
        }
      );
    }
  }, [customerId]);

  const handleMarker = (e: any) => {
    formik.setFieldValue("lat", e.latLng.lat());
    formik.setFieldValue("lng", e.latLng.lng());
  };

  const handleSearch = (lat: any, lng: any, address: any) => {
    formik.setFieldValue("lat", lat);
    formik.setFieldValue("lng", lng);
    formik.setFieldValue("address", address);
  };

  const handleAdd = (values: any) => {
    callApi(CustomerApi.add(values), (response: any) => {
      setSuccessMessage("Customer has been added successfully.");
      navigate(paths.getCustomer(customerId));
    });
  };

  const handleEdit = (values: any) => {
    callApi(CustomerApi.edit(values), (response: any) => {
      setSuccessMessage("Customer has been updated successfully.");
      navigate(paths.getCustomer(customerId));
    });
  };

  const handleSubmit = (values: any) =>
    customerId ? handleEdit(values) : handleAdd(values);

  const formik: any = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: () => customerSchema(customerId),
    onSubmit: (values: any) => handleSubmit(values),
  });

  return {
    formik,
    loading,
    pageLoading,
    image,
    setImage,
    handleMarker,
    center,
    setCenter,
    zoom,
    setZoom,
    handleSearch,
  };
};

export default useCustomerContainer;
