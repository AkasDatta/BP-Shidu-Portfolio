import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-red-500"></div>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location }} replace></Navigate>
};

export default PrivateRoute;