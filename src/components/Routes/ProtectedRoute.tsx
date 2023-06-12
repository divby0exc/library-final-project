import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import Login from "../../pages/Login";

// This will act as a wrapper. Should I call it a filter?
export const ProtectedRoute = () => {
    const { token } = useAuth();

    // Checks if the user is authenticated
    if (!token) {
        // If not, redirect to login
        return <Navigate to='/login' />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};