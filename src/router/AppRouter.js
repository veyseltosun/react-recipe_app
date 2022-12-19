import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Details from '../pages/details/Details';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login setIsAuth={setIsAuth} />}
                />
                <Route
                    path="/about"
                    element={
                        <PrivateRouter isAuth={isAuth}>
                            <About />
                        </PrivateRouter>
                    }
                    isAuth={isAuth}
                />
                <Route
                    path="/details"
                    element={
                        <PrivateRouter isAuth={isAuth}>
                            <Details />
                        </PrivateRouter>
                    }
                    isAuth={isAuth}
                />
                <Route
                    path="/"
                    element={
                        <PrivateRouter isAuth={isAuth}>
                            <Home />
                        </PrivateRouter>
                    }
                    isAuth={isAuth}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;