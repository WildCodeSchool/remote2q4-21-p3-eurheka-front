import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserIdContext } from  '../../context/AppContext';
import Disconnect from  '../../components/disconnect/Disconnect';
import './NavBar.css';
import home from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png';

const NavBar = () => {
    const {uId, uLevel}=useContext( UserIdContext);

    const scrollToMenu = () => {
        let pageHeight = 0
        if (uId === 0) {
            pageHeight = window.innerHeight;
        }
        window.scrollTo({
            top: pageHeight,
            left: 0,
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

    return (
        <div className='NavBar'>
            <div className='left-container'>
                <div className="logo-container">
                    <Link 
                    to='/' className="logo-link"
                    onClick={scrollToTop}><img className='Header-logo' src={home} alt="logo" /></Link>
                </div>
                <div className='link-container'>
                    <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                    isActive ? "selected" : "navigation-link"
                    } 
                    onClick={scrollToMenu}>
                        Accueil
                    </NavLink>
                    <NavLink 
                    to="/prestations" 
                    className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }
                    onClick={scrollToMenu}>
                        Prestations
                    </NavLink>
                    <NavLink 
                    to="/bibliotheque" 
                    className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }
                    onClick={scrollToMenu}>
                        Bibliothèques
                    </NavLink>
                    <NavLink to="/contact-avis" className={({ isActive }) =>
                    isActive ? "selected" : "navigation-link"
                    }
                    onClick={scrollToMenu}>
                        Contact
                    </NavLink>
                </div>
            </div>
            <div className='right-container'>
                {!connected&& 
                    <div className='login-button'>
                        <NavLink to="/login" className='login-link' onClick={scrollToMenu}>Se connecter</NavLink>
                    </div>
                }
                {connected&&
                    <div className='connected-container'>
                        {admin&&
                            <NavLink to="/admin" className={({ isActive }) =>
                            isActive ? "selected admin" : "navigation-link"} onClick={scrollToMenu}>Administration</NavLink>
                        }
                        {!admin&&independantUser&&
                            <NavLink to="/mon-profil-particulier" className={({ isActive }) =>
                            isActive ? "selected" : "navigation-link"} onClick={scrollToMenu}>Mon profil</NavLink>
                        }
                        
                        <Disconnect />
                    </div>
                }
            </div>
        </div>
    );
};
export default NavBar;

/*{!admin&&companyUser&&
    <NavLink to="/mon-profil-entreprise" className={({ isActive }) =>
    isActive ? "selected" : "navigation-link" } onClick={scrollToMenu}>Mon profil entreprise</NavLink>
}*/