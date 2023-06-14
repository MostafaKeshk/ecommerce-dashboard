import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Line from "../components/pages/overview/Line";
import useOverviewContainer from "../containers/useOverviewContainer";
import Loading from "../components/general/Loading";
import Doughnut from "../components/pages/overview/Doughnut";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PeopleIcon from "@mui/icons-material/People";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import InfoCard from "../components/general/InfoCard";
import Table from "../components/general/Table";
import ProductRow from "../components/pages/products/ProductRow";
import { useParams } from "react-router-dom";
import withMerchant from "../routes/withMerchant";
import Welcome from "../components/pages/overview/Welcome";
import { useAuth } from "../contexts/AuthContext";
import { isMerchant } from "../routes/utils";
import Title from "../components/general/Title";

const Overview = () => {
  const { merchantId } = useParams();
  const { user } = useAuth();
  const {
    data,
    dataLoading,
    tableHeads,
    productRows,
    productCount,
    productLoading,
    date,
    handleDate,
  } = useOverviewContainer(merchantId);

  return (
    <Box sx={{ py: 2 }}>
      {isMerchant(user) ? (
        <Welcome name={user.name} />
      ) : (
        <Title text="Overview" />
      )}
      {dataLoading ? (
        <Loading height="40vh" />
      ) : (
        <>
          <Paper>
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={12} lg={3}>
                <InfoCard
                  Icon={LocalMallIcon}
                  title="Total sales"
                  info={data.overall.totalSales.info}
                  percent={{
                    type: data.overall.totalSales.percent.type,
                    value: data.overall.totalSales.percent.value,
                  }}
                  weekValue={data.overall.totalSales.weekValue}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <InfoCard
                  Icon={PeopleIcon}
                  title="Visitors"
                  info={data.overall.visitors.info}
                  percent={{
                    type: data.overall.visitors.percent.type,
                    value: data.overall.visitors.percent.value,
                  }}
                  weekValue={data.overall.visitors.weekValue}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <InfoCard
                  Icon={StarBorderIcon}
                  title="Total orders"
                  info={data.overall.totalOrders.info}
                  percent={{
                    type: data.overall.totalOrders.percent.type,
                    value: data.overall.totalOrders.percent.value,
                  }}
                  weekValue={data.overall.totalOrders.weekValue}
                />
              </Grid>
              <Grid item xs={12} lg={3}>
                <InfoCard
                  Icon={KeyboardReturnIcon}
                  title="Refunded"
                  info={data.overall.refunded.info}
                  percent={{
                    type: data.overall.refunded.percent.type,
                    value: data.overall.refunded.percent.value,
                  }}
                  weekValue={data.overall.refunded.weekValue}
                  noBorder
                />
              </Grid>
            </Grid>
          </Paper>

          <Grid container sx={{ mt: 0 }} spacing={2}>
            <Grid item xs={12} lg={8}>
              <Paper sx={{ p: 2, pr: 1, pb: 1 }}>
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  Revenue vs. Orders.
                </Typography>
                <Line
                  data1={data.ordersChartData}
                  data2={data.revenueChartData}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  pr: 1,
                  pb: 1,
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ mb: 2, fontWeight: "bold" }}
                >
                  Categories Revenue
                </Typography>

                <Doughnut chartData={data.categoryChartData} />
                <Box />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    sx={{ mb: 1, fontWeight: "bold" }}
                  >
                    Top 5 products
                  </Typography>
                  <FormControl size="small">
                    <Select value={date} onChange={handleDate}>
                      <MenuItem value="week">This Week</MenuItem>
                      <MenuItem value="month">This Month</MenuItem>
                      <MenuItem value="year">This Year</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Table
                  rows={productRows}
                  heads={tableHeads}
                  Row={<ProductRow />}
                  count={productCount}
                  loading={productLoading}
                  name="Products"
                />
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default withMerchant(Overview);
