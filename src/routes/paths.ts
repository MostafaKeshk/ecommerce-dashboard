export default class paths {
  static login = "/login";
  static signup = "/signup";

  static dashboard = "/dashboard";

  static allCustomers = `${this.dashboard}/customers`;

  static customer = `${this.allCustomers}/:customerId`;

  static getCustomer = (customerId: any) =>
    `${this.allCustomers}/${customerId}`;

  static addCustomer = `${this.allCustomers}/add`;

  static editCustomer = `${this.customer}/edit`;

  static getEditCustomer = (customerId: any) =>
    `${this.getCustomer(customerId)}/edit`;

  // static customerHistory = `${this.customer}/history`;
  // static getCustomerHistory = (customerId: any) =>
  //   `${this.getCustomer(customerId)}/history`;

  static merchants = `${this.dashboard}/merchants`;

  static addMerchant = `${this.merchants}/add`;

  static merchant = `${this.merchants}/:merchantId`;

  static getMerchant = (merchantId: any) => `${this.merchants}/${merchantId}`;

  static editMerchant = `${this.merchants}/:merchantId/edit`;

  static getEditMerchant = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/edit`;

  static overview = `${this.merchant}/overview`;

  static getOverview = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/overview`;

  static products = `${this.merchant}/products`;
  static getProducts = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/products`;

  static addProduct = `${this.merchant}/products/add`;
  static getAddProduct = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/products/add`;

  static product = `${this.products}/:productId`;
  static getProduct = (merchantId: any, productId: any) =>
    `${this.getProducts(merchantId)}/${productId}`;

  static editProduct = `${this.product}/edit`;
  static getEditProduct = (merchantId: any, productId: any) =>
    `${this.getProduct(merchantId, productId)}/edit`;

  static customers = `${this.merchant}/customers`;
  static getCustomers = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/customers`;

  static merchantCustomer = `${this.merchant}/customers/:merchantCustomerId`;
  static getMerchantCustomer = (merchantId: any, merchantCustomerId: any) =>
    `${this.getCustomers(merchantId)}/${merchantCustomerId}`;

  static merchantCustomerHistory = `${this.merchantCustomer}/history`;
  static getMerchantCustomerHistory = (
    merchantId: any,
    merchantCustomerId: any
  ) => `${this.getMerchantCustomer(merchantId, merchantCustomerId)}/history`;

  static orders = `${this.merchant}/orders`;

  static getOrders = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/orders`;

  static order = `${this.orders}/:orderId`;

  static getOrder = (merchantId: any, orderId: any) =>
    `${this.getOrders(merchantId)}/${orderId}`;

  static settings = `${this.merchant}/settings`;
  static getSettings = (merchantId: any) =>
    `${this.getMerchant(merchantId)}/settings`;
}
