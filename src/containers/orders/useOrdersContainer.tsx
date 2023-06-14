import { useState } from "react";
import OrderApi from "../../apis/order";
import { useAlert } from "../../contexts/AlertContext";
import useCallApi from "../../hooks/useCallApi";
import useTable from "../../hooks/useTable";
import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const useOrdersContainer = (merchantId: any) => {
  const navigate = useNavigate();
  const { callApi } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const [statusFilter, setStatusFilter] = useState("all");

  const handleFilterStatus = (status: any) => {
    setStatusFilter(status);
  };

  const {
    data: orders,
    setData: setOrders,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
  } = useTable({
    API: OrderApi,
    name: "order",
    params: { merchantId, status: statusFilter },
  });

  const tableHeads = [
    { label: "Order ID", align: "left" },
    { label: "Date", align: "left" },
    { label: "Price", align: "left" },
    { label: "Status", align: "center" },
    { label: "Actions", align: "center" },
  ];

  const handleViewOrder = (id: any) => navigate(paths.getOrder(merchantId, id));

  const handleOrderStatus = (value: any, orderId: any, setLoading: any) => {
    setLoading(true);
    const newOrders = [...orders];
    const index = newOrders.findIndex((order: any) => order.id === orderId);

    callApi(
      OrderApi.changeStatus(orderId, value),
      (response: any) => {
        newOrders[index].status = value;
        setOrders(newOrders);
        setSuccessMessage(`Order ${orderId}'s status has been updated.`);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  };

  return {
    tableHeads,
    handleViewOrder,
    orders,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
    handleOrderStatus,

    handleFilterStatus,
    statusFilter,
  };
};

export default useOrdersContainer;
