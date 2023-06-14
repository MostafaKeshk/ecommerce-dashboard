import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const useAllCustomersContainer = () => {
  const navigate = useNavigate();

  const tableHeads = [
    { label: "Customer ID", align: "left" },
    { label: "Customer name", align: "left" },
    { label: "Phone Number", align: "left" },
    { label: "Email", align: "left" },
    { label: "Address", align: "left" },
    { label: "Actions", align: "center" },
  ];

  const handleView = (id: any) => navigate(paths.getCustomer(id));

  const handleEditCustomer = (id: any) => navigate(paths.getEditCustomer(id));

  const handleAddCustomer = () => navigate(paths.addCustomer);

  // const handleHistory = (id: any) => navigate(paths.getCustomerHistory(id));

  return {
    tableHeads,
    handleView,
    // handleHistory,
    handleEditCustomer,
    handleAddCustomer,
  };
};

export default useAllCustomersContainer;
