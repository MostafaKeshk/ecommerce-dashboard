import defaultImage from "../utils/defaultImage";

class OrderApi {
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
          price: 25,
          date: `${new Date()}`,
          status: "pending",
        },
        {
          id: "2",
          price: 25,
          date: `${new Date()}`,
          status: "processing",
        },
        {
          id: "3",
          price: 25,
          date: `${new Date()}`,
          status: "shipped",
        },
        {
          id: "4",
          price: 25,
          date: `${new Date()}`,
          status: "outForDelivery",
        },
        {
          id: "5",
          price: 25,
          date: `${new Date()}`,
          status: "delivered",
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
  static changeStatus(id: any, status: string) {
    return true;
  }

  static getOne(id: any) {
    return {
      orderDetails: {
        total: 75,
        id: "5",
        status: "shipped",
        date: new Date(),
        products: [
          {
            id: "21",
            name: "Blue Jacket",
            price: 25,
            image: defaultImage,
            qty: 2,
          },
          {
            id: "221",
            name: "Red Jacket",
            price: 25,
            image: defaultImage,
            qty: 1,
          },
        ],
      },
      customerDetails: {
        id: "dsa312",
        name: "Mostafa Customer",
        image: defaultImage,
        phoneNumber: "+201062489756",
        email: "user@user.com",
        lat: 32,
        lng: 24,
        address: "Egypt, Giza",
      },
    };
  }
}

export default OrderApi;
