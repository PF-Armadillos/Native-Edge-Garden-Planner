import React, { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignUp from './components/SignUp.jsx';
import CreateGarden from './components/CreateGarden.jsx';
import SelectPlants from './components/SelectPlants.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <>        
    <Header />
      <Routes>
        <Route path="/" element={<SelectPlants />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CreateGarden" element={<CreateGarden />} />
        <Route path="/SelectPlants" element={<SelectPlants />} />
      </Routes>
    </>
  );
};

export default App;
