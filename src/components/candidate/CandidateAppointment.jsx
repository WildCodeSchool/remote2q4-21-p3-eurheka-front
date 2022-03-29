import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CandidateAppointment.css';
import CreateAppt from "./CreateAppt.jsx";
import ShowAppt from "./ShowAppt.jsx";

const CandidateAppointment = (props) => {
    const [reload, setReload] = useState(false);

    return (
        <div className='CandidateAppointment'>
            <div className='titleAppt'>Gérer mes rendez-vous</div>
            <div className='detailAppt'>
                <div className='myAppt'>
                    <div className='titleMyAppt'>Mes rendez-vous</div>
                    <ShowAppt
                    reload={reload}
                    setReload={setReload}/>
                </div>
                <div className='newAppt'>
                    <div className='titleNewAppt'>Demander un rendez-vous</div>
                    <CreateAppt 
                    reload={reload}
                    setReload={setReload}/>
                </div>
            </div>         
        </div>
    )
}

export default CandidateAppointment;