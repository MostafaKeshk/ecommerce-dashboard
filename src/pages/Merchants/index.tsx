import { Box, Button, Container } from "@mui/material";
import AlertDialog from "../../components/general/AlertDialog";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import Title from "../../components/general/Title";
import MerchantRow from "../../components/pages/merchants/MerchantRow";
import useMerchantsContainer from "../../containers/merchants/useMerchantsContainer";
import { MultiSelect } from "../../utils/constants";
import withAdmin from "../../routes/withAdmin";
import useTable from "../../hooks/useTable";
import MerchantApi from "../../apis/merchant";

const Merchants = () => {
  const {
    tableHeads,
    handleAddMerchant,
    handleViewMerchant,
    handleEditMerchant,
  } = useMerchantsContainer();

  const {
    data: merchants,
    searchLoading,
    handleSearch,
    handleChangePage,
    handleCheckAll,
    searchValue,
    page,
    rowsPerPage,
    loading: deleteLoading,
    count,
    selectedData: selectedMerchants,
    handleOpenDelete,
    handleCheckRow,
    handleDelete,
    openDeleteDialog,
    setOpenDeleteDialog,
    selectedItem,
  } = useTable({
    API: MerchantApi,
    name: "merchant",
  });

  return (
    <Container maxWidth="xl">
      <Title
        text="Merchants"
        selectedRows={selectedMerchants}
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
          onClick={handleAddMerchant}
        >
          Add Merchant
        </Button>
      </Box>
      <Table
        rows={merchants}
        heads={tableHeads}
        Row={
          <MerchantRow
            actions={{
              handleOpenDelete,
              handleView: handleViewMerchant,
              handleEdit: handleEditMerchant,
            }}
            isSelectable={{
              selectedRows: selectedMerchants,
              handleCheckRow,
            }}
          />
        }
        count={count}
        name="merchants"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        isSelectable={{
          selectedRows: selectedMerchants,
          handleCheckAll,
        }}
        handleChangePage={handleChangePage}
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

export default withAdmin(Merchants);
