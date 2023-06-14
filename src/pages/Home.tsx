import { Box, Container } from "@mui/material";
import Welcome from "../components/pages/overview/Welcome";
import { useAuth } from "../contexts/AuthContext";
import Hello from "../assets/svg/Hello";
import withAdmin from "../routes/withAdmin";

const Home = () => {
  const { user } = useAuth();
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Welcome name={user.name} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <Hello />
      </Box>
    </Container>
  );
};

export default withAdmin(Home);
