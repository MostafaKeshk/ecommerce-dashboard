import { Avatar, Box, Typography } from "@mui/material";

type IProps = {
  image: any;
  name: any;
};

const UserProfile: React.FC<IProps> = ({ image, name }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", my: 0.5, mr: 1 }}>
      <Avatar
        alt={name}
        src={image}
        sx={{ width: "40px", height: "40px", mr: 1 }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default UserProfile;
