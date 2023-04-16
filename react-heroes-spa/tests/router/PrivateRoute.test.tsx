import React from 'react';
import { render } from "@testing-library/react"
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';


describe('PrivateRoute', () => {
    test ('should render component if authenticated', () => {
        const contextValue = {
            authState: { logged: true },
            login: jest.fn(),
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <span>Test</span>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(container.querySelector('span')?.textContent).toBe('Test');
    })

    test ('should redirect if not authenticated', () => {
        const contextValue = {
            authState: { logged: false },
            login: jest.fn(),
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="/*" element={
                            <PrivateRoute>
                                <span>Test</span>
                            </PrivateRoute>}
                        />
                        <Route path="/login" element={<span>Home</span>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(container.querySelector('span')?.textContent).toBe('Home');
    })

    test ('should save lastPath in localStorage when authenticated', () => {
        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
        const contextValue = {
            authState: { logged: true },
            login: jest.fn(),
            logout: jest.fn()
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <span>Test</span>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(setItemSpy).toHaveBeenCalledWith('lastPath', '{"lastPath":"/"}');
    });

})