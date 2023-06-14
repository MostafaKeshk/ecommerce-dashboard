import defaultImage from "../utils/defaultImage";

class SignupApi {
  static signup(body: any) {
    const admin = body.email === "super_admin@gmail.com";
    const response = {
      token: "some token lol",
      user: {
        id: "23",
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

export default SignupApi;
