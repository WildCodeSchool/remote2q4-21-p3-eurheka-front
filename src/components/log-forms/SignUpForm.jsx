import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./SignUpForm.css";

const SignUpForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ controlPassword, setControlPassword] = useState('');

    const handleRegister = async (e) => {

    }
    return (
        <form action="" onSubmit={handleRegister} id="sign-up-form" className="sign-up-form">
            <div className="sign-up-name">
                <div className="firstname">
                    <label htmlFor="firstname" className="label">Prénom</label>
                    <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    className="input-classic"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstname}
                    />
                    <div className="firstname.error"></div>
                </div>
                <div className="lastname">
                    <label htmlFor="lastname" className="label">Nom</label>
                    <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    className="input-classic"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastname}
                    />
                    <div className="lastname.error"></div>
                </div>
            </div>
            <div className="sign-up-email">
                <label htmlFor="email" className="label">Email</label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                className="input-bigger"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <div className="email.error"></div>
            </div>
            <div className="passwords">
                <div className="first-password">
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="input-classic"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className="second-password">
                    <label htmlFor="password" className="label">Confirmez le mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="input-classic"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>
            </div>
            <div className="password.error"></div>
            <div onClick="submit" type="submit " value="Valider" className="signUp-btn" />
        </form>
    )
}

export default SignUpForm;