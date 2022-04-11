import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobOfferContainer from '../../components/joboffers/JobOfferContainer';
import './JobOffer.scss';

const JobOffer = () => {
    const [jobOffers,setJobOffers]=useState([]);

    useEffect(()=>{
        const getJobOffers=async()=>{
            const url = `${process.env.REACT_APP_API_URL}job/`; 
            await axios
                .get(url,{withCredentials:true})
                .then((result)=>{
                    setJobOffers(result.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        getJobOffers();
    },[]);

    return (
        <div className='JobOffer'>
            <div className="JobOffer-header">
                <h2>Espace Candidat</h2>
            </div>
            <div className="main-title">
                <h1>Offres d'emploi</h1>
                <p>Accédez à nos offres d'emploi.</p>
            </div>
                <div className='jobs-container'>
                    <JobOfferContainer 
                        jobs={jobOffers} />
                </div>
        </div>
    )
}

export default JobOffer
