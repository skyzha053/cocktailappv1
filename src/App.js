import React from 'react';
import './App.css'
import {Routes, BrowserRouter, Route } from 'react-router-dom'
import loginPage from './pages/login/login'
import Navbar from "./components/Navbar/Navbar";
import FooterLogin from "./components/Footerlogin/Footerlogin";
import forgetPassword from './pages/forget/forget'
import registerForm from './pages/register/register'


function App() {
  return (

    <div>
      <Navbar />
        <Routes>
            <Route path="/" element={loginPage()}/>
            <Route path="/forget" element={forgetPassword()}/>
            <Route path="/register" element={registerForm()}/>
        </Routes>


    </div>
  );
}

export default App;
