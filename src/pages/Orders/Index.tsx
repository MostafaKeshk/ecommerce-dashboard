import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import useOrdersContainer from "../../containers/orders/useOrdersContainer";
import OrderRow from "../../components/pages/orders/OrderRow";
import Title from "../../components/general/Title";
import { orderStatusList } from "../../utils/constants";
import { useParams } from "react-router-dom";
import withMerchant from "../../routes/withMerchant";

const Orders = () => {
  const { merchantId } = useParams();

  const {
    orders,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
    tableHeads,
    handleViewOrder,
    handleOrderStatus,

    statusFilter,
    handleFilterStatus,
  } = useOrdersContainer(merchantId);

  return (
    <Container maxWidth="xl">
      <Title text="Orders" />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={10}>
          <SearchInput
            searchValue={searchValue}
            handleSearch={handleSearch}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} lg={2}>
          <FormControl size="small" fullWidth>
            <InputLabel>Filter by status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e: any) => handleFilterStatus(e.target.value)}
              label="Filter by status"
            >
              <MenuItem value="all">All</MenuItem>
              {orderStatusList.map((status: any) => (
                <MenuItem
                  key={status.value}
                  value={status.value}
                  onClick={() => console.log(status.value)}
                >
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Table
        rows={orders}
        heads={tableHeads}
        Row={
          <OrderRow
            actions={{
              handleView: handleViewOrder,
              handleStatus: handleOrderStatus,
            }}
          />
        }
        count={count}
        name="orders"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </Container>
  );
};

export default withMerchant(Orders);
