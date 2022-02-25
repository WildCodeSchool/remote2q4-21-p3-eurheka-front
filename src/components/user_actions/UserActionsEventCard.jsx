import React from 'react'
import './UserActionsEventCard.scss'

const UserActionsEventCard = () => {
    return (
        <div className='UserActionsEventCard'>
            <h2 className='card-title'>Évènements</h2>
            <div className='event-container'>
                <h3 className='event-title'>Objectif Premier Emploi</h3>
                <h4 className='event-type'>Web Atelier</h4>
            </div>
            <p><i className="fa-solid fa-clock"></i> De 10H00 à 12H00</p>
            <p className='place'><i className="fa-solid fa-location-arrow"></i> À distance</p>
        </div>
    )
}

export default UserActionsEventCard