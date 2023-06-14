import { useEffect, useState } from "react";
import useCallApi from "../hooks/useCallApi";
import DashboardOverviewApi from "../apis/overview";
import { SelectChangeEvent } from "@mui/material";

type IOverall = {
  info: string;
  percent: {
    type: "positive" | "negative";
    value: string;
  };
  weekValue: string;
};

type IData = {
  ordersChartData: any[];
  revenueChartData: any[];
  categoryChartData: any[];
  overall: {
    totalSales: IOverall;
    visitors: IOverall;
    totalOrders: IOverall;
    refunded: IOverall;
  };
};

const useOverviewContainer = (merchantId: any) => {
  const { callApi } = useCallApi();
  const [date, setDate] = useState("week");
  const [productRows, setProductRows] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [productLoading, setProductLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);

  const handleDate = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };

  const [data, setData] = useState<IData>({
    ordersChartData: [],
    revenueChartData: [],
    categoryChartData: [],
    overall: {
      totalSales: {
        info: "",
        percent: {
          type: "positive",
          value: "",
        },
        weekValue: "",
      },
      visitors: {
        info: "",
        percent: {
          type: "positive",
          value: "",
        },
        weekValue: "",
      },
      totalOrders: {
        info: "",
        percent: {
          type: "positive",
          value: "",
        },
        weekValue: "",
      },
      refunded: {
        info: "",
        percent: {
          type: "positive",
          value: "",
        },
        weekValue: "",
      },
    },
  });

  const tableHeads = [
    { label: "Product ID", align: "left" },
    { label: "Product name", align: "left" },
    { label: "Price", align: "left" },
    { label: "Sold", align: "left" },
    { label: "QTY", align: "left" },
    { label: "Sales", align: "right" },
  ];

  useEffect(() => {
    setDataLoading(true);
    callApi(
      DashboardOverviewApi.get(merchantId),
      (response: any) => {
        setData(response);
        setDataLoading(false);
      },
      () => {
        setDataLoading(false);
      }
    );
  }, [merchantId]);

  useEffect(() => {
    setProductLoading(true);
    callApi(
      DashboardOverviewApi.getProducts(merchantId, date),
      (response: any) => {
        setProductRows(response.rows);
        setProductCount(response.count);
        setProductLoading(false);
      },
      () => {
        setProductLoading(false);
      }
    );
  }, [merchantId, date]);

  return {
    data,
    dataLoading,
    tableHeads,
    date,
    handleDate,

    productRows,
    productCount,
    productLoading,
  };
};

export default useOverviewContainer;
