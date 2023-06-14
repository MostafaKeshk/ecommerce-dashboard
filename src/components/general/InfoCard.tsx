import { Box, Typography, useTheme } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";

type IProps = {
  Icon: any;
  title: string;
  info: string;
  percent: {
    type: "positive" | "negative";
    value: string;
  };
  weekValue: string;
  noBorder?: boolean;
};

const InfoCard: React.FC<IProps> = ({
  Icon,
  title,
  info,
  percent,
  weekValue,
  noBorder,
}) => {
  const isPositive = percent.type === "positive";
  const theme = useTheme();

  const classes = {
    container: {
      p: 3,
      borderRight: noBorder ? "none" : `1px solid ${theme.palette.divider}`,
    },
    iconContainer: { display: "flex", alignItems: "center", mb: 2 },
    title: { fontSize: "16px", fontWeight: "bold" },
    percent: { display: "flex", alignItems: "center" },
    percentType: { display: "flex", alignItems: "center" },
    icon: { fontSize: "16px", mr: 0.5 },
  };

  return (
    <Box sx={classes.container}>
      <Box sx={classes.iconContainer}>
        <Icon sx={{ mr: 1 }} />
        <Typography component="h6" variant="body1" sx={classes.title}>
          {title}
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: "600" }} component="h3" variant="h4">
        {info}
      </Typography>
      <Box sx={classes.percent}>
        <Box sx={classes.percentType}>
          {isPositive ? (
            <NorthEastIcon color="success" sx={classes.icon} />
          ) : (
            <SouthEastIcon color="error" sx={classes.icon} />
          )}
          <Typography
            component="h6"
            variant="h6"
            color={isPositive ? "success.main" : "error"}
            sx={{ fontSize: "14px" }}
          >
            {percent.value}
          </Typography>
        </Box>
        <Typography
          component="h6"
          variant="h6"
          sx={{ ml: 1, fontSize: "14px" }}
        >
          {weekValue} this week
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
