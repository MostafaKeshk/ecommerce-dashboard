import { Route, Routes as RouterRoutes } from "react-router-dom";

import Login from "../pages/Login";

import paths from "./paths";
import Layout from "../components/Layout";

import Signup from "../pages/Signup";
import Overview from "../pages/Overview";
import Products from "../pages//Products";
import AddProduct from "../pages//Products/Add";
import EditProduct from "../pages//Products/Edit";
import ViewProduct from "../pages//Products/View";
import Customers from "../pages/Customers";
import ViewMerchantCustomer from "../pages/Customers/View";
import CustomerHistory from "../pages/Customers/History";
import Settings from "../pages//Settings";
import Orders from "../pages//Orders/Index";
import ViewOrder from "../pages//Orders/View";
import { RedirectToHome, RedirectToNotFound } from "./utils";
import Home from "../pages/Home";
import Merchants from "../pages/Merchants";
import AddMerchant from "../pages/Merchants/Add";
import EditMerchant from "../pages/Merchants/Edit";
import AllCustomers from "../pages/AllCustomers";
import ViewCustomer from "../pages/AllCustomers/View";
import AddCustomer from "../pages/AllCustomers/Add";
import EditCustomer from "../pages/AllCustomers/Edit";

const Navigation = () => {
  return (
    <RouterRoutes>
      <Route
        path={paths.login}
        element={<RedirectToHome Component={Login} />}
      />

      <Route
        path={paths.signup}
        element={<RedirectToHome Component={Signup} />}
      />

      <Route path="/" element={<RedirectToHome Component={Login} />} />

      <Route element={<Layout />}>
        <Route path={paths.dashboard} element={<Home />} />
        <Route path={paths.merchants} element={<Merchants />} />
        <Route path={paths.addMerchant} element={<AddMerchant />} />
        <Route path={paths.editMerchant} element={<EditMerchant />} />

        <Route path={paths.allCustomers} element={<AllCustomers />} />
        <Route path={paths.customer} element={<ViewCustomer />} />
        <Route path={paths.addCustomer} element={<AddCustomer />} />
        <Route path={paths.editCustomer} element={<EditCustomer />} />

        <Route path={paths.overview} element={<Overview />} />
        <Route path={paths.products} element={<Products />} />
        <Route path={paths.addProduct} element={<AddProduct />} />
        <Route path={paths.editProduct} element={<EditProduct />} />
        <Route path={paths.product} element={<ViewProduct />} />

        <Route path={paths.customers} element={<Customers />} />
        <Route
          path={paths.merchantCustomer}
          element={<ViewMerchantCustomer />}
        />
        <Route
          path={paths.merchantCustomerHistory}
          element={<CustomerHistory />}
        />

        <Route path={paths.orders} element={<Orders />} />

        <Route path={paths.order} element={<ViewOrder />} />

        <Route path={paths.settings} element={<Settings />} />
      </Route>

      <Route path="*" element={<RedirectToNotFound />} />
    </RouterRoutes>
  );
};
export default Navigation;
