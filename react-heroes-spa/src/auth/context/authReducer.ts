import { IAuthAction, IAuthState } from "../interfaces";
import { types } from "../types/types";


export const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                name: action.payload?.name,
                email: action.payload?.email,
                logged: true
            }
        case types.logout:
            return {
                ...state,
                logged: false
            }
        default:
            return state;
    }
}