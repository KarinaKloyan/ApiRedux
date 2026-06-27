import UserSkeleton from "../UserSkeleton/UserSkeleton";
import User from "../User/User";
import { Box } from "@mui/material";

function UsersCard({users, isFetching}) {
  return (
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
  );
}


export default UsersCard