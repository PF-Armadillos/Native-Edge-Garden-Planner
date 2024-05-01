/**
 * @Author: Your name
 * @Date:   2024-04-30 16:12:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-04-30 16:16:39
 */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter to mock routing

import App from '../client/App';

test('renders App component', () => {
    // Render the App component within a MemoryRouter
    const { getByText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    // Assert that certain elements are present in the rendered component
    expect(getByText('Header')).toBeInTheDocument(); // Replace 'Header' with your actual header text
    expect(getByText('LoginForm')).toBeInTheDocument(); // Replace 'LoginForm' with your actual login form text
});
