import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ViewItem from "../../components/general/ViewItem";
import Loading from "../../components/general/Loading";
import useViewCustomerContainer from "../../containers/customers/useViewCustomerContainer";
import ViewActions from "../../components/general/ViewActions";
import FormikMap from "../../components/form/map";
import withAdmin from "../../routes/withAdmin";

const ViewCustomer = () => {
  const { customerId } = useParams();
  const { data, loading } = useViewCustomerContainer(customerId);

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Loading height="40vh" />
      ) : (
        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={12}>
            <ViewActions type="Customer" name={data.name} />
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

          <Grid item xs={12} lg={6}>
            <ViewItem title="Name" value={data.name} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <ViewItem title="Email" value={data.email} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <ViewItem title="Phone Number" value={data.phoneNumber} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ViewItem title="Latitude" value={data.lat} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ViewItem title="Longitude" value={data.lng} />
          </Grid>

          <Grid item xs={12}>
            <FormikMap
              center={{
                lat: data.lat,
                lng: data.lng,
              }}
              markers={[
                {
                  pos: {
                    lat: data.lat,
                    lng: data.lng,
                  },
                },
              ]}
              zoom={5}
            />
          </Grid>

          <Grid item xs={12}>
            <ViewItem title="Address" value={data.address} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default withAdmin(ViewCustomer);
