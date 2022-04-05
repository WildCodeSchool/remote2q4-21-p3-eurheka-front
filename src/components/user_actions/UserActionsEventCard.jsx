import axios from 'axios';
import React,{useState,useEffect} from 'react';

import './UserActionsEventCard.scss'

const UserActionsEventCard = () => {
    const [events,setEvents]=useState();

    useEffect(()=>{
        const getEvents=async()=>{
            const url = `${process.env.REACT_APP_API_URL}event/nextEvent/`;
            await axios
                .get(url,{withCredentials:true})
                .then((result)=>{
                    setEvents(result.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        };
        getEvents();
    },[]);
    
    return (  
        <div className='UserActionsEventCard'>
            <h2 className='card-title'>Évènements</h2>
            <div className='event-container'>
                <h3 className='event-title'>{events&&events.name}</h3>
                <h4 className='event-type'>{events&&events.category_name}</h4>
            </div>
            <p className='clock-text'><i className="fa-solid fa-clock"></i> {events&&events.date_eventFR}</p>
        </div>
    )
}

export default UserActionsEventCard