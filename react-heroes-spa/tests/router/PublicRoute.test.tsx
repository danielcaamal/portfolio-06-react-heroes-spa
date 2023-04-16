import React from 'react';
import { render } from "@testing-library/react"
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from 'react-router-dom';


describe('PublicRoute', () => {
    test ('should render component if not authenticated', () => {
        const contextValue = {
            authState: { logged: false },
            login: jest.fn(),
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PublicRoute>
                        <span>Test</span>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(container.querySelector('span')?.textContent).toBe('Test');
    })

    test ('should redirect if authenticated', () => {
        const contextValue = {
            authState: { logged: true },
            login: jest.fn(),
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <span>Test</span>
                            </PublicRoute>}
                        />
                        <Route path="/marvel" element={<span>Home</span>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(container.querySelector('span')?.textContent).toBe('Home');
    })

})