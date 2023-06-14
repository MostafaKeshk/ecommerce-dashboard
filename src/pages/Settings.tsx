import { LoadingButton } from "@mui/lab";
import FormikInput from "../components/form/FormikInput";
import { Container, Grid, Typography } from "@mui/material";
import UploadImage from "../components/form/UploadImage";
import FormikPassword from "../components/form/FormikPassword";
import useSettings from "../containers/useSettings";
import withMerchant from "../routes/withMerchant";

const Settings = () => {
  const { formik, loading, image, setImage } = useSettings();

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
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

export default withMerchant(Settings);
