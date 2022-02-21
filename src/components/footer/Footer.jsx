import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo_Icone_Jaune from '../../assets/logo/Logo_Icone_Jaune.png'
import Logo_Icone_Bleu from '../../assets/logo/Logo_Icone_Bleu.png'
import "./Footer.css"

const Footer = (props) => {
    const {footerStyle, setFooterStyle} = props

    return (
        <div className={footerStyle ? 'Footer' : 'Footer-light'}>
            <div className='footer-container'>
                <div className='logo-container'>
                    <NavLink to="/">
                        <img className='footer-logo' src={footerStyle ? Logo_Icone_Jaune :  Logo_Icone_Bleu} alt="Eurheka logo" />
                    </ NavLink>
                </div>
                <div className='navigation-container'>
                    <ul className='navigation-block'>
                        <NavLink to="/">
                            <li className='navigation-list'>Accueil</li>
                        </ NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>Prestations</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>Bibliothèques</li>
                        </NavLink>
                    </ul>
                    <ul className='navigation-block'>
                        <NavLink to="/">
                            <li className='navigation-list'>Contact / Avis</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>Connexion</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>Conditions</li>
                        </NavLink>
                    </ul>
                    <ul className='navigation-block'>
                        <NavLink to="/">
                            <li className='navigation-list'>Conditions générales</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>Conditions</li>
                        </NavLink>
                        <NavLink to="/">
                            <li className='navigation-list'>A propos</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='socials'>
                    <div className='icons-container'>
                        <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google fa-2xl"></i></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f fa-2xl"></i></a>
                        
                    </div>
                    <div className='icons-container'>
                        <a href="https://fr.linkedin.com/company/eurheka-estellelorusso" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in fa-2xl"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer