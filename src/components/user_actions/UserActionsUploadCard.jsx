import React from 'react'
import { NavLink } from 'react-router-dom'
import './UserActionsUploadCard.scss'

const UserActionsUploadCard = () => {
    return (
        <div className='UserActionsUploadCard'>
                <h2 className='card-title'>Postuler</h2>
                <div className='uploadCard-logo-block'>
                    <NavLink to="/mon-profil-particulier">
                        <i className="fa-solid fa-download fa-2xl picto"></i>
                    </NavLink>
                </div>
                <p className='card-description'>Déposez votre cv sur votre profil</p>
            </div>
    )
}

export default UserActionsUploadCard