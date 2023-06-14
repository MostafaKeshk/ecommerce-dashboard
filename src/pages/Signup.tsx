import { LoadingButton } from "@mui/lab";
import FormikInput from "../components/form/FormikInput";
import AlertMessage from "../components/general/AlertMessage";
import useSignupContainer from "../containers/useSignupContainer";
import { useAlert } from "../contexts/AlertContext";
import { Box, Container, Grid, Typography } from "@mui/material";
import UploadImage from "../components/form/UploadImage";
import FormikPassword from "../components/form/FormikPassword";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Signup = () => {
  const { value, msg, setValue, error } = useAlert();

  const { formik, loading, image, setImage } = useSignupContainer();
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <LocalMallIcon sx={{ color: "primary.main", fontSize: 60 }} />

        <Typography
          color="primary"
          align="center"
          component="h1"
          variant="h4"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          Welcome to ShopHub
        </Typography>
      </Box>
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

      <AlertMessage value={value} setValue={setValue} error={error} msg={msg} />
    </Container>
  );
};

export default Signup;
