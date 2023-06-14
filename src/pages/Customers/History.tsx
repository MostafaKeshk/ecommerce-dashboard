import {
  Box,
  Container,
  Typography,
  IconButton,
  Tooltip,
  InputLabel,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import useTable from "../../hooks/useTable";
import CustomerHistoryApi from "../../apis/customerHistory";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useParams } from "react-router-dom";
import useCustomerHistoryContainer from "../../containers/customers/useCustomerHistoryContainer";
import CustomerOrderHistoryRow from "../../components/pages/customers/CustomerOrderHistoryRow";
import { orderStatusList } from "../../utils/constants";
import withMerchant from "../../routes/withMerchant";

const CustomerHistory = () => {
  const { merchantId, merchantCustomerId } = useParams();
  const {
    tableHeads,
    handleViewOrder,
    handleViewCustomer,
    customer,
    statusFilter,
    handleFilterStatus,
  } = useCustomerHistoryContainer(merchantId, merchantCustomerId);

  const {
    data: customers,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
  } = useTable({
    API: CustomerHistoryApi,
    name: "customer",
    params: { merchantId, status: statusFilter },
  });

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {customer.name}'s History
        </Typography>

        <Tooltip title="View">
          <IconButton
            color="primary"
            aria-label="View"
            onClick={() => handleViewCustomer(merchantCustomerId)}
          >
            <RemoveRedEyeIcon />
          </IconButton>
        </Tooltip>
      </Box>

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
        rows={customers}
        heads={tableHeads}
        Row={
          <CustomerOrderHistoryRow actions={{ handleView: handleViewOrder }} />
        }
        count={count}
        name="customers"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </Container>
  );
};

export default withMerchant(CustomerHistory);
