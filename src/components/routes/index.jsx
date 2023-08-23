import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import Login from "../../pages/Login";
import GuestHome from "../../pages/GuestHome";
import Register from "../../pages/Register";
import UserHome from "../../pages/UserHome";
import AdminHomeUsers from "../../pages/AdminHomeUsers";
import AdminHomeBooks from "../../pages/AdminHomeBooks";

// Komponenter som appen navigerar till vid olika situationer

const Routes = () => {
  const { token } = useAuth();

  const routesForGuests = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/User",
      element: <UserHome />, // Wrap the component in ProtectedRoute
    },
    {
      path: "/Admin",
      element: <AdminHomeBooks />, // Wrap the component in ProtectedRoute
    },
    {
      path: "/Guest",
      element: <GuestHome />,
    }
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForGuests,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
