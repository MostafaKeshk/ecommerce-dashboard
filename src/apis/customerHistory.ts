import defaultImage from "../utils/defaultImage";

class CustomerHistoryApi {
  static get(
    searchValue: string,
    pageSize: number,
    pageNumber: number,
    params: { merchantId: string; status: string }
  ) {
    const response = {
      rows: [
        {
          id: "1",
          name: "Blue Jacket",
          price: 25,
          date: `${new Date()}`,
          status: "pending",
          image: defaultImage,
          qty: 3,
        },
        {
          id: "2",
          name: "Blue Jacket",
          price: 25,
          date: `${new Date()}`,
          status: "processing",
          image: defaultImage,
          qty: 3,
        },
        {
          id: "3",
          name: "Blue Jacket",
          price: 25,
          date: `${new Date()}`,
          status: "shipped",
          image: defaultImage,
          qty: 3,
        },
        {
          id: "4",
          name: "Blue Jacket",
          price: 25,
          date: `${new Date()}`,
          status: "outForDelivery",
          image: defaultImage,
          qty: 3,
        },
        {
          id: "5",
          name: "Blue Jacket",
          price: 25,
          date: `${new Date()}`,
          status: "delivered",
          image: defaultImage,
          qty: 3,
        },
      ],
      count: 15,
    };

    if (params.status === "all") {
      return response;
    } else {
      const newRows = response.rows.filter(
        (x: any) => x.status === params.status
      );
      response.rows = newRows;
      response.count = newRows.length;

      return response;
    }
  }
}

export default CustomerHistoryApi;
