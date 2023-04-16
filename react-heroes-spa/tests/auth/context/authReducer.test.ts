import { authReducer } from '../../../src/auth/context/authReducer';
import { IAuthAction, IAuthState } from '../../../src/auth/interfaces';
import { types } from '../../../src/auth/types/types';

describe('authReducer', () => {

    const initialState:IAuthState = {
        logged: false
    }

    const loginAction:IAuthAction = {
        type: types.login,
        payload: {
            name: 'test',
            email: 'email@email.com',
            id: '1',
            logged: true
        }
    }

    const logoutAction:IAuthAction = {
        type: types.logout
    }

    test ('should return default state', () => {
        const state = authReducer(initialState, {type: 'anything'});
        expect(state).toEqual({logged: false});
    });

    test ('should return logged state', () => {
        const state = authReducer(initialState, loginAction);
        expect(state).toEqual({
            ...initialState,
            id: loginAction.payload?.id,
            name: loginAction.payload?.name,
            email: loginAction.payload?.email,
            logged: true
        });
    });

    test ('should return logged out state', () => {
        const state = authReducer(initialState, logoutAction);
        expect(state).toEqual({logged: false});
    });
})