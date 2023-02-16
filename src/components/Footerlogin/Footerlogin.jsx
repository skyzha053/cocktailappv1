import React from 'react';
import fellini from '../../assets/fellini.jpg'
import './Footerlogin.css';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footerlogin = () => (
    <footer className="footer">
        <Container className="mt-0">
            <div class= "links-to-middle d-inline-flex justify-content-center">
                <Link class= "d-inline-flex justify-content-center" to="/Main-menu">Main menu</Link>
                <Link class= "d-inline-flex justify-content-center" to="/Mijn-bar">Mijn bar</Link>
                <Link class= "d-inline-flex justify-content-center" to="/Favorieten">Favorieten</Link>
            </div>
            <div class="links-to-logout d-inline-flex justify-content-center">
                <links class='links-to-logout-1 d-inline-flex justify-content-center' to="/Logout">log uit</links>
            </div>

        </Container>
        <div className="footer-logo d-inline-flex justify-content-center">
            <img src={fellini} alt="logo"/>
        </div>

    </footer>
);

export default Footerlogin;
