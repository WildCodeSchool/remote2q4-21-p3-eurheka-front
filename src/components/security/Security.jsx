import React from 'react';
import './Security.css';
import arrows from '../../assets/security-icons/arrows.png';
import lock from '../../assets/security-icons/lock.png';
import note from '../../assets/security-icons/note.png';
import spiral from '../../assets/security-icons/spiral.png';

const Security = () => {
    return (
        <div className='Security-container'>
                <div className='Security-box'>
                    <div className='Img-box'>
                        <img src={lock} alt="lock" className="Security-img"></img>
                    </div>
                    <p className='Security-title'>Sécurité</p>
                    <p className='Security-text'>Garantie sécurité</p>
                </div>
                <div className='Security-box'>
                    <div className='Img-box'>
                        <img className="Security-img" src={arrows} alt="arrows"></img>
                    </div>
                    <p className='Security-title'>Sécurité</p>
                    <p className='Security-text'>Garantie sécurité</p>
                </div>
                <div className='Security-box'>
                    <div className='Img-box'>
                        <img className='Security-img' src={note} alt="note"></img>
                    </div>
                    <p className='Security-title'>Sécurité</p>
                    <p className='Security-text'>Garantie sécurité</p>
                </div>
                <div className='Security-box'>
                    <div className='Img-box'>
                        <img className='Security-img' src={spiral} alt="spiral"></img>
                    </div>
                    <p className='Security-title'>Sécurité</p>
                    <p className='Security-text'>Garantie sécurité</p>
                </div>
        </div>
    )
}

export default Security;