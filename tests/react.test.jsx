import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, getByRole, getByLabelText } from '@testing-library/react';
import LoginForm from "../client/components/LoginForm";
import { Router } from "express";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../client/components/SignUp";
import Header from "../client/components/Header";
import CreateGarden from "../client/components/CreateGarden";


describe("Login Form component test", () => {
    test('Renders the User Name label', () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );
        expect(screen.getByText('User Name:')).toBeInTheDocument();
    });

    test('Renders the Password label', () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>    
        );
        expect(screen.getByText('Password:')).toBeInTheDocument();
    });
    test("Renders buttons", async () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>  
        ); 
        const buttons = await screen.findAllByRole('button');
        expect(buttons.length).toBe(2);
        expect(buttons[0]).toHaveTextContent('Login');
        expect(buttons[1]).toHaveTextContent('Sign Up');
    })
    test('Accepts inputs', async () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>  
        );
        const usernameTest = screen.getByLabelText('User Name:');
        fireEvent.change(usernameTest, { target: { value: "testing username" } });
        expect(usernameTest.value).toBe("testing username");

        const passwordTest = screen.getByLabelText('Password:');
        fireEvent.change(passwordTest, { target: { value: "testing password" } });
        expect(passwordTest.value).toBe("testing password");
    })
});

describe('Signup component testing', () => {
    test('Renders the User Name label for Sign Up', () => {
        render(
            <MemoryRouter>
                < SignUp/>
            </MemoryRouter>
        );
        expect(screen.getByText('User Name:')).toBeInTheDocument();
    });
    test('Renders the Password label for Sign Up', () => {
        render(
            <MemoryRouter>
                < SignUp/>
            </MemoryRouter>
        );
        expect(screen.getByText('Password:')).toBeInTheDocument();
    });
    test('Renders Create User button to the page', async () => {
        render(
            <MemoryRouter>
                < SignUp/>
            </MemoryRouter>
        );
        const button = await screen.findByRole('button');
        expect(button).toHaveTextContent('Create User');
    })

    test('Accepts inputs', async () => {
        render(
            <MemoryRouter>
                <SignUp />
            </MemoryRouter>  
        );
        const usernameTest = screen.getByLabelText('User Name:');
        fireEvent.change(usernameTest, { target: { value: "testing username" } });
        expect(usernameTest.value).toBe("testing username");

        const passwordTest = screen.getByLabelText('Password:');
        fireEvent.change(passwordTest, { target: { value: "testing password" } });
        expect(passwordTest.value).toBe("testing password");
    })
})

describe('Create Garden Component', () => {
    test("Renders the Header", async () => {
        render(
            <MemoryRouter>
                <CreateGarden />
            </MemoryRouter>
        )
        // await screen.findByRole("heading");

        // const container = document.querySelector("#welcome-header")
        // const header1 = getByRole(container,"heading", {level: 2});
        // expect(header1).toBeInTheDocument();
        // expect(header1).toHaveTextContent("Complete the form below to get started!")

        const header2 = screen.getByRole("heading", {level: 2});
        expect(header2).toBeInTheDocument();
        expect(header2).toHaveTextContent("Complete the form below to get started!");
        const header1 = screen.getByRole("heading", {level: 1});
        expect(header1).toBeInTheDocument();
        expect(header1).toHaveTextContent('Welcome to ShellScape Garden Planner');
    })
    test('Renders Location label', () => {
        render(
            <MemoryRouter>
                <CreateGarden />
            </MemoryRouter>
        )
        expect(screen.getByText('Location')).toBeInTheDocument();
    })
})