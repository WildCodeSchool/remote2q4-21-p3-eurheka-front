import axios from 'axios';
import React, { useState, useEffect } from 'react';
import  "./CreateAppt.css";

const CreateAppt = ({uId, reload, setReload, appts, setAppts}) => {
    
    const [name, setName] = useState();
    const [date, setDate] = useState('');  

    const handleSubmit = (e) => {
        const url = `${process.env.REACT_APP_API_URL}event`;
        const newAppt = {
            name: name,
            date: date,
            category: 1,
        }
        axios.post(url, newAppt, { withCredentials: true })
        .then((res) => {
            console.log(res)
            if (res.status === 201) {
                setReload(!reload)
                alert("Votre demande de rendez-vous est enregistrée")
                            }
        })
        .catch((err) => {
            console.log(err)
        }) 
    };

    return (
        <div className='CreateAppt'>
            <div className='typeAppt'>
                <label htmlFor="name" className='labelAppt'>Type de rendez-vous</label>
                <input className='createApptInput' type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='dateAppt'>
                <label htmlFor="date" className='labelAppt'>Date du rendez-vous</label>
                <input className='dateAppt' type="datetime-local" id="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
            </div>
            <div className='deleteAppt'>
                <button className='deleteApptButton' onClick={handleSubmit}>Enregistrer cette demande</button>
            </div>
        </div>
    )
}

export default CreateAppt;