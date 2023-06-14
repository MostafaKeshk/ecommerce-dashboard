import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const useCustomersContainer = (merchantId: any) => {
  const navigate = useNavigate();

  const tableHeads = [
    { label: "Customer ID", align: "left" },
    { label: "Customer name", align: "left" },
    { label: "Phone Number", align: "left" },
    { label: "Email", align: "left" },
    { label: "Address", align: "left" },
    { label: "Actions", align: "center" },
  ];

  const handleView = (id: any) =>
    navigate(paths.getMerchantCustomer(merchantId, id));

  const handleHistory = (id: any) =>
    navigate(paths.getMerchantCustomerHistory(merchantId, id));

  return {
    tableHeads,
    handleView,
    handleHistory,
  };
};

export default useCustomersContainer;
