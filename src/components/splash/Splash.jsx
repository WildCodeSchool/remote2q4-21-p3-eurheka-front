import React from "react";
import logo_splash from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png'
import './Splash.scss'

const Splash = () => {
    const scrollToMenu = () => {
        let pageHeight = window.innerHeight;
        window.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='Splash'>
            <img src={logo_splash} alt="logo_eurheka" className='logo'/>
            <h1 className='splashTitle'>Accompagnement et transformation</h1>
            <div className='description'>
                <p className='paragraph'>Après une carrière toute tracée dans le monde de l'industrie et des ressources humaines, j’ai décidé de mettre à profit mon expérience et mes compétences.</p>
                <p className='paragraph'>Vous avez des questions liées au monde du travail, vous avez besoin d’être accompagné dans votre développement ?</p>
                <p className='paragraph'>N’hésitez-pas à échanger avec moi pour identifier votre projet d’entreprise ou vos projets individuels.</p>
                <p className='name'>Estelle</p>
            </div>
            <div className='buttonContainer'>
                <button className='button' onClick={scrollToMenu}>Espace Candidat</button>
                <button className='button'>Espace Entreprise</button>
            </div>
        </div>
    )
}

export default Splash