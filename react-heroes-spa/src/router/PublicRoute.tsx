import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../auth";


export const PublicRoute = ({ children } : { children: JSX.Element[] | JSX.Element }) => {
    const { authState : { logged } } = useContext(AuthContext);
    return (
        (!logged  
            ? <>{children}</> 
            : <Navigate to='/marvel'/>)
    );
}