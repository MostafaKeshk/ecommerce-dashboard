import { LoadingButton } from "@mui/lab";
import FormikInput from "../../components/form/FormikInput";
import UploadImage from "../../components/form/UploadImage";
import { Container, Grid } from "@mui/material";
import useCustomerContainer from "../../containers/allCustomers/useCustomerContainer";
import withAdmin from "../../routes/withAdmin";
import FormikPassword from "../../components/form/FormikPassword";
import Title from "../../components/general/Title";
import FormikMap from "../../components/form/map";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { customerId } = useParams();
  const {
    formik,
    loading,
    image,
    setImage,
    center,
    handleMarker,
    handleSearch,
    setCenter,
    zoom,
    setZoom,
  } = useCustomerContainer(customerId);

  return (
    <Container maxWidth="xl" sx={{ mb: 2 }}>
      <Title text="Add Customer" />

      <Grid container spacing={2}>
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

        <Grid item xs={12} lg={6}>
          <FormikInput formik={formik} name="lng" label="Longitude" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormikInput formik={formik} name="lat" label="Latitude" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormikInput formik={formik} name="address" label="Address" />
        </Grid>

        <Grid item xs={12}>
          <FormikMap
            center={center}
            setCenter={setCenter}
            markers={[
              {
                pos: {
                  lat: formik.values.lat,
                  lng: formik.values.lng,
                },
              },
            ]}
            handleMarker={(e: any) => handleMarker(e)}
            handleSearch={handleSearch}
            zoom={zoom}
            setZoom={setZoom}
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

export default withAdmin(EditCustomer);
