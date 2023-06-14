import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, Tooltip } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { viewDate } from "../../../utils/viewDate";
import ChangeOrderStatus from "./ChangeOrderStatus";

type IProps = {
  row?: any;
  actions: {
    handleView: any;
    handleStatus: any;
  };
};

const classes = {
  row: {
    fontWeight: "bold",
    fontSize: 14,
    px: 1,
  },
};

const OrderRow: React.FC<IProps> = ({ row, actions }) => {
  return (
    <TableRow>
      <TableCell sx={classes.row}>{row.id}</TableCell>

      <TableCell sx={classes.row}>{viewDate(row.date)}</TableCell>

      <TableCell sx={classes.row}>${row.price}</TableCell>

      <TableCell sx={classes.row} align="center">
        <ChangeOrderStatus
          status={row.status}
          orderId={row.id}
          handleStatus={actions.handleStatus}
        />
      </TableCell>

      <TableCell sx={classes.row}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {actions.handleView && (
            <Tooltip title="View">
              <IconButton
                color="primary"
                aria-label="View"
                onClick={() => actions.handleView(row.id)}
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
