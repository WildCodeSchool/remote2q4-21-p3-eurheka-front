import React from 'react'
import logo_splash from '../../assets/logos/Logo_Eurheka_Entier_Logo_Bleu.png'
import './Splash.scss'

const Splash = () => {
    return (
        <div className='Splash'>
            <img src={logo_splash} alt="logo_eurheka" className='logo'/>
            <h1 className='splashTitle'>Accompagnement et transformation</h1>
            <div className='buttonContainer'>
                <button className='button'>Espace Candidat</button>
                <button className='button'>Espace Entreprise</button>
            </div>
        </div>
    )
}

export default Splash