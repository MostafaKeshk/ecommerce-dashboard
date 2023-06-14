import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import paths from "./paths";
import NotFound from "../pages/NotFound";

export const isMerchant = (user: any) => user && user.type === "merchant";

export const isAdmin = (user: any) => user && user.type === "admin";

export const isSameMerchant = (user: any, merchantId: any) =>
  user && user.type === "merchant" && user.id === merchantId;

type IProps = {
  Component: any;
};

export const RedirectToHome: React.FC<IProps> = ({ Component }) => {
  const { user } = useAuth();

  if (isMerchant(user)) {
    return <Navigate to={paths.getOverview(user.id)} />;
  }

  if (isAdmin(user)) {
    return <Navigate to={paths.dashboard} />;
  }

  return <Component />;
};

export const RedirectToNotFound: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={paths.login} />;
  }

  return <NotFound message="404 Not Found" pageHasHeader />;
};
