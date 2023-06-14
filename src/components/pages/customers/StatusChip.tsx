import { Chip } from "@mui/material";
import { orderStatus } from "../../../utils/constants";

type IStatus = {
  status: any;
};

const StatusChip: React.FC<IStatus> = ({ status }) => {
  const color =
    orderStatus[status] === orderStatus.pending
      ? "error"
      : orderStatus[status] === orderStatus.processing
      ? "secondary"
      : orderStatus[status] === orderStatus.shipped
      ? "info"
      : orderStatus[status] === orderStatus.outForDelivery
      ? "primary"
      : "success";

  return <Chip label={orderStatus[status]} color={color} />;
};

export default StatusChip;
