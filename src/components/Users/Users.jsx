import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunkCreator, changePageAC } from "../../store/usersReducer";
import User from "../User/User";
import { Box, Pagination } from "@mui/material";
import UserSkeleton from "../UserSkeleton/UserSkeleton";

function Users() {
  const dispatch = useDispatch();
  const { users, isFetching, totalCount, currentPage } = useSelector(
    (state) => state.usersData,
  );

  useEffect(() => {
    dispatch(getUsersThunkCreator());
  }, [currentPage]);

  const pages = Math.ceil(totalCount / 100);

  const changePage = (page) => {
    dispatch(changePageAC(page));
  };
  return (
    <Box>
      <Box>
        <Pagination
          count={pages}
          onChange={(_, p) => changePage(p)}
          variant="outlined"
          shape="rounded"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {isFetching
          ? Array(20)
              .fill(null)
              .map((_, index) => <UserSkeleton key={index} />)
          : users?.map((user) => <User key={user.id} user={user} />)}
      </Box>
    </Box>
  );
}

export default Users;
