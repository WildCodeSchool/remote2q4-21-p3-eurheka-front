import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './CandidateSettings.css';

const CandidateSettings = (props) => {

    return (
        <div className='CandidateSettings'>
            <div className='titleSettings'>Gérer mes préférences</div>
            <div className='detailSettings'>
                <div className='appointmentSettings'>
                    <div className='titleAppointments'></div>
                </div>
                <div className='opinionSettings'>
                <div className='titleOpinions'>Mes avis</div>
                    <div className='allOpinions'>Ici mes avis </div>
                </div>
            </div> 
        </div>
    )
}

export default CandidateSettings;