import defaultImage from "../utils/defaultImage";

class CustomerApi {
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
          type: "customer",
          name: "Mostafa Customer",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
          lat: 32,
          lng: 24,
          address: "Egypt, Giza",
        },
        {
          id: "2",
          type: "customer",
          name: "Mostafa Customer",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
          lat: 32,
          lng: 24,
          address: "Egypt, Giza",
        },
        {
          id: "3",
          type: "customer",
          name: "Mostafa Customer",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
          lat: 32,
          lng: 24,
          address: "Egypt, Giza",
        },
        {
          id: "4",
          type: "customer",
          name: "Mostafa Customer",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
          lat: 32,
          lng: 24,
          address: "Egypt, Giza",
        },
        {
          id: "5",
          type: "customer",
          name: "Mostafa Customer",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
          lat: 32,
          lng: 24,
          address: "Egypt, Giza",
        },
      ],
      count: 15,
    };

    return response;
  }

  static getOne(id: any) {
    return {
      id: "5",
      type: "customer",
      name: "Mostafa Customer",
      image: defaultImage,
      phoneNumber: "+201062489756",
      email: "user@user.com",
      lat: 32,
      lng: 24,
      address: "Egypt, Giza",
    };
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
}

export default CustomerApi;
