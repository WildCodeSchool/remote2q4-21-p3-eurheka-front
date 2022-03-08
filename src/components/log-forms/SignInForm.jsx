import React, { useState, useContext } from 'react';
import axios from "axios";
import { UserIdContext } from  "../../context/AppContext.js";
import RetreivePassword from ".//retreivePassword/RetreivePassword";
import "./SignInForm.css";

const SignInForm = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [forgotPassword, setForgotPassword] = useState(false);
    const { uId, fetchUId } = useContext(UserIdContext);
    
    const handleModals = (e) => {
        if (e.target.id === 'forgotPassword') {
            setForgotPassword(true);
        } else {
            setForgotPassword(false);
        }
    }

    function validateEmail(eVal){
        var val=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (val.test(eVal)){
            return true;
        } else {
            return false;
        }
    }  

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const url = `${process.env.REACT_APP_API_URL}users/login`;
        if (validateEmail(email) && password !== ""){
            const login={
                email,
                password
            };
            axios.post(url,login,{ withCredentials: true })//{ withCredentials: true }
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
            } else {
                if (password === ""){
                    const passwordError = document.getElementById('password-error');
                    passwordError.style.display = "block";
                    passwordError.innerHTML = "Veuillez rentrer votre mot de passe";
                } 
                if (!validateEmail(email)){
                    const emailError = document.getElementById('email-error');
                    emailError.style.display = "block";
                    emailError.innerHTML = "Email invalide";
                }
            }
    }

    return (
        <div>
            <form action=""  id="sign-in-form" className="sign-in-form">
                <div className="sign-in-email">
                    <label htmlFor="email" className="label">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="input-bigger-in"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} />
                    <div id="email-error" className="credential-error">{}</div>
                </div>
                <div className="sign-in-password">
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="input-bigger-in"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} />
                    <div id="password-error" className="credential-error">{}</div>
                </div>
                <div onClick={handleLogin} value="Se connecter" className="signIn-btn">Valider</div>
                <div onClick={handleModals} id="forgotPassword" className={forgotPassword ? "retreive-password forgotLink" : "forgotLink"}>J'ai oublié mon mot de passe</div>
                {forgotPassword && <RetreivePassword />}
            </form>
        </div>
    )
}

export default SignInForm;