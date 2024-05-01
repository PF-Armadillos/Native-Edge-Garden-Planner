import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../client/components/LoginForm';
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm component', () => {
  test('updates username and password state on input change', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    const usernameInput = getByLabelText('User Name:');
    const passwordInput = getByLabelText('Password:');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpassword');
  });

});
