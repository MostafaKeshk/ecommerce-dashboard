import { Box, Button, Container } from "@mui/material";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import Title from "../../components/general/Title";
import CustomerRow from "../../components/pages/customers/CustomerRow";
import useAllCustomersContainer from "../../containers/allCustomers/useAllCustomersContainer";

import useTable from "../../hooks/useTable";
import CustomerApi from "../../apis/customer";
import AlertDialog from "../../components/general/AlertDialog";
import { MultiSelect } from "../../utils/constants";
import withAdmin from "../../routes/withAdmin";

const AllCustomers = () => {
  const { tableHeads, handleView, handleAddCustomer, handleEditCustomer } =
    useAllCustomersContainer();

  const {
    data: customers,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,

    handleCheckAll,

    loading: deleteLoading,
    selectedData: selectedCustomers,
    handleOpenDelete,
    handleCheckRow,
    handleDelete,
    openDeleteDialog,
    setOpenDeleteDialog,
    selectedItem,
  } = useTable({
    API: CustomerApi,
    name: "customer",
  });

  return (
    <Container maxWidth="xl">
      <Title
        text="Customers"
        selectedRows={selectedCustomers}
        handleOpenDelete={handleOpenDelete}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchInput
          searchValue={searchValue}
          handleSearch={handleSearch}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{ width: "200px", ml: 1 }}
          onClick={handleAddCustomer}
        >
          Add Customer
        </Button>
      </Box>

      <Table
        rows={customers}
        heads={tableHeads}
        Row={
          <CustomerRow
            actions={{
              handleView,
              handleOpenDelete,
              handleEdit: handleEditCustomer,
            }}
            isSelectable={{
              selectedRows: selectedCustomers,
              handleCheckRow,
            }}
          />
        }
        count={count}
        name="customers"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        isSelectable={{
          selectedRows: selectedCustomers,
          handleCheckAll,
        }}
      />

      <AlertDialog
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        onAgree={handleDelete}
        loading={deleteLoading}
        agreeText="Delete"
        disagreeText="Cancel"
        description={`Are you sure you want to delete ${
          selectedItem === MultiSelect
            ? "these merchants"
            : `this ${selectedItem?.name}`
        }?`}
      />
    </Container>
  );
};

export default withAdmin(AllCustomers);
