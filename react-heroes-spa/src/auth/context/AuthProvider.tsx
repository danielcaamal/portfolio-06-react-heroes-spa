import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { IAuthState } from "../interfaces"
import { types } from "../types/types"
import { IAuthAction } from '../interfaces/IAuthAction';

const initialState: IAuthState = {
    logged: false
}

const init = ():IAuthState =>  {
    return JSON.parse(localStorage.getItem('user') || 'null') || { logged: false };
}

export const AuthProvider = ({ children } : { children: JSX.Element[] | JSX.Element }) => {

    const [authState, authDispatch] = useReducer(authReducer, initialState, init);


    const login = async (id:string, email: string, name: string) => {
        const user = {
            id,
            name,
            email,
            logged: true
        }
        const action:IAuthAction = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        authDispatch(action);
    }

    const logout = async() => {
        localStorage.removeItem('user');
        const action:IAuthAction = { type: types.logout, payload: { logged: false } };
        authDispatch(action);
    }

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}