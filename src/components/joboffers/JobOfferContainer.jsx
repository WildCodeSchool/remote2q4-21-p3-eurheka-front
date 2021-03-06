import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import './JobOfferContainer.scss';

const JobOfferContainer = ({ jobs }) => {
    const [jobCategories, setJobCategories] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [jobCategory, setJobCategory] = useState(0);
    const [jobType, setJobtype] = useState(0);

    useEffect(() => {
        const getTypes = async () => {
            const url = `${process.env.REACT_APP_API_URL}job/offertype/`;
            await axios
                .get(url, { withCredentials: true })
                .then((result) => {
                    if (result.status === 200) {
                        setJobTypes(result.data)
                    }
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }

        getTypes();

    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const url = `${process.env.REACT_APP_API_URL}job/category/`;
            await axios
                .get(url, { withCredentials: true })
                .then((result) => {
                    if (result.status === 200) {
                        setJobCategories(result.data)
                    }
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getCategories();
    }, []);

    return (
        <div className='JobOfferContainer'>
            <h2>Liste des offres d'emploi</h2>
            <div className="JobSelectors">
                <label htmlFor="jobType" className='LabelNewJobAdmin'>Type de contrat :
                    <div>
                        <select id="jobType" value={jobType} onChange={(e) => setJobtype(e.target.value)} className="selector">
                            <option value="0" key="0" className="selectorList">Tous</option>
                            {jobTypes && jobTypes.map((jobItem) => {
                                return (
                                    <option value={jobItem.id_offer_type} key={jobItem.id_offer_type} className="selectorList">{jobItem.name_offer}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                </label>
                <label htmlFor="jobCategory" className='LabelNewJobAdmin'>Secteur d'activité :
                    <div>
                        <select id="jobCategory" value={jobCategory} onChange={(e) => setJobCategory(e.target.value)} className="selector">
                            <option value="0" key="0" className="selectorList">Tous</option>
                            {jobCategories && jobCategories.map((CategoryItem) => {
                                return (
                                    <option value={CategoryItem.id_job_category} key={CategoryItem.id_job_category} className="selectorList">{CategoryItem.name}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                </label>
            </div>
            <JobList jobsList={jobs}
                jobCategory={jobCategory}
                jobType={jobType} />
        </div>
    )
}

export default JobOfferContainer
