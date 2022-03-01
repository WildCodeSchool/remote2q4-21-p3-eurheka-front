import React from "react";
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";
import "./SignUpForm.css";

const SignUpForm = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ controlPassword, setControlPassword] = useState('');
    const [ checkCG, setCheckCG] = useState(false);
    const [ stage, setStage] = useState(false);
    const [ focus, setFocus] = useState(false);
    const [ accompanied, setAccompanied] = useState(false);

    const handleRegister = async (e) => {

        e.preventDefault();
        let errorMessage = document.getElementsByClassName("Error");
        for (let i=0; i<errorMessage.length; i++){
            errorMessage[i].innerHTML="";
        }
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            password: password,
            email: email,
            stage: stage,
            focus: focus,
            accompanied: accompanied
        }        
        const url = `${process.env.REACT_APP_API_URL}users/`;
            axios.post(url, newUser) 
                .then(function (response) {
                    if (response.status === 201) {
                        const userId = response.data.userId;
                        alert("Votre compte a été créé, veuillez vous connecter");
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPassword("");
                        setControlPassword("");
                        setCheckCG(false);
                        setStage(false);
                        setFocus(false);
                        setAccompanied(false);
                    }
                    
                })
                .catch(function (error) {
                    const HTTPError = error.response.status;
                    let docName = '';
                    let message = '';
                    switch (HTTPError) {
                        case 409:
                            console.log('User already exist');
                            console.log(error.response.data);
                            docName = 'emailError';
                            message = "L'adresse mail existe déjà";
                            let errorDiv = document.getElementById(docName);
                            errorDiv.innerHTML = message;
                            errorDiv.classList.add('ErrorDisplay');
                            break;
                        case 422:
                            console.log('Erreur de validation');
                            console.log(error.response.data);
                            const ErrorArray = error.response.data;
                            ErrorArray.forEach((error) => {
                                console.log(error);
                                if (error.includes('mail')) {
                                    docName = 'emailError';
                                    message = "L'adresse mail n'est pas valide";
                                }
                                if (error.includes('password')) {
                                    docName = "passwordError";
                                    message = "Le mot de passe doit comporter 8 caractères minimum";
                                }
                                if (error.includes('firstname')) {
                                    docName = 'firstNameError';
                                    message = "Le prénom d'utilisateur n'est pas valide"
                                }
                                if (error.includes('lastname')) {
                                    docName = 'lastNameError';
                                    message = "Le nom d'utilisateur n'est pas valide"
                                }
                                let errorDiv = document.getElementById(docName);
                                errorDiv.innerHTML = message;
                                errorDiv.classList.add('ErrorDisplay');
                            })
                            break;
                        default: console.log('Unknown error');
                    }
                });

    }

    const passwordControl = (e) => {
        if (password !== controlPassword){
            const passwordError = document.getElementById('password-error');
            passwordError.style.display = "block";
            passwordError.innerHTML = "Les mots de passe doivent être identiques";
        }
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
                    <div id="firstNameError" className="Error firstNameError"></div>
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
                    <div id="lastNameError" className="Error lastNameError"></div>
                </div>
            </div>
            <div className="sign-up-email">
                <label htmlFor="email" className="label">Email</label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                className="input-bigger-up"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <div className="Error emailError" id="emailError" ></div>
            </div>
            <div className="passwords">
                <div className="first-password">
                    <label htmlFor="password" className="label">Mot de passe</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password1" 
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
                    id="password2" 
                    className="input-classic"
                    onChange={(e) => setControlPassword(e.target.value)}
                    value={controlPassword}
                    onBlur={passwordControl}
                    />
                </div>
                <div id="passwordError" className="Error credential-error">{}</div>
            </div>
            <div className="checkbox-duo">
                <input type="checkbox" id="stage" name="stage" value="stage" checked={stage} onChange={(e) => setStage(e.target.checked)}
                className="checkbox-box"></input>
                <label htmlFor="stage" className="check-text">En recherche d'emploi/stage</label>
            </div>
            <div className="checkbox-duo">
                <input type="checkbox" id="accompanied" name="accompanied" value="accompanied" checked={accompanied} onChange={(e) => setAccompanied(e.target.checked)}
                className="checkbox-box"></input>
                <label htmlFor="accompanied" className="check-text">Etre accompagné</label>
            </div>
            <div className="checkbox-duo">
                <input type="checkbox" id="focus" name="focus" value="focus" checked={focus} onChange={(e) => setFocus(e.target.checked)}
                className="checkbox-box"></input>
                <label htmlFor="focus" className="check-text">Faire le point</label>
            </div>
            <div className="checkbox-duo">
                <input onChange={(e) =>setCheckCG(e.target.checked)} type="checkbox" id="conditions" name="conditions" className="checkbox-box"></input>
                <label htmlFor="conditions" className="check-text">J'accepte les <NavLink to="/conditions-generales" className="general-conditions">conditions générales</NavLink></label>
            </div>
            <button disabled={!checkCG} type="submit " value="Valider" className="signUp-btn">Valider mes informations</button>
        </form>
    )
}

export default SignUpForm;