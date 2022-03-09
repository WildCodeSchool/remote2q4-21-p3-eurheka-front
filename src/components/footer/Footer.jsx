import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo_Icone_Jaune from '../../assets/logo/Logo_Icone_Jaune.png'
import Logo_Icone_Bleu from '../../assets/logo/Logo_Icone_Bleu.png'
import "./Footer.css"

const Footer = (props) => {
    const {footerStyle, setFooterStyle} = props

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={footerStyle ? 'Footer' : 'Footer-light'}>
            <div className='footer-container'>
                <div className='logo-container'>
                    <NavLink to="/" className='logo-container-bis'>
                        <img className='footer-logo' src={footerStyle ? Logo_Icone_Jaune :  Logo_Icone_Bleu} alt="Eurheka logo" onClick={scrollToTop}/>
                    </ NavLink>
                </div>
                <div className='navigation-container'>
                    <ul className='navigation-block'>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>Accueil</li>
                        </ NavLink>
                        <NavLink to="/prestations">
                            <li className='navigation-list' onClick={scrollToTop}>Prestations</li>
                        </NavLink>
                        <NavLink to="/bibliotheque">
                            <li className='navigation-list' onClick={scrollToTop}>Bibliothèques</li>
                        </NavLink>
                    </ul>
                    <ul className='navigation-block'>
                        <NavLink to="/contact-avis">
                            <li className='navigation-list' onClick={scrollToTop}>Contact / Avis</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>Connexion</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>Conditions</li>
                        </NavLink>
                    </ul>
                    <ul className='navigation-block'>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>Conditions générales</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>Conditions</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list' onClick={scrollToTop}>A propos</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='socials'>
                    <div className='icons-container'>
                        <div className='icons-animation'><a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-google fa-2xl"></i></a></div>
                        <div className='icons-animation'><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-facebook-f fa-2xl"></i></a></div>
                    </div>
                    <div className='icons-container'>
                        <div className='icons-animation'><a href="https://fr.linkedin.com/company/eurheka-estellelorusso" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-linkedin-in fa-2xl"></i></a></div>
                        <div className='icons-animation'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-instagram fa-2xl"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer