import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo_splash from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png'
import './Splash.scss'

const Splash = () => {
    const [view, setView] = useState(true)
    const scrollToMenu = async () => {
        setView(!view)
        let pageHeight = window.innerHeight;
        await window.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth'
        });
        
        console.log(view)
    };

    return (
        <div className={view ? 'Splash' : 'splashNone'}>
            <img src={logo_splash} alt="logo_eurheka" className='logo'/>
            <h1 className='splashTitle'>Accompagnement et transformation</h1>
            <div className='buttonContainer'>
                <button className='button' onClick={scrollToMenu}>Espace Candidat</button>
                <button className='button'>Espace Entreprise</button>
            </div>
        </div>
    )
}

export default Splash