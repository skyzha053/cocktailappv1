import React, { useState } from "react";
import "./login.css";
import fellini from "../../assets/fellini.jpg";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State variabele om het foutbericht bij te houden
    const navigate = useNavigate();

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
            onLogin(); // Call onLogin function to update the authenticated state
            navigate("/main-menu"); // Redirect to main-menu page
        } catch (error) {
            console.error(error);
            // Handle error, such as displaying an error message to the user
            if (error.response.status === 401) {
                setErrorMessage("Onbekende gebruikersnaam of wachtwoord onjuist.");
            } else if (error.response.status === 404) {
                setErrorMessage("Onbekende gebruikersnaam of wachtwoord onjuist.");
            } else {
                setErrorMessage("Er is iets misgegaan bij het inloggen. Probeer het later opnieuw.");
            }
        }
    }

    return (
        <div className="login-page">
            <Row className="h-100">
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <div className="text-part d-flex flex-column">
                        <h1 className="font-login">LOGIN</h1>
                        <Form.Label className="username-color">Gebruikersnaam</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Gebruikersnaam"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Label className="password-color">Wachtwoord</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Wachtwoord"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Render het foutbericht als het bestaat */}
                        <div className="text-part-3 d-flex align-items-center justify-content-between">
                            <div>
                                <Link to="/forget">Wachtwoord vergeten</Link> <br />
                                <Link to="/register">Nieuw account</Link>
                            </div>
                            <Button className="login-button" onClick={handleFormSubmit}>
                                Login
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="text-part-2 d-flex align-items-center justify-content-center">
                    <img src={fellini} alt="logo" className="logo" />
                </Col>
            </Row>
        </div>
    );
}

export default LoginPage;
