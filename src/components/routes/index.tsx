import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../../pages/Login";
import GuestHome from "../../pages/GuestHome";
import Register from "../../pages/Register";
import UserHome from "../../pages/UserHome";
import AdminHome from "../../pages/AdminHomeBooks";
import AdminHomeUsers from "../../pages/AdminHomeUsers";
import AdminHomeBooks from "../../pages/AdminHomeBooks";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForGuests = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home-guest",
      element: <GuestHome />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForUsers = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/user-home",
          element: <UserHome />,
        },
        {
          path: "/logout",
          element: <Login />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForAdmins = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/admin-home",
          element: <div>User Home Page</div>,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
        {
          path: "/admin-home-books",
          element: <AdminHomeBooks />,
        },
        {
          path: "/admin-home-users",
          element: <AdminHomeUsers />,
        },
      ],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForGuests,
    ...(!token ? routesForUsers : []),
    ...(!token ? routesForAdmins : [])
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
