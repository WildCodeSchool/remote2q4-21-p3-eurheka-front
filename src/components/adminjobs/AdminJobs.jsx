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
    const [jobCategories, setJobCategories] = useState([]);
    const [jobCategory, setJobCategory] = useState(1);

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
                });
        }
        getCategories();
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
        formData.append('cat_job', jobCategory);
        const url = `${process.env.REACT_APP_API_URL}job/`;
        axios
            .post(url, formData, { withCredentials: true })
            .then((result) => {
                if (result.status === 201) {
                    setReload(!reload);
                }
            })
            .catch((err) => {
                if (err.status === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
    }

    return (
        <div className='AdminJobs'>
            <div className='JobAdminTitle'>Gérer les offres d'emploi</div>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('JobAdminBloc')}></i>
            <div className="JobAdminBloc BlocHidden" id="JobAdminBloc">
                
                <div className="ExistingJob">
                    <div className="ExistingJobTitle">Offres d'emploi existantes</div>
                    <AdminJobContainer
                    reload={reload}
                    setReload={setReload}
                    />
                </div>

                <div className="CreateJob">
                    <div className="CreateJobTitle" >Ajouter une offre d'emploi</div>
                    <div className="duoCreateJob">
                        <label htmlFor="nameJob" className='LabelJob'>Nom de l'offre : </label>
                        <input type="text" id="nameJob" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="duoCreateJob">
                        <label htmlFor="jobType" className='LabelJob'>Type d'offre : </label>
                        <select id="jobType" value={jobType} onChange={(e) => setJobtype(e.target.value)}>
                            {jobTypes && jobTypes.map((jobItem) => {
                                return (
                                    <option value={jobItem.id_offer_type} key={jobItem.id_offer_type}>{jobItem.name_offer}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <div className="duoCreateJob">
                        <label htmlFor="jobCategory" className='LabelJob'>Catégorie de l'offre : </label>
                        <select id="jobCategory" value={jobCategory} onChange={(e) => setJobCategory(e.target.value)}>
                            {jobCategories && jobCategories.map((CategoryItem) => {
                                return (
                                    <option value={CategoryItem.id_job_category} key={CategoryItem.id_job_category}>{CategoryItem.name}</option>
                                )
                            })
                            }
                        </select>
                    </div> 
                    <FileUploader className="DownloadFile" handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" />
                    <input type="button" value="Ajouter" onClick={addJob} className='AddJobBtn' />
                </div>
            </div>
        </div>
    )
}

export default AdminJobs
