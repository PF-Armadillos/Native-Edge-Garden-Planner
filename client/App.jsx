import React, { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Header from './components/Header.jsx';
import SignUp from './components/SignUp.jsx';
import CreateGarden from './components/CreateGarden.jsx';
import SelectPlants from './components/SelectPlants.jsx';
import SelectPlantsTester2 from './components/SelectPlantsTester2.jsx';
import SelectPlantsTester3 from './components/SelectPlantsTester3.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/CreateGarden' element={<CreateGarden />} />
        <Route path='/SelectPlants' element={<SelectPlants />} />
        <Route path='/SelectPlantsTester2' element={<SelectPlantsTester2 />} />
        <Route path='/SelectPlantsTester3' element={<SelectPlantsTester3 />} />
      </Routes>
    </>
  );
};

export default App;
