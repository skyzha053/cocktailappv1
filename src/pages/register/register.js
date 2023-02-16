import React, { useState } from "react";
import './register.css'
import { useForm } from 'react-hook-form';
import { Container, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function RegisterForm(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    async function handleFormSubmit(data) {
        if (data.password !== data.confirmPassword) {
            setErrorMessage("Wachtwoorden komen niet overeen.");
            return;
        }
        if (!data.email.includes("@")) {
            setErrorMessage("Voer een geldig email adres in.");
            return;
        }
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', data);
            console.log(response)
            navigate("/");
        } catch (error) {
            console.error(error);
        }


    }
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='register-form justify-content-center d-flex align-items-center'>
                <div className='register-form-0 '>
                    <Container className='justify-content-center d-flex align-items-center'>
                        <div className='register-form-1'>
                            <div className='register-form-2 d-flex flex-row justify-content-between'>
                                <label htmlFor="first-name-input" className='first-name-label'>Voornaam</label>
                                <label htmlFor="username-input" className='username-label'>Gebruikersnaam</label>
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <input id="first-name-input"  className='first-name-input' type='text' placeholder='Voornaam' />
                                <input id="username-input"  {...register("username")} autoComplete="off" className='username-input' type='text' placeholder='Voer gebruikersnaam in' />
                            </div>
                            <div className='register-form-3 d-flex flex-row justify-content-between'>
                                <label htmlFor="last-name-input" className='last-name-label'>Achternaam</label>
                                <label htmlFor="password-input" className='password-label'>Wachtwoord</label>
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <input id="last-name-input" className='last-name-input' type='text' placeholder='Achternaam' />
                                <input id="password-input" {...register("password", { required: true, minLength: 8 })} autoComplete="off" className='password-input' type='password' placeholder='Voer wachtwoord in' />
                            </div>
                            {errors.password && <span className="error-message">Wachtwoord moet minstens 8 karakters bevatten</span>}
                            <div className='register-form-4 d-flex flex-row justify-content-between'>
                                <label htmlFor="email-input" className='email-label'>Email adres</label>
                                <label htmlFor="confirm-password-input" className='password-label-1'>Herhaal wachtwoord</label>
                            </div>
                            <div className='d-flex flex-row justify-content-between'>
                                <input id="email-input"   {...register("email", { required: true, pattern: /^\S+@\S+$/i })} autoComplete="off" className='email-input' type='text' placeholder='Email adres' />
                                <input id="confirm-password-input" {...register("confirmPassword", { validate: (value) => value === watch('password') })} autoComplete="off" className='password-input' type='password' placeholder='Voer wachtwoord in' />
                            </div>
                            {errors.email && <span className="error-message">Geen geldig email adres</span>}
                            {errors.confirmPassword && <span className="error-message">Wachtwoorden komen niet overeen</span>}
                            <div className='btn-cancel-register justify-content-between d-flex align-items-center'>
                                <Link to='/'><Button>Cancel</Button></Link>
                                <Button type="submit">Registreren</Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;