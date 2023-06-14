import { useEffect, useState } from "react";
import useCallApi from "./useCallApi";
import { useAlert } from "../contexts/AlertContext";
import useDebounce from "./useDebounce";
import { MultiSelect } from "../utils/constants";
import { plural } from "../utils/plural";

type TableConfig = {
  API: any;
  name: string;
  rowsPerPage?: number;
  params?: any;
  onLoad?: boolean;
};

const useTable = ({
  API,
  name,
  rowsPerPage = 6,
  params = {},
  onLoad = true,
}: TableConfig) => {
  const { callApi, loading } = useCallApi();
  const { setSuccessMessage } = useAlert();

  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [allowSearch, setAllowSearch] = useState<boolean>(false);

  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const handleSearch = (value: string) => {
    setAllowSearch(true);
    setSearchValue(value);
    setPage(0);
  };

  const search = (search: string, rowsPerPage: number, pageNumber: number) => {
    setSearchLoading(true);

    callApi(
      API.get(search, rowsPerPage, pageNumber, params),
      (result: { rows: any[]; count: number }) => {
        setData(result.rows);
        setCount(result.count);
        setSearchLoading(false);
      },
      () => {
        setSearchLoading(false);
      }
    );
  };

  useEffect(() => {
    if (allowSearch) {
      search(searchValue, rowsPerPage, 0);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (onLoad) {
      setSearchLoading(true);
      setSearchValue("");
      setPage(0);

      search(searchValue, rowsPerPage, 0);
    } else {
      setData([]);
      setCount(0);
      setPage(0);
      setSearchLoading(false);
    }
  }, [...Object.values(params), onLoad]);

  const handleOpenDelete = (row: any) => {
    setSelectedItem(row === MultiSelect ? MultiSelect : row);
    setOpenDeleteDialog(true);
  };

  const handleDelete = () => {
    const isMultiSelect = selectedItem === MultiSelect;
    const ids = isMultiSelect ? selectedData : [selectedItem.id];
    callApi(API.delete(ids, params), () => {
      setSelectedItem(null);
      setOpenDeleteDialog(false);

      //front end delete (remove if we fetch from the server again)
      const newData = data.filter((obj) => !ids.includes(obj.id));

      setData(newData);
      setCount((prev: any) => prev - ids.length);

      if (isMultiSelect) {
        setSuccessMessage(
          `Selected ${plural(name)} have been deleted successfully.`
        );
        setSelectedData([]);
      } else {
        setSuccessMessage(
          `(${selectedItem?.name}) has been deleted successfully.`
        );
      }

      // fetch from the server again
      // setPage(0);
      // search(searchValue, rowsPerPage, 0);
    });
  };

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected: string[] = [];

    if (event.target.checked) {
      newSelected = data.map((d) => d.id);
    }

    setSelectedData(newSelected);
  };

  const handleCheckRow = (_: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selectedData.indexOf(id);
    const newSelected =
      selectedIndex === -1
        ? [...selectedData, id]
        : selectedData.filter((_, index) => index !== selectedIndex);

    setSelectedData(newSelected);
  };

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    search(searchValue, rowsPerPage, value - 1);
  };

  return {
    data,
    setData,
    count,
    setCount,
    search,
    searchLoading,
    handleSearch,
    searchValue,
    page,
    handleChangePage,
    rowsPerPage,
    handleOpenDelete,
    handleDelete,
    selectedItem,
    setSelectedItem,
    openDeleteDialog,
    setOpenDeleteDialog,
    loading,
    selectedData,
    setSelectedData,
    handleCheckAll,
    handleCheckRow,
  };
};

export default useTable;
