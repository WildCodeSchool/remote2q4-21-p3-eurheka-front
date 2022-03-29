import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import './AdminUserInfo.scss';

const AdminUserInfo = ({ user, uId }) => {
    const [showComponent, setShowComponent] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    useEffect(() => {
        if (user) {
            setFirstname(user.firstname);
            setLastname(user.lastname);
            setEmail(user.email);
            setPhone(user.phone);
            setAddress(user.adresse);
        }
    }, [user]);

    const handleShowClick = (id) => {
        const docContainer = document.getElementById(id);
        if (!showComponent) {
            docContainer.classList.remove('BlocHidden');
        }
        else {
            docContainer.classList.add('BlocHidden');
        }
        setShowComponent(!showComponent);
    }

    const handleSubmit = () => {
        if(password1!==password2)
        {
            alert("Veuillez saisir le même mot de passe");
            return -1;
        }
        if (window.confirm('Voulez-vous modifier les informations ?')) {
            const url = `${process.env.REACT_APP_API_URL}users/${uId}`;
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                adresse: address,
            }
            if(password1!=='')
            {
                newUser.password=password1;
            }
            console.log(newUser);
            axios.put(url, newUser, { withCredentials: true })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='AdminUserInfo'>
            <h2 className='AdminUserInfoTitle'>Mes informations</h2>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('AdminUserInfoBloc')}></i>
            <div className="AdminUserInfoBloc BlocHidden" id="AdminUserInfoBloc">
                <div className="AdminUserInfonContainer">
                    <div className="AdminUserInfoParts">
                        <label htmlFor="name_user" className='labelInfos'>Nom : 
                            <input className='createUserInput' type="text" id="name_user" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                        </label>
                        <label htmlFor="firstname" className='labelInfos'>Prénom : 
                            <input className='createUserInput' type="text" id="firstname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                        </label>
                    </div>
                    <div className="AdminUserInfoParts">
                        <label htmlFor="phone" className='labelInfos'>Mobile : 
                            <input className='createUserInput' type="text" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        </label>
                        <label htmlFor="email" className='labelInfos'>Email : 
                            <input className='createUserInput' type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                        <label htmlFor="address" className='labelInfos'>Adresse :
                            <input className='createUserInput' type="text" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        </label>
                    </div>
                    <div className="AdminUserInfoPassword">
                        Laisser le mot de passe vide si vous ne souhaitez pas le changer.
                        <label htmlFor="password1" className='labelPassword'>Mot de passe
                            <input className='passwordInput' type="password" id="password1" value={password1} onChange={(e) => { setPassword1(e.target.value) }} />
                        </label>
                        <label htmlFor="password2" className='labelPassword'>Confirmer le mot de passe
                            <input className='passwordInput' type="password" id="password2" value={password2} onChange={(e) => { setPassword2(e.target.value) }} />
                        </label>
                    </div>
                    <div className="AdminUserInfoParts">
                        <button onClick={handleSubmit}>Modifier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUserInfo
