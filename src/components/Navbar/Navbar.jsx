import React from 'react';
import fellini from '../../assets/fellini.jpg'
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
      <div className="app__navbar-logo">
          <img src={fellini}
               alt="logo"/>
      </div>
  </nav>
);

export default Navbar;
