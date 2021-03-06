import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import conditions from '../../assets/pdf/conditions.pdf'

import './CreateUser.scss';

const CreateUser = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [stage, setStage] = useState(true);
    const [accompanied, setAccompanied] = useState(false);
    const [focus, setFocus] = useState(false);
    const [checkCG,setCheckCG] = useState(false);
    const submitClick = (e) => {
        e.preventDefault();
        //Reset all error panels
        const errorDivs = document.getElementsByClassName('error');
        for (let i = 0; i < errorDivs.length; i++) {
            errorDivs[i].classList.remove('ErrorDisplay');
            errorDivs[i].innerHTML = '';
        }
        if (firstname && lastname && password1 && password2 && email) {
            if (password1 !== password2) {
                alert('Les mots de passes sont différents');
                return -1;
            }
            if ((firstname.length > 255) || (lastname.length > 255) || (password1.length > 255) || (email.length > 255)) {
                alert('Les valeurs ne peuvent dépasser 255 caractères');
                return -1;
            }
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                password: password1,
                email: email,
                stage: stage,
                focus: focus,
                accompanied: accompanied
            }
            //Send user to back
            const url = `${process.env.REACT_APP_API_URL}users/`;
            axios.post(url, newUser)
                .then(function (response) {
                    if (response.status === 201) {
                        const userId = response.data.userId;
                        alert('Votre compte a été créé, veuillez vous connecter');
                        setAccompanied(false);
                        setFocus(false);
                        setStage(false);
                        setCheckCG(false);
                        setEmail('');
                        setFirstname('');
                        setLastname('');
                        setPassword1('');
                        setPassword2('');
                    }
                })
                .catch(function (error) {
                    const HTTPError = error.response.status;
                    let docName = '';
                    let message = '';
                    switch (HTTPError) {
                        case 409:
                            docName = 'mailError';
                            message = "L'adresse mail existe déjà";
                            let errorDiv = document.getElementById(docName);
                            errorDiv.innerHTML = message;
                            errorDiv.classList.add('ErrorDisplay');
                            break;
                        case 422:
                            const ErrorArray = error.response.data;
                            ErrorArray.forEach((error) => {
                                if (error.includes('mail')) {
                                    docName = 'mailError';
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
                        default: ;
                    }
                });
        }
        else {
            alert('Veuillez saisir toutes les informations');
        }
    }
    const checkPassord = (newpass) => {
        setPassword2(newpass);
        const pass2 = document.getElementById('password2');
        if (password1 !== newpass) {
            pass2.classList.add('wrongPass');
        }
        else {
            pass2.classList.remove('wrongPass');
        }
    }

    return (
        <div className='CreateUser'>
            <h2 className="mainTitleCreate">Créer son profil</h2>
            <p className="mainTextCreate">Augmenter vos chances d'être contacté par des recruteurs...</p>
            <form>
                <div className="globalContainer">
                    <div className="leftFields">
                        <div className="innerLeftFields">
                            <label htmlFor="name" className='labelLeft'>Nom<br />
                                <input className='createUserInput' type="text" id="name" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                                <div className='error' id="lastNameError">
                                </div>
                            </label>
                            <label htmlFor="firstname" className='labelLeft'>Prénom<br />
                                <input className='createUserInput' type="text" id="firstname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                                <div className='error' id="firstNameError">
                                </div>
                            </label>
                        </div>
                        <div className="innerRightFields">
                            <label htmlFor="email" className='labelLeft'>Mail<br />
                                <input className='createUserInput' type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <div className='error' id="mailError">
                                </div>
                            </label>
                            <label htmlFor="password1" className='labelLeft'>Mot de passe<br />
                                <input className='createUserInput' type="password" id="password1" value={password1} onChange={(e) => { setPassword1(e.target.value) }} />
                                <div className='error' id="passwordError">
                                </div></label>
                            <label htmlFor="password2" className='labelLeft'>Vérifier le mot de passe<br />
                                <input className='createUserInput' type="password" id="password2" value={password2} onChange={(e) => { checkPassord(e.target.value) }} /></label>
                        </div>
                    </div>
                    <div className="rightFields">
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
                    </div>
                </div>
                <div className="btnContainer">
                <div className="conditionsContainer">
                <input className="checkBox"type="checkbox" name="conditions" onChange={(e)=>setCheckCG(e.target.checked)}></input><label htmlFor="conditions" className="check-text">J'accepte les <a target="_blank" rel="noopener noreferrer" href={conditions} className="general-conditions">
                conditions générales </a></label>
                </div>
                <button disabled={!checkCG} type="submit" className='btnCreate' onClick={(e) => submitClick(e)}>S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser