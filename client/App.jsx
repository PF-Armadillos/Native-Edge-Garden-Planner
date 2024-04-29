import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import CreateGarden from './components/CreateGarden.jsx';

const App = () => {
  return (
    <>
      <CreateGarden />
      <LoginForm />
    </>
  );
};

export default App;
