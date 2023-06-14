import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavLink from "./NavLink";
import paths from "../../routes/paths";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useLocation, useParams } from "react-router-dom";
import { isAdmin } from "../../routes/utils";
import { useAuth } from "../../contexts/AuthContext";

type IProps = {
  handleLogout: any;
};

const DrawerList: React.FC<IProps> = ({ handleLogout }) => {
  const location = useLocation();
  const classes = {
    toolbar: { px: `14px!important` },
    mallIcon: { color: "primary.main", fontSize: 30 },
  };
  const { user } = useAuth();
  const { merchantId } = useParams();

  return (
    <div>
      <Toolbar sx={classes.toolbar}>
        <LocalMallIcon sx={{ color: "primary.main", fontSize: 30 }} />
        <Typography sx={{ pl: 1, fontWeight: "bold" }} color="primary">
          ShopHub
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <NavLink
          text="Home"
          Icon={HomeIcon}
          route={paths.dashboard}
          active={location.pathname === paths.dashboard}
          show={isAdmin(user)}
        />
        <NavLink
          text="Merchants"
          Icon={StoreIcon}
          route={paths.merchants}
          active={location.pathname.includes(paths.merchants)}
          show={isAdmin(user)}
        />
        <NavLink
          text="All Customers"
          Icon={PeopleOutlineIcon}
          route={paths.allCustomers}
          active={location.pathname.includes(paths.allCustomers)}
          show={isAdmin(user)}
        />
        <NavLink
          text="Overview"
          Icon={BarChartIcon}
          route={paths.getOverview(merchantId)}
          active={location.pathname === paths.getOverview(merchantId)}
          show={!!merchantId}
        />
        <NavLink
          text="Products"
          Icon={ShoppingBasketIcon}
          route={paths.getProducts(merchantId)}
          active={location.pathname.includes(paths.getProducts(merchantId))}
          show={!!merchantId}
        />
        <NavLink
          text="Customers"
          Icon={PeopleIcon}
          route={paths.getCustomers(merchantId)}
          active={location.pathname.includes(paths.getCustomers(merchantId))}
          show={!!merchantId}
        />
        <NavLink
          text="Orders"
          Icon={ShoppingCartIcon}
          route={paths.getOrders(merchantId)}
          badge={2}
          active={location.pathname.includes(paths.getOrders(merchantId))}
          show={!!merchantId}
        />
        <NavLink
          text="Settings"
          Icon={SettingsIcon}
          route={paths.getSettings(merchantId)}
          active={location.pathname === paths.getSettings(merchantId)}
          show={!!merchantId}
        />
      </List>
      <Divider />
      <Box sx={{ mx: 1, mt: 1 }}>
        <Button
          sx={{
            backgroundColor: "error.main",
            color: "common.white",
            width: "100%",
            ":hover": {
              backgroundColor: "error.main",
              color: "common.white",
            },
          }}
          variant="contained"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default DrawerList;
