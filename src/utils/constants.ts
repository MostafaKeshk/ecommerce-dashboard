export const userTypes = {
  shop: "shop",
  superAdmin: "superAdmin",
};

export const categories = {
  tShirt: "tShirts",
  jeans: "jeans",
};

export const categoriesList = [
  { label: "T-Shirt", value: categories.tShirt },
  { label: "Jeans", value: categories.jeans },
];

export const MultiSelect = "MultiSelect";

export const orderStatus: any = {
  pending: "Pending",
  processing: "Processing",
  shipped: "Shipped",
  outForDelivery: "Out for Delivery",
  delivered: "Delivered",
};

export const orderStatusList = [
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Out for Delivery", value: "outForDelivery" },
  { label: "Delivered", value: "delivered" },
];
