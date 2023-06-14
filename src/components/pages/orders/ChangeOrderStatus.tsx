import {
  Chip,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { orderStatus, orderStatusList } from "../../../utils/constants";
import { useState } from "react";

type IProps = {
  status: any;
  orderId: any;
  handleStatus: any;
};

const ChangeOrderStatus: React.FC<IProps> = ({
  status,
  orderId,
  handleStatus,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {status === "delivered" ? (
        <Chip label={orderStatus.delivered} color="success" />
      ) : loading ? (
        <CircularProgress size={20} />
      ) : (
        <FormControl size="small">
          <Select
            value={status}
            onChange={(e: any) =>
              handleStatus(e.target.value, orderId, setLoading)
            }
          >
            {orderStatusList.map((status: any) => (
              <MenuItem key={status.value} value={status.value}>
                {status.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default ChangeOrderStatus;
