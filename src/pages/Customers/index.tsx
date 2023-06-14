import { Container } from "@mui/material";
import SearchInput from "../../components/general/SearchInput";
import Table from "../../components/general/Table";
import Title from "../../components/general/Title";
import CustomerRow from "../../components/pages/customers/CustomerRow";
import useCustomersContainer from "../../containers/customers/useCustomersContainer";

import useTable from "../../hooks/useTable";
import CustomerApi from "../../apis/customer";
import { useParams } from "react-router-dom";
import withMerchant from "../../routes/withMerchant";

const Customers = () => {
  const { merchantId } = useParams();

  const { tableHeads, handleView, handleHistory } =
    useCustomersContainer(merchantId);

  const {
    data: customers,
    count,
    page,
    rowsPerPage,
    handleChangePage,
    handleSearch,
    searchLoading,
    searchValue,
  } = useTable({
    API: CustomerApi,
    name: "customer",
    params: { merchantId },
  });

  return (
    <Container maxWidth="xl">
      <Title text="Customers" />
      <SearchInput
        searchValue={searchValue}
        handleSearch={handleSearch}
        fullWidth
      />

      <Table
        rows={customers}
        heads={tableHeads}
        Row={<CustomerRow actions={{ handleView, handleHistory }} />}
        count={count}
        name="customers"
        loading={searchLoading}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
      />
    </Container>
  );
};

export default withMerchant(Customers);
