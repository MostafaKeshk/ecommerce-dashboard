import defaultImage from "../utils/defaultImage";

class MerchantApi {
  static get(searchValue: string, pageSize: number, pageNumber: number) {
    const response = {
      rows: [
        {
          id: "1",
          type: "admin",
          name: "Mostafa Admin",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
        },
        {
          id: "2",
          type: "admin",
          name: "Mostafa Admin",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
        },
        {
          id: "3",
          type: "admin",
          name: "Mostafa Admin",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
        },
        {
          id: "4",
          type: "admin",
          name: "Mostafa Admin",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
        },
        {
          id: "5",
          type: "admin",
          name: "Mostafa Admin",
          image: defaultImage,
          phoneNumber: "+201062489756",
          email: "user@user.com",
        },
      ],
      count: 15,
    };

    return response;
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
      type: "admin",
      name: "Mostafa Admin",
      image: defaultImage,
      phoneNumber: "+201062489756",
      email: "user@user.com",
    };
  }
}

export default MerchantApi;
