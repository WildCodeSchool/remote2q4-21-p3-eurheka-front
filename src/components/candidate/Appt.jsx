import axios from 'axios';
import React, { useState } from 'react';
import  "./Appt.css";

const Appt = ({ idAppt, reload, setReload, name, date,valid}) => {

    const deleteAppt = async() =>{
        const url = `${process.env.REACT_APP_API_URL}event/${idAppt}`;
        await axios.delete(url, {withCredentials: true})
        .then((res) => {
            if (res.status === 204){
                setReload (!reload);
            }            
        })
        .catch((err) => {
            const HTTPError = err.status;
            if(HTTPError===500){
                alert('Une erreur est survenue.')
            }
            if(HTTPError===404){
                alert("Le rendez-vous spécifié n'existe pas")
            }
            if (HTTPError === 401) {
                alert('Vous avez été déconnecté.');
                window.location = '/';
            }
        })
    }      

    return (
        <div className='Appt'>  
            <div className='containerAppt'>
                <p className={valid?'contentAppt ApptOK':'contentAppt'}>{name}</p>
                <p className={valid?'contentAppt ApptOK':'contentAppt'}>{date}</p>
                <button className='ApptBtn' onClick={deleteAppt}>Supprimer</button>
            </div>        
        </div>
    )
}

export default Appt;