import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Users, Profile } from "../../components";

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
      {
        path: '/users/:id',
        element : <Profile/>
      }
    ],
  },
]);
