import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './CandidateSituation.css';

const CandidateSituation = (uId, user) => {

    const [in_post, setIn_post] = useState(true);
    const [freeDate, setFreeDate] = useState('');
    const [jobDate, setJobDate] = useState('');
    const [enterpriseName, setEnterpriseName] = useState('');
    const [jobName, setJobName] = useState('');
    const [jobSearch, setJobSearch] = useState(false);

    /*useEffect(() => {
        setIn_post(user.in_post);
        setFreeDate(user.free_date);
        setEnterpriseName(user.enterprise_name);
        setJobDate(user.job_date);
        setJobName(user.job_name);
        setJobSearch(user.job_search);        
    }, [])*/


    return (
        <div className='CandidateSituation'>
            <div className='titleSituation'>Ma situation professionelle</div>
            <div className='contentSituation'>
            <div className='currentSituation'>
                <div className="inputLine">
                    <label htmlFor="in_post" className="labelSituation">Je suis actuellement en poste</label>
                    <input type="checkbox" id="in_post" name="in_post" value="in_post" checked={in_post} onChange={(e) => setIn_post(e.target.checked)}
                        className="checkbox-box"></input>                   
                </div>
                <div className='inputLine'>
                    <label htmlFor="enterpriseName" className='labelSituation'>Si oui mon employeur est :</label>
                    <input className='enterpriseName' type="text" id="enterpriseName" value={enterpriseName} onChange={(e) => { setEnterpriseName(e.target.value) }} />
                </div>
                <div className='inputLine'>
                    <label htmlFor="jobName" className='labelSituation'>Intitulé de mon poste actuel :</label>
                    <input className='jobName' type="text" id="jobName" value={jobName} onChange={(e) => { setJobName(e.target.value) }} />
                </div>
            </div>      
            <div className='searchSituation'>
                <div className="inputLine">
                    <label htmlFor="jobSearch" className="labelSituation">Je suis en recherche d'emploi </label>
                    <input type="checkbox" id="jobSearch" name="jobSearch" value="jobSearch" checked={jobSearch} onChange={(e) => setJobSearch(e.target.checked)}
                        className="checkbox-box"></input>                   
                </div>
                <div className='inputLine'>
                    <label htmlFor="freeDate" className='labelSituation'>Je suis disponible à partir du :</label>
                    <input className='freeDate' type="datetime-local" id="freeDate" value={freeDate} onChange={(e) => { setFreeDate(e.target.value) }} />
                </div>
            </div>   
            </div> 
            <button className='validateSituation'>Valider mes changements</button>
        </div>
    )
}

export default CandidateSituation;