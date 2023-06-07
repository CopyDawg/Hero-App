import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const path = pathname + search;
    localStorage.setItem('lastPath', path);
    
    return (logged) ? children : <Navigate to='/login' />
}
