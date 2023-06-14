import { useEffect, useState } from "react";
import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import CustomerApi from "../../apis/customer";
import useCallApi from "../../hooks/useCallApi";

const useCustomerHistoryContainer = (
  merchantId: any,
  merchantCustomerId: any
) => {
  const navigate = useNavigate();
  const { callApi, loading } = useCallApi();
  const [customer, setCustomer] = useState({
    name: "",
  });
  const [statusFilter, setStatusFilter] = useState("all");

  const handleFilterStatus = (status: any) => {
    setStatusFilter(status);
  };

  const tableHeads = [
    { label: "Order ID", align: "left" },
    { label: "Date", align: "left" },
    { label: "Price", align: "left" },
    { label: "Status", align: "center" },
    { label: "Actions", align: "center" },
  ];

  const handleViewOrder = (id: any) => navigate(paths.getOrder(merchantId, id));

  const handleViewCustomer = (id: any) =>
    navigate(paths.getMerchantCustomer(merchantId, id));

  useEffect(() => {
    if (merchantCustomerId) {
      callApi(CustomerApi.getOne(merchantCustomerId), (response: any) => {
        setCustomer({ name: response.name });
      });
    }
  }, [merchantCustomerId]);

  return {
    tableHeads,
    handleViewOrder,
    handleViewCustomer,
    customer,
    loading,
    statusFilter,
    handleFilterStatus,
  };
};

export default useCustomerHistoryContainer;
