import React, { lazy, Suspense, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Header from './components/Header.jsx';
import SignUp from './components/SignUp.jsx';
import CreateGarden from './components/CreateGarden.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import SelectPlants from './components/SelectPlantsTester3.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <LoginForm
              setIsAuthenticated={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          path='/signup'
          element={
            <SignUp setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
          }
        />
        <Route
          path='/creategarden'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CreateGarden user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/selectplantstester3'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SelectPlants user={user} />
            </ProtectedRoute>
          }
        />
        {/* <Route path='/selectplantstester3' element={<SelectPlants />} /> */}
      </Routes>
    </>
  );
};

export default App;
