import { IAuthState } from "./IAuthState";


export interface IAuthContext {
    authState: IAuthState;
    login: (id:string, email: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
}