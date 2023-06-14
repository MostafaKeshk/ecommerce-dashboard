import defaultImage from "../utils/defaultImage";

class ProductApi {
  static get(
    searchValue: string,
    pageSize: number,
    pageNumber: number,
    params: { merchantId: string }
  ) {
    const response = {
      rows: [
        {
          id: "1",
          name: "Blue Jacket",
          price: "25$",
          sold: 3000,
          qty: 1000,
          sales: "$75,000",
          visibility: true,
          image: defaultImage,
        },
        {
          id: "2",
          name: "Black Jacket",
          price: "25$",
          sold: 3000,
          qty: 1000,
          sales: "$75,000",
          visibility: true,
          image: defaultImage,
        },
        {
          id: "3",
          name: "Blue Jeans",
          price: "25$",
          sold: 3000,
          qty: 1000,
          sales: "$75,000",
          visibility: true,
          image: defaultImage,
        },
        {
          id: "4",
          name: "Blue Jacket",
          price: "25$",
          sold: 3000,
          qty: 1000,
          sales: "$75,000",
          visibility: true,
          image: defaultImage,
        },
        {
          id: "5",
          name: "Blue Jacket",
          price: "25$",
          sold: 3000,
          qty: 1000,
          sales: "$75,000",
          visibility: true,
          image: defaultImage,
        },
      ],
      count: 15,
    };

    return response;
  }
  static visibility(id: string, status: boolean) {
    return true;
  }
  static delete(ids: string[]) {
    return true;
  }
  static add(body: any) {
    return { id: "1" };
  }
  static edit(body: any) {
    return { id: "1" };
  }
  static getOne(id: any) {
    return {
      id: "5",
      name: "Blue Jacket",
      price: 25,
      sold: 3000,
      sales: "$75,000",
      visibility: true,
      qty: 1000,
      image: defaultImage,
    };
  }
}

export default ProductApi;
