import { Typography } from "@mui/material";

type IProps = {
  name: string;
};

const Welcome: React.FC<IProps> = ({ name }) => {
  return (
    <>
      <Typography component="h1" variant="h5" sx={{ fontWeight: "bold" }}>
        Welcome back, {name}
      </Typography>
      <Typography component="p" variant="body1">
        Here's what's happening with your store today.
      </Typography>
    </>
  );
};

export default Welcome;
