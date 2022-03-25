import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";

import './AdminJobs.scss';
import AdminJobContainer from './AdminJobContainer';

const AdminJobs = () => {
    const [jobTypes, setJobTypes] = useState([]);
    const [file, setFile] = useState(null);
    const [reload, setReload] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [name, setName] = useState('');
    const [jobType, setJobtype] = useState(1);

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
                    console.log(err);
                });
        }
        getTypes();
    }, []);

    const handleChange = (file) => {
        setFile(file);
    };

    const fileTypes = ["PDF"];

    const handleShowClick = (id) => {
        const docContainer = document.getElementById(id);
        if (!showComponent) {
            docContainer.classList.remove('BlocHidden');
        }
        else {
            docContainer.classList.add('BlocHidden');
        }
        setShowComponent(!showComponent);
    }

    const addJob = () => {
        const formData = new FormData();
        if (name === '') {
            alert("Veuillez saisir un nom pour l'offre");
            return -1;
        }
        if (file === null) {
            alert('Veuillez indiquer le document à envoyer');
            return -1;
        }
        const path = file.name; //to test
        if (name === '') {
            alert('Veuillez renseigner le nom du document');
            return -1;
        }
        formData.append('name', name);
        formData.append('file', file);
        formData.append('id_type', jobType);
        const url = `${process.env.REACT_APP_API_URL}job/`;
        axios
            .post(url, formData, { withCredentials: true })
            .then((result) => {
                if (result.status === 201) {
                    setReload(!reload);
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.status === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
    }

    return (
        <div className='AdminJobs'>
            <h2 className='JobAdminTitle'>Gérer Les offres d'emploi</h2>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('JobAdminBloc')}></i>
            <div className="JobAdminBloc BlocHidden" id="JobAdminBloc">
                <div className="NewJobContainer">
                    <h3>Ajouter une offre d'emploi</h3>
                    <label htmlFor="nameJob" className='LabelNewJobAdmin'>Nom de l'offre : <input type="text" id="nameJob" value={name} onChange={(e) => setName(e.target.value)} /></label>
                    <label htmlFor="jobType" className='LabelNewJobAdmin'>Type d'offre :
                        <select id="jobType" value={jobType} onChange={(e) => setJobtype(e.target.value)}>
                            {jobTypes && jobTypes.map((jobItem) => {
                                return (
                                    <option value={jobItem.id_offer_type} key={jobItem.id_offer_type}>{jobItem.name_offer}</option>
                                )
                            })
                            }
                        </select>
                    </label>
                    <FileUploader className="DownloadFile" handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" />
                    <input type="button" value="Ajouter" onClick={addJob} className='AddJobBtn' />
                </div>
                <AdminJobContainer
                    reload={reload}
                    setReload={setReload}
                />
            </div>
        </div>
    )
}

export default AdminJobs
