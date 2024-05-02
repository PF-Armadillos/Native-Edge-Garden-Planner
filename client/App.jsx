import React, { lazy, Suspense, useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.jsx';
import Header from './components/Header.jsx';
import SignUp from './components/SignUp.jsx';
import CreateGarden from './components/CreateGarden.jsx';

import SelectPlants from './components/SelectPlantsTester3.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/CreateGarden' element={<CreateGarden />} />
                <Route path='/SelectPlantsTester3' element={<SelectPlants />} />
            </Routes>
        </>
    );
};

export default App;
