import { useState } from "react";
import { useGetusersQuery } from "../../redux/apiSlice/userApi";

const UseUserLogic = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetusersQuery({ page, per_page: limit });

  return {
    limit,
    setLimit,
    page,
    setPage,
    data,
    isLoading,
  };
};

export default UseUserLogic;
