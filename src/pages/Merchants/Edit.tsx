import { LoadingButton } from "@mui/lab";
import FormikInput from "../../components/form/FormikInput";
import UploadImage from "../../components/form/UploadImage";
import { Container, Grid } from "@mui/material";
import useMerchantContainer from "../../containers/merchants/useMerchantContainer";
import withAdmin from "../../routes/withAdmin";
import FormikPassword from "../../components/form/FormikPassword";
import { useParams } from "react-router-dom";
import Title from "../../components/general/Title";

const EditMerchant = () => {
  const { merchantId } = useParams();
  const { formik, loading, image, setImage } = useMerchantContainer(merchantId);

  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Title text="Edit Merchant" />

      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={12}>
          <UploadImage
            image={image}
            setImage={setImage}
            name="image"
            formik={formik}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikInput formik={formik} name="name" label="Name" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikInput formik={formik} name="email" label="Email" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikInput
            formik={formik}
            name="phoneNumber"
            label="Phone Number"
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikPassword formik={formik} name="password" label="Password" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikPassword
            formik={formik}
            name="confirmPassword"
            label="Confirm Password"
          />
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

export default withAdmin(EditMerchant);
