import React, { useState } from 'react';
import axios from "axios";
import RetreivePassword from ".//retreivePassword/RetreivePassword";
import "./SignInForm.css";

const SignInForm = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [forgotPassword, setForgotPassword] = useState(false);
    
    const handleModals = (e) => {
        if (e.target.id === 'forgotPassword') {
            setForgotPassword(true);
        } else {
            setForgotPassword(false);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

        axios({
            method: "post",
            url: '${process.env.REACT_APP_API_URL}api/users/login',
            withCredentials: true,
            data: {
                email,
                password
            },
        })
            .then((res) => {
                console.log(res)
                if (res.data.errors) {
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    window.location = '/';
                }
            })

            .catch((err) => {
                console.log(err);
            });

    }
    return (
        <div>
            <form action="" onSubmit={handleLogin} id="sign-in-form" className="sign-in-form">
                <div className="sign-in-email">
                    <label htmlFor="email" className="label">Email</label>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    className="input-bigger"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} />
                    <div className="email-error">{}</div>
                </div>
                <div className="sign-in-password">
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="input-bigger"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} />
                    <div className="password-error">{}</div>
                </div>
                <div type="submit" value="Se connecter" className="signIn-btn">Se connecter</div>
                <div onClick={handleModals} id="forgotPassword" className={forgotPassword ? "retreive-password" : ""}>J'ai oublié mon mot de passe</div>
                {forgotPassword && <RetreivePassword />}
            </form>
        </div>
    )
}

export default SignInForm;