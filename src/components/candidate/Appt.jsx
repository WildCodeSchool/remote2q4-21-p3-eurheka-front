import axios from 'axios';
import React, { useState } from 'react';
import  "./Appt.css";

const Appt = ({ idAppt, appts, setAppts, reload, setReload, name, date}) => {

    const deleteAppt = async() =>{
        const url = `${process.env.REACT_APP_API_URL}event/${idAppt}`;
        await axios.delete(url, {withCredentials: true})
        .then((res) => {
            console.log(res.data);
            if (res.status === 204){
                setReload (!reload);
            }            
        })
        .catch((err) => {
            console.log(err);
                const HTTPError = err.status;
                if(HTTPError===500){
                    alert('Une erreur est survenue.')
                }
                if(HTTPError===404){
                    alert("Le rendez-vous spécifié n'existe pas")
                }
        })
    }      

    return (
        <div className='Appt'>  
            <div className='containerAppt'>
                <p>{name}</p>
                <p>{date}</p>
                <button onClick={deleteAppt}>Supprimer</button>
            </div>        
        </div>
    )
}

export default Appt;