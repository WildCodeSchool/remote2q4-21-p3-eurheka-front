import React from 'react'
import './ServiceCard.scss'

export const ServiceCard = () => {
    return (
        <div className='ServiceCard'>
            <h2 className='serviceCardTitle'>Réussir son embauche</h2>
            <h3 className='serviceCardSubTitle'>Comment bien préparer et réussir son embauche ?</h3>
            <ul className='serviceDescriptionListOn'>
                <li>Se renseigner</li>
                <li>Se présenter</li>
                <li>Se renseigner</li>
                <li>Se présenter</li>
                <li>Se renseigner</li>
                <li>Se présenter</li>
                <li>Se renseigner</li>
                <li>Se présenter</li>
            </ul>
            <button className='serviceDescriptionListOn'>bouton</button>
        </div>
    )
}
