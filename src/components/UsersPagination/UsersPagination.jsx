import { Box, Pagination } from "@mui/material";

function UsersPagination({ pages, changePage }) {
  return (
    <Box sx={{ mb: "35px", display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={pages}
        onChange={(_, p) => changePage(p)}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
}

export default UsersPagination;
