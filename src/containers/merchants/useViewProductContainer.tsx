import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import ProductApi from "../../apis/product";
import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../contexts/AlertContext";

const useViewProductContainer = (merchantId: any, productId: any) => {
  const { callApi, loading } = useCallApi();
  const navigate = useNavigate();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { setSuccessMessage } = useAlert();

  const [pageLoading, setPageLoading] = useState(true);

  const [data, setData] = useState({
    name: "",
    price: "",
    qty: "",
    image: "",
  });

  useEffect(() => {
    if (productId) {
      callApi(
        ProductApi.getOne(productId),
        (response: any) => {
          setData({
            name: response.name,
            price: response.price,
            qty: response.qty,
            image: response.image,
          });
          setPageLoading(false);
        },
        () => {
          setPageLoading(false);
        }
      );
    }
  }, [productId]);

  const handleEdit = () =>
    navigate(paths.getEditProduct(merchantId, productId));

  const handleDelete = () => {
    callApi(ProductApi.delete([productId]), () => {
      setOpenDeleteDialog(false);
      setSuccessMessage(`(${data?.name}) has been deleted successfully.`);
      navigate(paths.getProducts(merchantId));
    });
  };

  return {
    data,
    deleteLoading: loading,
    handleEdit,
    handleDelete,
    openDeleteDialog,
    setOpenDeleteDialog,
    pageLoading,
  };
};

export default useViewProductContainer;
