import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, getByRole } from '@testing-library/react';
import LoginForm from "../client/components/LoginForm";
import { Router } from "express";
import { MemoryRouter } from "react-router-dom";


// describe('Login Form component test', () => {
//     test('renders login form', () => {
//         const { getByText, getByLabelText } = render(
//             <MemoryRouter>
//                 <LoginForm />
//             </MemoryRouter>
//         );
//         const username = getByLabelText('User Name: ');
//     expect(username).toBeInTheDocument();
//     expect(getByLabelText('Password:')).toBeInTheDocument();
//     expect(getByText('Login')).toBeInTheDocument();
//     expect(getByText('Sign Up')).toBeInTheDocument();
//     })
// })

describe("Login Form component test", () => {
    test('Renders the User Name label', () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('User Name:')).toBeInTheDocument();
    });

    test('Renders the Password label', () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    });
    // test()
});