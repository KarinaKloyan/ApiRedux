import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "@mui/material";

function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginTop: "35px" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
