import { useEffect, useState } from "react";
import useCallApi from "../../hooks/useCallApi";
import CustomerApi from "../../apis/customer";

const useViewProductContainer = (merchantCustomerId: any) => {
  const { callApi, loading } = useCallApi();

  const [data, setData] = useState({
    name: "",
    email: "",
    image: "",
    phoneNumber: "",
    lat: "",
    lng: "",
    address: "",
  });

  useEffect(() => {
    if (merchantCustomerId) {
      callApi(CustomerApi.getOne(merchantCustomerId), (response: any) => {
        setData({
          name: response.name,
          email: response.email,
          image: response.image,
          phoneNumber: response.phoneNumber,
          lat: response.lat,
          lng: response.lng,
          address: response.address,
        });
      });
    }
  }, [merchantCustomerId]);

  return {
    data,
    loading,
  };
};

export default useViewProductContainer;
