import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home';
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;