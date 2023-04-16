import { renderHook } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { useContext } from 'react';


describe('authContext', () => {

    test('should return default value', () => {
        const { result } = renderHook(() => useContext(AuthContext));
        const { authState, login, logout } = result.current;
        expect(authState).toEqual({logged: false});
        expect(login).toBeInstanceOf(Function);
        expect(logout).toBeInstanceOf(Function);
    });
})