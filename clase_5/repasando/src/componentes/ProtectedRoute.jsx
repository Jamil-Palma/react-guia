import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";




const ProtectedRoute = ({children}) => {
    console.log("protected route")
    const {user } = useAuth();
    if(!user){ // si usuario es nulo
        return <Navigate to="/"></Navigate>
    }
    return children
}
export default ProtectedRoute