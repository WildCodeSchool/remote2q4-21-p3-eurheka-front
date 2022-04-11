import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserIdContext } from  '../../context/AppContext';
import './UserActionInscription.scss'

const UserActionInscription = () => {

    const {scrollToTop}=useContext( UserIdContext);
    
    return (
        <div className='UserActionInscription'>
            <h2 className='card-title'>Postuler</h2>
            <div className='buttonCard-logo-block'>
                <i className="fa-solid fa-user-plus fa-2xl"></i>
            </div>
            <p className='card-result'>---</p>
            <p className='card-description'>Rejoignez-nous pour soumettre votre CV</p>
            <NavLink to="/login"><button className='card-button' onClick={scrollToTop}>S'inscrire</button></NavLink>
        </div>
    )
}

export default UserActionInscription