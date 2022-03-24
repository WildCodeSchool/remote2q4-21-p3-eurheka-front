import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CandidateInfos.css';

const CandidateInfos = ({uId, user, setUser}) => {
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');    
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');    
    
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [stage, setStage] = useState(false);
    const [accompanied, setAccompanied] = useState(false);
    const [focus, setFocus] = useState(false);

    useEffect (() => {
        if (user) {
        setFirstname(user.firstname);
        setLastname(user.lastname);
        setEmail(user.email);
        setPhone(user.phone);
        setAddress(user.adresse);
        setBirthday(user.birthday);
        }
    }, [user])

    const submitClick = (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_API_URL}users/${uId}`;
        const newUser = {
            firstname: firstname, 
            lastname: lastname,
            email: email,
            phone: phone,
            adresse: address,
            birthday: birthday,
        }
        axios.put(url, newUser, {withCredentials: true})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })  
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

    const handleChange = () => {

    }

    return (
        <div className='CandidateInfos'>
            { user && <>
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
                    <div className='otherLine'>
                       <label htmlFor="address" className='labelInfos'>Adresse</label>
                       <input className='createUserInput' type="text" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                    </div>
                    <div className='otherLine'>
                       <label htmlFor="birthday" className='labelInfos'>Date de naissance</label>
                       <input className='birthday' type="datetime-local" id="birthday" value={birthday} onChange={(e) => { setBirthday(e.target.value) }} />
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
            </>}
        </div> 
    )
       
}

export default CandidateInfos;