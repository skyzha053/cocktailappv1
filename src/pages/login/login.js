import React from "react";
import './login.css'
import fellini from '../../assets/fellini.jpg'
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function loginPage(){
    return(
        <div className='login-page'>
            <Row>
                <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                    <div className='text-part d-flex flex-column'>
                        <h1 className='font-login'>LOGIN</h1>
                        <Form.Label className='username-color'>Gebruikersnaam</Form.Label>
                        <Form.Control type='text' placeholder='Gebruikersnaam' />
                        <Form.Label className='password-color'>Wachtwoord</Form.Label>
                        <Form.Control type='password' placeholder='Wachtwoord' />
                        <div className='text-part-3 d-flex align-items-center justify-content-between'>
                            <div>
                                <Link to='/forget'>Wachtwoord vergeten</Link> <br />
                                <Link to='/register'>Nieuw account</Link>
                            </div>
                            <Button className='login-button'>Login</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} className='text-part-2 d-flex align-items-center justify-content-center'>
                        <img src={fellini} alt='logo' className='logo d-flex align-items-center justify-content-center'/>

                </Col>

            </Row>
        </div>
    );
}

export default loginPage;
