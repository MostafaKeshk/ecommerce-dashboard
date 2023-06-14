import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Checkbox, Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UserProfile from "../../general/UserProfile";

type IProps = {
  row?: any;
  actions: {
    handleOpenDelete: any;
    handleEdit: any;
    handleView: any;
  };
  isSelectable?: {
    selectedRows: any;
    handleCheckRow: any;
  };
};

const classes = {
  row: {
    fontWeight: "bold",
    fontSize: 14,
    px: 1,
  },
};

const ProductRow: React.FC<IProps> = ({ row, actions, isSelectable }) => {
  return (
    <TableRow>
      {isSelectable && (
        <TableCell sx={{ px: 1 }}>
          <Checkbox
            color="success"
            checked={isSelectable.selectedRows.indexOf(row.id) !== -1}
            onChange={(e: any) => isSelectable.handleCheckRow(e, row.id)}
          />
        </TableCell>
      )}
      <TableCell sx={classes.row}>{row.id}</TableCell>
      <TableCell sx={classes.row}>
        <UserProfile image={row.image} name={row.name} />
      </TableCell>

      <TableCell sx={classes.row}>{row.email}</TableCell>
      <TableCell sx={classes.row}>{row.phoneNumber}</TableCell>

      <TableCell sx={classes.row}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tooltip title="View">
            <IconButton
              color="primary"
              aria-label="View"
              onClick={() => actions.handleView(row.id)}
            >
              <RemoveRedEyeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton
              color="secondary"
              aria-label="Edit"
              onClick={() => actions.handleEdit(row.id)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              aria-label="Delete"
              color="error"
              onClick={() => actions.handleOpenDelete(row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
