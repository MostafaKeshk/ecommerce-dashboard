import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Checkbox,
  CircularProgress,
  Switch,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UserProfile from "../../general/UserProfile";

type IProps = {
  row?: any;
  actions?: {
    handleOpenDelete?: any;
    handleEdit?: any;
    handleView?: any;
    handleVisibility?: any;
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
  const [loading, setLoading] = React.useState(false);

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

      <TableCell sx={classes.row}>{row.price}</TableCell>
      <TableCell sx={classes.row}>{row.sold}</TableCell>
      <TableCell sx={classes.row}>{row.qty}</TableCell>

      <TableCell sx={classes.row} align="right">
        {row.sales}
      </TableCell>

      {actions && actions.handleVisibility && (
        <TableCell sx={classes.row} align="center">
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Switch
              color="primary"
              checked={row.visibility}
              onChange={() => actions.handleVisibility(row, setLoading)}
            />
          )}
        </TableCell>
      )}

      {actions && (
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

            {actions.handleEdit && (
              <Tooltip title="Edit">
                <IconButton
                  color="secondary"
                  aria-label="Edit"
                  onClick={() => actions.handleEdit(row.id)}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}

            {actions.handleOpenDelete && (
              <Tooltip title="Delete">
                <IconButton
                  aria-label="Delete"
                  color="error"
                  onClick={() => actions.handleOpenDelete(row)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </TableCell>
      )}
    </TableRow>
  );
};

export default ProductRow;
