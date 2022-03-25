import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AdminJobContainer.scss';

const AdminJobContainer = ({ reload, setReload }) => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        const getOffers = async () => {
            const url = `${process.env.REACT_APP_API_URL}job/admin/`;
            await axios
                .get(url, { withCredentials: true })
                .then((result) => {
                    if (result.status === 200) {
                        setJobList(result.data)
                    }
                })
                .catch((err) => {
                    console.log(err);
                    if (err.status === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getOffers();
    }, [reload]);

    const handleDeleteJob = (id) => {
        if (window.confirm("Voulez vous supprimer cette offre ?")) {
            const url = `${process.env.REACT_APP_API_URL}job/${id}`;
            axios
                .delete(url, { withCredentials: true })
                .then((result) => {
                    if (result.status === 204) {
                        setReload(!reload);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    if (err.status === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
    }

    return (
        <div className='AdminJobContainer'>
            <h3>Liste des offres d'emploi présentes</h3>
            <ul className="AdminJobList">
                {jobList && jobList.map((jobItem) => {
                    return (
                        <li key={jobItem.id_job}
                            className="AdminJobItem">
                            <a href={`${process.env.REACT_APP_URL}${jobItem.path}`} target="_blank">{jobItem.name}</a> - {jobItem.name_offer}
                            <input
                                type="button"
                                value="Supprimer"
                                onClick={() => handleDeleteJob(jobItem.id_job)}
                                className="BtnDeleteJob" /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AdminJobContainer
