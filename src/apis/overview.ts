import defaultImage from "../utils/defaultImage";

class DashboardOverviewApi {
  static get(id: any) {
    const response = {
      ordersChartData: [
        100, 80, 120, 130, 170, 200, 50, 120, 140, 100, 110, 120,
      ],
      revenueChartData: [
        150, 120, 170, 160, 220, 250, 100, 170, 180, 240, 130, 140,
      ],
      categoryChartData: [100, 150],
      overall: {
        totalSales: {
          info: "$100,000",
          percent: {
            type: "positive",
            value: "20%",
          },
          weekValue: "+3.5k",
        },
        visitors: {
          info: "1,000",
          percent: {
            type: "positive",
            value: "10%",
          },
          weekValue: "+100",
        },
        totalOrders: {
          info: "10,000",
          percent: {
            type: "positive",
            value: "30%",
          },
          weekValue: "+1,000",
        },
        refunded: {
          info: "100",
          percent: {
            type: "negative",
            value: "5%",
          },
          weekValue: "+50",
        },
      },
    };

    return response;
  }

  static getProducts(id: any, date: any) {
    const response = {
      rows:
        date === "week"
          ? [
              {
                id: "1",
                name: "Blue Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "2",
                name: "Black Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "3",
                name: "Blue Jeans",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "4",
                name: "Blue Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "5",
                name: "Blue Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
            ]
          : date === "month"
          ? [
              {
                id: "11",
                name: "Green Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "22",
                name: "Black Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "33",
                name: "Yellow Jeans",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "44",
                name: "Blue Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "55",
                name: "Red Jacket",
                price: "5$",
                sold: 3000,
                qty: 10,
                sales: "$15,000",
                image: defaultImage,
              },
            ]
          : [
              {
                id: "111",
                name: "Blue Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "222",
                name: "Black Jacket",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "333",
                name: "Blue Jeans",
                price: "25$",
                sold: 3000,
                qty: 10,
                sales: "$75,000",
                image: defaultImage,
              },
              {
                id: "444",
                name: "Jacket",
                price: "20$",
                sold: 3000,
                qty: 10,
                sales: "$60,000",
                image: defaultImage,
              },
              {
                id: "555",
                name: "Blue Jacket",
                price: "25$",
                sold: 2000,
                sales: "$50,000",
                image: defaultImage,
              },
            ],
      count: 5,
    };

    return response;
  }
}

export default DashboardOverviewApi;
