import ProductApi from "../../apis/product";
import useTable from "../../hooks/useTable";
import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import useCallApi from "../../hooks/useCallApi";
import { useAlert } from "../../contexts/AlertContext";

const useProductsContainer = (merchantId: any) => {
  const navigate = useNavigate();
  const { callApi } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const {
    data: products,
    searchLoading,
    handleSearch,
    handleChangePage,
    handleCheckAll,
    searchValue,
    page,
    rowsPerPage,
    loading: deleteLoading,
    count,
    setData: setProducts,
    selectedData: selectedProducts,
    handleOpenDelete,
    handleCheckRow,
    handleDelete,
    openDeleteDialog,
    setOpenDeleteDialog,
    selectedItem,
  } = useTable({
    API: ProductApi,
    name: "product",
    params: { merchantId },
  });

  const tableHeads = [
    { label: "Product ID", align: "left" },
    { label: "Product name", align: "left" },
    { label: "Price", align: "left" },
    { label: "Sold", align: "left" },
    { label: "QTY", align: "left" },
    { label: "Sales", align: "right" },
    { label: "Visibility", align: "center" },
    { label: "Actions", align: "center" },
  ];

  const handleVisibility = (row: any, setLoading: any) => {
    setLoading(true);
    const newProducts = [...products];
    const index = newProducts.findIndex(
      (product: any) => product.id === row.id
    );
    const newStatus = !newProducts[index].visibility;

    callApi(
      ProductApi.visibility(row.id, newStatus),
      (response: any) => {
        newProducts[index].visibility = !newProducts[index].visibility;
        setProducts(newProducts);
        setSuccessMessage(`${row.name}'s visibility has been updated.`);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  };

  const handleViewProduct = (id: any) =>
    navigate(paths.getProduct(merchantId, id));

  const handleEditProduct = (id: any) =>
    navigate(paths.getEditProduct(merchantId, id));

  const handleAddProduct = () => navigate(paths.getAddProduct(merchantId));

  return {
    products,
    count,
    tableHeads,
    handleOpenDelete,
    handleVisibility,
    handleViewProduct,
    handleEditProduct,
    selectedProducts,
    handleCheckRow,
    handleDelete,
    deleteLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
    handleCheckAll,
    openDeleteDialog,
    setOpenDeleteDialog,
    selectedItem,
    handleAddProduct,
  };
};

export default useProductsContainer;
