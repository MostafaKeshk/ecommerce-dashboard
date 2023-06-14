import { Box, Button, Container } from "@mui/material";
import AlertDialog from "../../components/general/AlertDialog";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import Title from "../../components/general/Title";
import ProductRow from "../../components/pages/products/ProductRow";
import useProductsContainer from "../../containers/products/useProductsContainer";
import { MultiSelect } from "../../utils/constants";
import { useParams } from "react-router-dom";
import withMerchant from "../../routes/withMerchant";

const Products = () => {
  const { merchantId } = useParams();

  const {
    products,
    count,
    tableHeads,
    handleOpenDelete,
    handleVisibility,
    handleViewProduct,
    handleEditProduct,
    selectedProducts,
    handleCheckRow,
    openDeleteDialog,
    setOpenDeleteDialog,
    handleDelete,
    deleteLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
    handleCheckAll,
    selectedItem,
    handleAddProduct,
  } = useProductsContainer(merchantId);

  return (
    <Container maxWidth="xl">
      <Title
        text="Products"
        selectedRows={selectedProducts}
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
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Box>
      <Table
        rows={products}
        heads={tableHeads}
        Row={
          <ProductRow
            actions={{
              handleOpenDelete,
              handleVisibility,
              handleView: handleViewProduct,
              handleEdit: handleEditProduct,
            }}
            isSelectable={{
              selectedRows: selectedProducts,
              handleCheckRow,
            }}
          />
        }
        count={count}
        name="products"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        isSelectable={{
          selectedRows: selectedProducts,
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
            ? "these products"
            : `this ${selectedItem?.name}`
        }?`}
      />
    </Container>
  );
};

export default withMerchant(Products);
