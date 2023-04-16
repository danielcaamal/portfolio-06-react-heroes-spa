import React from 'react';
import { AuthContext } from "../../src/auth";
import { AppRouter } from '../../src/router/AppRouter';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


describe('AppRouter', () => {

    test ('should render login if not authenticated', () => {

        const contextValue = {
            authState: { logged: false },
            login: jest.fn(),
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(container.querySelector('span')?.textContent).toBe('Test');
    })

})