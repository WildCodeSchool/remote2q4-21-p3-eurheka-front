import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserIdContext } from '../../context/AppContext';
import Logo_Icone_Jaune from '../../assets/logo/Logo_Icone_Jaune.png'
import Logo_Icone_Bleu from '../../assets/logo/Logo_Icone_Bleu.png'
import conditions from '../../assets/pdf/conditions.pdf'
import politique from '../../assets/pdf/politique.pdf'
import "./Footer.css"

const Footer = (props) => {
    const { footerStyle } = props
    const { scrollToTop } = useContext(UserIdContext);

    return (
        <div className={footerStyle ? 'Footer' : 'Footer-light'}>
            <div className='footer-container'>
                <div className='logoFooterContainer'>
                    <NavLink to="/" className='logo-container-bis'>
                        <img className='footer-logo' src={footerStyle ? Logo_Icone_Jaune : Logo_Icone_Bleu} alt="Eurheka logo" onClick={scrollToTop} />
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
                            <li className='navigation-list' onClick={scrollToTop}>Contact</li>
                        </NavLink>
                        <NavLink to="/login">
                            <li className='navigation-list' onClick={scrollToTop}>Connexion</li>
                        </NavLink>
                        <NavLink to="/a-propos">
                            <li className='navigation-list' onClick={scrollToTop}>A propos</li>
                        </NavLink>
                    </ul>
                    <ul className='navigation-block'>

                        <li className='navigation-list'><a target="_blank" rel="noopener noreferrer" href={conditions}>Conditions générales</a></li>
                        <li className='navigation-list'><a target="_blank" rel="noopener noreferrer" href={politique}>Politique de confidentialité</a></li>

                    </ul>
                </div>
                <div className='socials'>
                    <div className='icons-container'>
                        <div className='icons-animation'><a href="mailto: eurheka.contact@gmail.com" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-google fa-2xl"></i></a></div>
                        <div className='icons-animation'><a href="https://www.facebook.com/eurheka" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-facebook-f fa-2xl"></i></a></div>
                    </div>
                    <div className='icons-container'>
                        <div className='icons-animation'><a href="https://fr.linkedin.com/company/eurheka-estellelorusso" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-linkedin-in fa-2xl"></i></a></div>
                        <div className='icons-animation'><a href="https://www.instagram.com/eurheka_/" target="_blank" rel="noopener noreferrer" className='rs-buttons'><i className="fa-brands fa-instagram fa-2xl"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer