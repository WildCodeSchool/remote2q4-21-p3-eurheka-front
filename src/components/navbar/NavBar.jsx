import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import home from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png';

const NavBar = () => {

    return (
        <div className='NavBar'>
            <div className="logo-container">
                <Link to='/'><img className='Header-logo' src={home} alt="logo" /></Link>
            </div>
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
            <NavLink to="/login" className='login-button'>
                Se connecter
            </NavLink>
        </div>
    );
};

export default NavBar;