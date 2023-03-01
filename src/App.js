import React, { useState } from 'react';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login/login'
import Navbar from "./components/Navbar/Navbar";
import FooterLogin from "./components/Footerlogin/Footerlogin";
import ForgetPassword from './pages/forget/forget'
import RegisterForm from './pages/register/register'
import MainMenu from "./pages/mainmenu/mainmenu";
import Recept from "./pages/recept/recept";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = () => {
        setIsAuthenticated(true);
    };

    const LoginRequiredPage = () => {
        return (
            <div>
                <p>You need to log in to access this page.</p>
                <Navigate to="/" />
            </div>
        );
    };

    return (
        <div>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<LoginPage onLogin={handleAuthentication} />}
                />
                <Route path="/forget" element={<ForgetPassword />} />
                <Route path="/register" element={<RegisterForm />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/main-menu" element={<MainMenu />} />
                        <Route path="/recept" element={<Recept />} />
                    </>
                ) : (
                    <>
                        <Route path="/main-menu" element={<LoginRequiredPage />} />
                        <Route path="/recept" element={<LoginRequiredPage />} />
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;