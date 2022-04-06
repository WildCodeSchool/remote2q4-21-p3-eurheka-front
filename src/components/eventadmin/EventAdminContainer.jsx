import axios from 'axios';
import React,{useState,useEffect, isValidElement} from 'react';
import './EventAdminContainer.scss';

const EventAdminContainer = ({reload, setReload}) => {
    const [events,setEvents]=useState([]);
    
    useEffect(()=>{
        const getEvents=async()=>{
            const url= `${process.env.REACT_APP_API_URL}event/admin/`;
            await axios.get(url,{withCredentials:true})
                .then((result)=>result.data)
                .then((data)=>{
                    setEvents(data);
                })
                .catch((err)=>{
                    console.log(err);
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                })
        }
        getEvents();
    },[reload]);

    const HandleDelete=(id)=>{
        if(window.confirm('Voulez vous supprimer cet évènement ?')){
            const url= `${process.env.REACT_APP_API_URL}event/${id}`;
            axios.delete(url,{withCredentials:true})
            .then((res)=>{
                if (res.status===204){
                    setReload(!reload);
                }
            })
            .catch((err) => {
                console.log(err);
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            });
        }
    }

    return (
        <div className='EventAdminContainer'>
            <ul className="EventAdminContainerList">
                {events&&events.map((event)=>{
                    return(
                        <li key={event.id_event}>
                            <span  className={event.isPassed? 'strikeEvent PassedEvent EventAdminListItem':'EventAdminListItem'}> {event.name} - {event.category_name} - {event.date_event}</span>
                            <input className='SuppressEventBtn'type="button" value="Supprimer" onClick={()=>HandleDelete(event.id_event)}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EventAdminContainer
