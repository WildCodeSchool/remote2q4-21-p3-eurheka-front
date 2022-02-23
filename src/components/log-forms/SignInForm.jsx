import React, { useState } from 'react';
import axios from "axios";
import "./SignInForm.css";

const SignInForm = () => {
    const [email, setEmail]= useState("");
    const [password, setpassword]= useState("");

    const handleLogin = (e) => {

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
                value="email" />
                <input type="submit" value="se connecter" />
            </form>
            <p>Se connecter</p>
        </div>
    )
}

export default SignInForm;