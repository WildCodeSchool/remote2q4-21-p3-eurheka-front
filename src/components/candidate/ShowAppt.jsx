import axios from 'axios';
import React, { useState, useEffect } from 'react';
import  "./ShowAppt.css";
import Appt from './Appt';

const ShowAppt = ({uId, reload, setReload}) => {
    const [appts, setAppts] = useState();

    useEffect(()=>{
        const getAppts = async() =>{
            const url = `${process.env.REACT_APP_API_URL}/event/myevents`;
            await axios.get(url, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                setAppts(res.data);
            })
            .catch((err) => {
                console.log(err.data)
                const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
            })
        }
        getAppts();
    },[reload]);

    return (
        <div className='ShowAppt'>
            {appts && 
            appts.map((appt) => {
                return (
                    <Appt 
                    name={appt.name}
                    idCat={appt.category}
                    date={appt.event}
                    idAppt={appt.eventid}
                    key={appt.eventid}
                    reload={reload}
                    setReload={setReload}/>
                )
            })}
                
        </div>
    )
}

export default ShowAppt;