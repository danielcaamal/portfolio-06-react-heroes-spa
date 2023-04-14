import { useContext } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";


export const PrivateRoute = ({ children } : { children: JSX.Element[] | JSX.Element }) => {
    const { authState : { logged, email } } = useContext(AuthContext);

    if (logged) {
        const { pathname, search } = useLocation();
        const lastPath = pathname + search;
        const lastPathObj = { lastPath, email }
        localStorage.setItem('lastPath', JSON.stringify(lastPathObj));
    }

    return (
        (logged  
            ? <>{children}</> 
            : <Navigate to='login'/>)
    );
}