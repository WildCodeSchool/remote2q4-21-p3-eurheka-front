import React from 'react'
import './UserActionsButtonCard.scss'

const UserActionsButtonCard = () => {
    return (
        <div className='UserActionsButtonCard'>
            <h2 className='card-title'>Les offres d'emploi</h2>
            <div className='buttonCard-logo-block'>
                <i className="fa-solid fa-spinner fa-2xl"></i>
            </div>
            <p className='card-result'>---</p>
            <p className='card-description'>A venir</p>
            {/* <button className='card-button'>Consulter</button> */}
        </div>
    )
}

export default UserActionsButtonCard