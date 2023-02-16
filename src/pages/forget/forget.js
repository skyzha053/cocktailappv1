import React from 'react'
import './forget.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import fellini from "../../assets/fellini.jpg";

function forgetPassword() {
    return(
        <div className='forget-password'>
            <Container className='justify-content-center d-flex align-items-center'>
                <div className='container-form'>
                    <div className='justify-content-center d-flex align-items-center' >
                        <img src={fellini} alt='logo'/>
                    </div>
                    <div className='justify-content-center d-flex align-items-center'>
                        <div className='container-form-1'>
                            <p1> Voer je e-mailadres, telefoonnummer of gebruikersnaam in zodat we je een link kunnen sturen waarmee je weer toegang kunt krijgen tot je account. </p1>
                        </div>
                    </div>
                    <div className='justify-content-center d-flex align-items-center'>
                        <div  className='text-forget'>
                            <Form.Label>Gebruikersnaam</Form.Label>
                            <Form.Control className='text-forget-1' type='text' placeholder='E-mailadres, telefoonnummer of gebruikersnaam'/>
                        </div>
                    </div>
                    <div className='button1 justify-content-center d-flex align-items-center' >
                        <button className="button2 btn btn-primary">Aanmeldlink verzenden</button>
                    </div>
                    <div className=' of-text justify-content-center d-flex align-items-center'>
                        <div className='left-divider' ></div>
                        <p2 className="mb-2 mx-2">OF</p2>
                        <div className='right-divider'></div>
                    </div>
                    <div className='justify-content-center d-flex align-items-center'>
                        <Link className='link' to='/register'>Nieuw account maken</Link>
                    </div>
                    <div className='justify-content-center d-flex align-items-center'>
                        <div className='divider'>
                            <div className='justify-content-center d-flex align-items-center'>
                                <Link className='link-1' to='/'> Terug naar aanmeld scherm</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default forgetPassword;