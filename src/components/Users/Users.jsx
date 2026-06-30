import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunkCreator, changePageAC } from "../../store/usersReducer";
import { Box } from "@mui/material";
import UsersPagination from "../UsersPagination/UsersPagination";
import UsersCard from "../UsersCard/UsersCard";
import { useSearchParams } from "react-router-dom";



function Users() {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { users, isFetching, totalCount, currentPage } = useSelector(
    (state) => state.usersData,
  );

  useEffect(() => {
    dispatch(getUsersThunkCreator());

  setSearchParams((searchParams) => {
  searchParams.set("page", currentPage.toString());
  return searchParams;
});

  }, [currentPage]);

  const pages = Math.ceil(totalCount / 100);

  const changePage = (page) => {
    dispatch(changePageAC(page));
  };
  return (
    <Box>
      <UsersPagination pages={pages} changePage={changePage} />
      <UsersCard users={users} isFetching={isFetching} />
    </Box>
  );
}

export default Users;
