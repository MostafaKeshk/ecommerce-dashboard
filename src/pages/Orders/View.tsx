import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ViewItem from "../../components/general/ViewItem";
import Loading from "../../components/general/Loading";
import useViewOrderContainer from "../../containers/orders/useViewOrderContainer";

import Title from "../../components/general/Title";
import FormikMap from "../../components/form/map";
import { viewDate } from "../../utils/viewDate";
import OrderDetailsTable from "../../components/pages/orders/OrderDetailsTable";
import ChangeOrderStatus from "../../components/pages/orders/ChangeOrderStatus";
import withMerchant from "../../routes/withMerchant";

const ViewOrder = () => {
  const { orderId } = useParams();

  const {
    customerDetails,
    orderDetails,
    loading,
    taxRate,
    tableHeads,
    products,
    invoiceDetails,
    handleOrderStatus,
  } = useViewOrderContainer(orderId);

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Loading height="40vh" />
      ) : (
        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={12}>
            <Title text="Customer Details" />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}>
              Image:
            </Typography>
            <Box sx={{ height: "150px", width: "150px" }}>
              <img
                src={customerDetails.image}
                alt="Order"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="ID" value={customerDetails.id} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <ViewItem title="Name" value={`${customerDetails.name}`} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="Email" value={`${customerDetails.email}`} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem
              title="Phone Number"
              value={`${customerDetails.phoneNumber}`}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="Latitude" value={`${customerDetails.lat}`} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="Longitude" value={`${customerDetails.lng}`} />
          </Grid>
          <Grid item xs={12}>
            <FormikMap
              center={{
                lat: customerDetails.lat,
                lng: customerDetails.lng,
              }}
              markers={[
                {
                  pos: {
                    lat: customerDetails.lat,
                    lng: customerDetails.lng,
                  },
                },
              ]}
              zoom={5}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="Address" value={`${customerDetails.address}`} />
          </Grid>
          <Grid item xs={12}>
            <Title text="Order Details" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="ID" value={`${orderId}`} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ViewItem title="Date" value={viewDate(orderDetails.date)} />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", mr: 1 }}>
              Status
            </Typography>
            <ChangeOrderStatus
              status={orderDetails.status}
              orderId={orderId}
              handleStatus={handleOrderStatus}
            />
          </Grid>
          <Grid item xs={12}>
            <OrderDetailsTable
              taxRate={taxRate}
              heads={tableHeads}
              rows={products}
              invoiceSubtotal={invoiceDetails.invoiceSubtotal}
              invoiceTaxes={invoiceDetails.invoiceTaxes}
              invoiceTotal={invoiceDetails.invoiceTotal}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default withMerchant(ViewOrder);
