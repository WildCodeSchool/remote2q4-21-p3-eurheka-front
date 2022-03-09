import React from 'react'
import './UserActionsUploadCard.scss'

const UserActionsUploadCard = () => {
    return (
        <div className='UserActionsUploadCard'>
            <h2 className='card-title'>Postuler</h2>
            <div className='uploadCard-logo-block'>
                <i className="fa-solid fa-download fa-2xl"></i>
            </div>
            <p className='card-description'>Drag & Drop ton CV ici</p>
            <p className='upload-link'>ou choisis un fichier</p>
        </div>
    )
}

export default UserActionsUploadCard