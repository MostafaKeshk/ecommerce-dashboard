import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import OrderApi from "../../apis/order";
import { useAlert } from "../../contexts/AlertContext";

const useViewOrderContainer = (orderId: any) => {
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();
  const taxRate = 0.07;
  const tableHeads = [
    { label: "Product ID", align: "left" },
    { label: "Product name", align: "left" },
    { label: "Price", align: "right" },
    { label: "QTY", align: "right" },
    { label: "Sum", align: "right" },
  ];

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceSubtotal: 0,
    invoiceTaxes: 0,
    invoiceTotal: 0,
  });

  const [orderDetails, setOrderDetails] = useState({
    total: "",
    status: "",
    date: new Date(),
  });
  const [products, setProducts] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({
    id: "",
    name: "",
    image: "",
    phoneNumber: "",
    email: "",
    lat: 0,
    lng: 0,
    address: "",
  });

  useEffect(() => {
    if (orderId) {
      callApi(OrderApi.getOne(orderId), (response: any) => {
        setOrderDetails({
          total: response.orderDetails.total,
          status: response.orderDetails.status,
          date: response.orderDetails.date,
        });
        setCustomerDetails({
          id: response.customerDetails.id,
          name: response.customerDetails.name,
          image: response.customerDetails.image,
          phoneNumber: response.customerDetails.phoneNumber,
          email: response.customerDetails.email,
          lat: response.customerDetails.lat,
          lng: response.customerDetails.lng,
          address: response.customerDetails.address,
        });
        const responseProducts = response.orderDetails.products;

        const invoiceSubtotal = responseProducts
          .map(({ qty, price }: any) => price * qty)
          .reduce((sum: any, i: any) => sum + i, 0);

        const invoiceTaxes = taxRate * invoiceSubtotal;

        const invoiceTotal = invoiceTaxes + invoiceSubtotal;

        setProducts(response.orderDetails.products);
        setInvoiceDetails({
          invoiceSubtotal,
          invoiceTaxes,
          invoiceTotal,
        });
      });
    }
  }, [orderId]);

  const handleOrderStatus = (value: any, orderId: any, setLoading: any) => {
    setLoading(true);

    callApi(
      OrderApi.changeStatus(orderId, value),
      (response: any) => {
        setOrderDetails({ ...orderDetails, status: value });
        setSuccessMessage(`Order ${orderId}'s status has been updated.`);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  };

  return {
    customerDetails,
    orderDetails,
    loading,

    taxRate,
    tableHeads,
    products,
    invoiceDetails,
    handleOrderStatus,
  };
};

export default useViewOrderContainer;
