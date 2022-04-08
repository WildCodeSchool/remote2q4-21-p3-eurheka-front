import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import './UserActionsButtonCard.scss';

const UserActionsButtonCard = () => {
    const [nbOffer,setNbOffer]=useState(0);
    useEffect(()=>{
        const getCount=async()=>{
            const url = `${process.env.REACT_APP_API_URL}job/count/`;
            await axios
                .get(url,{withCredentials:true})
                .then((result)=>{
                    const number=result.data.nb;
                    setNbOffer(number);
                })
                .catch((err)=>{
                    
                })
        }
        getCount();
    },[]);
    return (
        <div className='UserActionsButtonCard'>
            <h2 className='card-title'>Les offres d'emploi</h2>
            <div className='buttonCard-logo-block'>
                <i className="fa-solid fa-spinner fa-2xl"></i>
            </div>
            <p className='card-result'>{nbOffer} offre{nbOffer===0?'':'s'} d'emploi disponible{nbOffer===0?'':'s'}</p>
            <p className='card-description'>Trouvez votre futur job parmi nos offres d'emploi disponibles</p>
            { nbOffer===0?'':<NavLink to="/emploi"><button className='card-button'>Consulter</button></NavLink> }
        </div>
    )
}

export default UserActionsButtonCard