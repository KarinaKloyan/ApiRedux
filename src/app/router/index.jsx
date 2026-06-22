import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Users } from "../../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
