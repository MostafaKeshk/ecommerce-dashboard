import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ViewItem from "../../components/general/ViewItem";
import Loading from "../../components/general/Loading";
import useViewProductContainer from "../../containers/products/useViewProductContainer";
import ViewActions from "../../components/general/ViewActions";
import AlertDialog from "../../components/general/AlertDialog";
import withMerchant from "../../routes/withMerchant";

const ViewProduct = () => {
  const { merchantId, productId } = useParams();

  const {
    data,
    pageLoading,
    handleEdit,
    setOpenDeleteDialog,
    openDeleteDialog,
    handleDelete,
    deleteLoading,
  } = useViewProductContainer(merchantId, productId);

  return (
    <Container maxWidth="xl">
      {pageLoading ? (
        <Loading height="40vh" />
      ) : (
        <>
          <Grid container spacing={2} sx={{ my: 1 }}>
            <Grid item xs={12}>
              <ViewActions
                type="Product"
                name={data.name}
                handleEdit={handleEdit}
                setOpenDeleteDialog={setOpenDeleteDialog}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}>
                Image:
              </Typography>
              <Box sx={{ height: "150px", width: "150px" }}>
                <img
                  src={data.image}
                  alt="product"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <ViewItem title="Name" value={data.name} />
            </Grid>

            <Grid item xs={12} lg={4}>
              <ViewItem title="Price" value={`$${data.price}`} />
            </Grid>

            <Grid item xs={12} lg={4}>
              <ViewItem title="QTY" value={`${data.qty}`} />
            </Grid>
          </Grid>
          <AlertDialog
            open={openDeleteDialog}
            handleClose={() => setOpenDeleteDialog(false)}
            onAgree={handleDelete}
            loading={deleteLoading}
            agreeText="Delete"
            disagreeText="Cancel"
            description={`Are you sure you want to delete ${`this ${data?.name}`}?`}
          />
        </>
      )}
    </Container>
  );
};

export default withMerchant(ViewProduct);
