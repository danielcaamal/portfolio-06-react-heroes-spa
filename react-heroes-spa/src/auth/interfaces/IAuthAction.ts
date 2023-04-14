import { IAuthState } from "./IAuthState";


export interface IAuthAction {
    payload: IAuthState;
    type: string;
}