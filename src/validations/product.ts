import * as Yup from "yup";

const schema = (id?: any) =>
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required")
      .positive("Price must be greater than 0"),
    qty: Yup.number()
      .typeError("QTY must be a number")
      .required("QTY is required"),
    image: Yup.mixed().when("id", {
      is: id,
      then: Yup.mixed().required("Image is required"),
      otherwise: Yup.mixed(),
    }),
  });

export default schema;
