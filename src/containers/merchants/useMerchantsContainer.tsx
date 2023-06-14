import paths from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const useMerchantsContainer = () => {
  const navigate = useNavigate();

  const tableHeads = [
    { label: "Merchant ID", align: "left" },
    { label: "Merchant name", align: "left" },
    { label: "Email", align: "left" },
    { label: "Phone", align: "left" },
    { label: "Actions", align: "center" },
  ];

  const handleViewMerchant = (id: any) => navigate(paths.getOverview(id));

  const handleEditMerchant = (id: any) => navigate(paths.getEditMerchant(id));

  const handleAddMerchant = () => navigate(paths.addMerchant);

  return {
    tableHeads,
    handleViewMerchant,
    handleEditMerchant,
    handleAddMerchant,
  };
};

export default useMerchantsContainer;
