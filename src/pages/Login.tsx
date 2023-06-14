import { LoadingButton } from "@mui/lab";
import FormikInput from "../components/form/FormikInput";
import AlertMessage from "../components/general/AlertMessage";
import useLoginContainer from "../containers/useLoginContainer";
import { useAlert } from "../contexts/AlertContext";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FormikPassword from "../components/form/FormikPassword";
import LoginSvg from "../assets/svg/Login";

const Login = () => {
  const { value, msg, setValue, error } = useAlert();

  const { formik, loading, handleNavigateSignUp } = useLoginContainer();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
            <FormikInput
              formik={formik}
              name="email"
              label="Email"
              sx={{ my: 2 }}
            />

            <FormikPassword
              formik={formik}
              name="password"
              label="Password"
              sx={{ my: 2 }}
            />

            <Box>
              <LoadingButton
                variant="contained"
                onClick={formik.handleSubmit}
                loading={loading}
                fullWidth
              >
                Login
              </LoadingButton>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mt: 1 }}>Or</Typography>
                <Button onClick={handleNavigateSignUp}>Sign Up</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <LoginSvg />
        </Grid>
      </Grid>

      <AlertMessage value={value} setValue={setValue} error={error} msg={msg} />
    </Container>
  );
};

export default Login;
