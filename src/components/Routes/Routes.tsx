import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import GuestHome from "../../pages/GuestHome";
import UserHome from "../../pages/UserHome";
import AdminHomeBooks from "../../pages/AdminHomeBooks";
import AdminHomeUsers from "../../pages/AdminHomeUsers";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Routes = () => {
  const { token } = useAuth();

  const routesForGuests = [
    {
      path: "/",
      element: <GuestHome />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    }
  ];

  const routesForUsers = [
    {
      path: "/",
      role: 'USER',
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          role: 'USER',
          element: <UserHome />,
        },
        {
            path: '/logout',
            role: 'USER',
            element: <div>Logout</div>,
        }
      ],
    },
  ];

  const routesForAdmins = [
    {
        path: "/",
        role: 'ADMIN',
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            role: 'ADMIN',
            element: <AdminHomeBooks />,
          },
          {
            path: '/users',
            role: 'ADMIN',
            element: <AdminHomeUsers />,
          },
          {
              path: '/logout',
              role: 'ADMIN',
              element: <div>Logout</div>,
          },
        ],
      },
  ];

//   This will include the routes based on auth status
  const router = createBrowserRouter([
    ...routesForGuests,
    ...(token ? routesForUsers : []),
    ...(token ? routesForAdmins : [])
  ]);

//   RouterProvider wraps the router config to make it available for the entirre app
return <RouterProvider router={router} />;
};

export default Routes;