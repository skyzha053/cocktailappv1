import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom'
import loginPage from './pages/login/login'
import Navbar from "./components/Navbar/Navbar";
import FooterLogin from "./components/Footerlogin/Footerlogin";
import forgetPassword from './pages/forget/forget'
import registerForm from './pages/register/register'
import MainMenu from "./pages/mainmenu/mainmenu";
import Recept from "./pages/recept/recept";


function App() {
  return (

    <div>
      <Navbar />
        <Routes>
            <Route path="/" element={loginPage()}/>
            <Route path="/forget" element={forgetPassword()}/>
            <Route path="/register" element={registerForm()}/>
            <Route path="/main-menu" element={MainMenu()}/>
            <Route path="/recept" element={Recept()}/>
        </Routes>


    </div>
  );
}

export default App;
