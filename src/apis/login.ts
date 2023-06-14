import defaultImage from "../utils/defaultImage";

class LoginApi {
  static login(body: any) {
    const admin = body.email === "super_admin@gmail.com";

    const response = {
      token: "some token lol",
      user: {
        id: admin ? "adminId" : "merchantId",
        type: admin ? "admin" : "merchant",
        name: admin ? "Admin" : "Mostafa Merchant",
        image: defaultImage,
        phoneNumber: "+201062489756",
        email: body.email,
      },
    };

    return response;
  }
}

export default LoginApi;
