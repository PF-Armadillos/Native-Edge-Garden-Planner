import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../client/components/SignUp'; // 假设这是您的 SignUp 组件


describe('SignUp component', () => {
    test('updates username and password state on input change', () => {
      const { getByLabelText } = render(
        <MemoryRouter>
          <SignUp />
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