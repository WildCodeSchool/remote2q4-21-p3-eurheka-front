import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserActionInscription.scss'

const UserActionInscription = () => {
    
    return (
        <div className='UserActionInscription'>
            <h2 className='card-title'>Postuler</h2>
            <div className='buttonCard-logo-block'>
                <i className="fa-solid fa-user-plus fa-2xl"></i>
            </div>
            <p className='card-result'>---</p>
            <p className='card-description'>Rejoignez-nous pour soumettre votre CV</p>
            <NavLink to="/login"><button className='card-button'>S'inscrire</button></NavLink>
        </div>
    )
}

export default UserActionInscription