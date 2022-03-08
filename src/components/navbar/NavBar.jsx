import React, { useContext, useEffect } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import cookie from "js-cookie";
import { UserIdContext } from  '../../context/AppContext';
import Disconnect from  '../../components/disconnect/Disconnect';
import axios from "axios";
import './NavBar.css';
import home from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png';

const NavBar = () => {
    const {uId, uLevel}=useContext( UserIdContext);
    console.log(uId);
    let connected=false;
    let admin=false;
    let companyUser=false;
    let independantUser=false;
    if(uId === 0)
    {
        connected=false;
    } else {
        connected=true;
    }
    if(uLevel&&uLevel.includes('admin')){ 
        admin=true;
    } else if (uLevel&&uLevel.includes('user')){
        admin=false;
        independantUser=true;
    } else {
        admin=false;
        companyUser=true;
    }
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1})
        }
    }
    const handleLogout = async () => {
        const url = `${process.env.REACT_APP_API_URL}users/logout`;
        await axios.get(url,{ withCredentials: true })
                .then(() => removeCookie('jwt'))
                .catch((err) => console.log(err));
    }
    return (
        <div className='NavBar'>
            <div className='left-container'>
                <div className="logo-container">
                    <Link to='/'><img className='Header-logo' src={home} alt="logo" /></Link>
                </div>
                <div className='link-container'>
                    <NavLink to="/" className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }>
                        Accueil
                    </NavLink>
                    <NavLink to="/prestations" className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }>
                        Prestations
                    </NavLink>
                    <NavLink to="/bibliotheque" className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }>
                        Bibliothèques
                    </NavLink>
                    <NavLink to="/contact-avis" className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }>
                        Contact/Avis
                    </NavLink>
                </div>
            </div>
            <div className='right-container'>
                {!connected&& 
                    <div className='login-button'>
                        <NavLink to="/login" className='login-link'>Se connecter</NavLink>
                    </div>
                }
                {connected&&
                    <div className='connected-container'>
                        {admin&&
                            <NavLink to="/admin" className={({ isActive }) =>
                            isActive ? "selected" : "navigation-link"} >Administration</NavLink>
                        }
                        {!admin&&independantUser&&
                            <NavLink to="/mon-profil-particulier" className={({ isActive }) =>
                            isActive ? "selected" : "navigation-link"} >Mon profil particulier</NavLink>
                        }
                        {!admin&&companyUser&&
                            <NavLink to="/mon-profil-entreprise" className={({ isActive }) =>
                            isActive ? "selected" : "navigation-link"} >Mon profil entreprise</NavLink>
                        }
                        <Disconnect />
                    </div>
                }
            </div>
        </div>
    );
};
export default NavBar;
