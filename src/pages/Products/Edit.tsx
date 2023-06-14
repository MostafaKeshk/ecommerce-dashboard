import { LoadingButton } from "@mui/lab";
import FormikInput from "../../components/form/FormikInput";
import UploadImage from "../../components/form/UploadImage";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import useProductContainer from "../../containers/products/useProductContainer";
import withMerchant from "../../routes/withMerchant";
import Title from "../../components/general/Title";

const EditProduct = () => {
  const { merchantId, productId } = useParams();

  const { formik, loading, image, setImage } = useProductContainer(
    merchantId,
    productId
  );

  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Title text="Edit Product" />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <UploadImage
            image={image}
            setImage={setImage}
            name="image"
            formik={formik}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <FormikInput formik={formik} name="name" label="Name" />
        </Grid>

        <Grid item xs={12} lg={4}>
          <FormikInput formik={formik} name="price" label="Price" />
        </Grid>

        <Grid item xs={12} lg={4}>
          <FormikInput formik={formik} name="qty" label="QTY" />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            onClick={formik.handleSubmit}
            loading={loading}
            variant="contained"
            sx={{ width: "100%", py: 2 }}
          >
            Submit
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withMerchant(EditProduct);
