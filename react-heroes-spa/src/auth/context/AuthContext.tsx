import { createContext } from "react";
import { IAuthContext } from "../interfaces";

export const AuthContext = createContext({ 
    authState: { logged: false }, 
    login: (id:string, email: string, name: string) => {},
    logout: () => {}
} as IAuthContext);