import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CandidateInfos.css';

const CandidateInfos = ({uId, user}) => {
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');    
    const [stage, setStage] = useState(true);
    const [accompanied, setAccompanied] = useState(false);
    const [focus, setFocus] = useState(false);

    /*useEffect(() => {
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setEmail(user.email);        
        setPhone(user.phone);
        setAddress(user.adresse);
        setBirthday(user.birthday);
    }, [])*/

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
                phone: phone,
                address: address,
                birthday: birthday,
                stage: stage,
                focus: focus,
                accompanied: accompanied,
            }
            //Send user to back
            const url = `${process.env.REACT_APP_API_URL}users/${uId}`;
            axios.put(url, newUser)
                .then(function (response) {
                    if (response.status === 201) {
                        const userId = response.data.userId;
                        
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
                            docName = 'mailError';
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
                        default: console.log('Unknown error');
                    }
                });
            //Go to connexion page ?
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
        <div className='CandidateInfos'>
            <div className='titleInfos'>Gérer mes informations personnelles</div>
            <div className='detailInfos'>
               <div className='identityInfos'>
                   <div className='identityLine'>
                       <label htmlFor="name" className='labelInfos'>Nom</label>
                       <input className='createUserInput' type="text" id="name" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                   </div>
                    <div className='identityLine'>
                       <label htmlFor="firstname" className='labelInfos'>Prénom</label>
                       <input className='createUserInput' type="text" id="firstname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                    </div>
                </div> 
               <div className='contactInfos'>
                    <div className='contactLine'>
                       <label htmlFor="phone" className='labelInfos'>Mobile</label>
                       <input className='createUserInput' type="text" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                   </div>
                    <div className='contactLine'>
                       <label htmlFor="email" className='labelInfos'>Email</label>
                       <input className='createUserInput' type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div> 
               <div className='otherInfos'>
                    <div className="checkboxLine">
                        <input type="checkbox" id="stage" name="stage" value="stage" checked={stage} onChange={(e) => setStage(e.target.checked)}
                          className="checkbox-box"></input>
                        <label htmlFor="stage" className="labelInfos">En recherche d'emploi/stage</label>
                    </div>
                    <div className="checkboxLine">
                        <input type="checkbox" id="accompanied" name="accompanied" value="accompanied" checked={accompanied} onChange={(e) => setAccompanied(e.target.checked)}
                    className="checkbox-box"></input>
                        <label htmlFor="accompanied" className="labelInfos">Etre accompagné</label>
                    </div>
                    <div className="checkboxLine">
                        <input type="checkbox" id="focus" name="focus" value="focus" checked={focus} onChange={(e) => setFocus(e.target.checked)}
                        className="checkbox-box"></input>
                        <label htmlFor="focus" className="labelInfos">Faire le point</label>
                    </div>
                </div> 
            </div> 
            <div className='passwordInfos'>
                <label htmlFor="password1" className='labelPassword'>Mot de passe</label>
                <input className='passwordInput' type="password" id="password1" value={password1} onChange={(e) => { setPassword1(e.target.value) }} />
                                
                <label htmlFor="password2" className='labelPassword'>Confirmer le mot de passe</label>
                <input className='passwordInput' type="password" id="password2" value={password2} onChange={(e) => { checkPassord(e.target.value) }} />
            </div>  
            <button className='validateInfos' onClick={submitClick}>Valider mes changements</button>        
        </div>
    )
}

export default CandidateInfos;