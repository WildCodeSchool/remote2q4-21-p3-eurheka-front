import React, { useState } from 'react';
import axios from "axios";
import "./SignInForm.css";

const SignInForm = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        

    }
    return (
        <div>
            <form action="" onSubmit={handleLogin} id="sign-up-form">
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} />
                <div className="email-error">{}</div>
                <label htmlFor="email">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password} />
                <div className="password-error">{}</div>
                <input type="submit" value="Se connecter" />
            </form>
        </div>
    )
}

export default SignInForm;