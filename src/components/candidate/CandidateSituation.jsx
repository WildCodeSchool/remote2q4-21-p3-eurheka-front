import axios from 'axios';
import React, { useState, useEffect } from 'react';
/*import './CandidateSettings.css';*/

const CandidateSituation = (uId, user) => {

    const [in_post, setIn_post] = useState(true);
    const [freeDate, setFreeDate] = useState('');
    const [jobDate, setJobDate] = useState('');
    const [enterpriseName, setEnterpriseName] = useState('');
    const [jobName, setJobName] = useState('');
    const [jobSearch, setJobSearch] = useState(false);

    useEffect(() => {
        setIn_post(user.in_post);
        setFreeDate(user.free_date);
        setEnterpriseName(user.enterprise_name);
        setJobDate(user.job_date);
        setJobName(user.job_name);
        setJobSearch(user.job_search);        
    }, [])

    const submitClick = (e) => {
        e.preventDefault();
        const newUser = {
            in_post: in_post,
            freeDate: freeDate,
            jobDate: jobDate,
            enterpriseName: enterpriseName,
            jobName: jobName,
            jobSearch: jobSearch,
        }
        const url = `${process.env.REACT_APP_API_URL}users/${uId}`;
            axios.put(url, newUser)
                .then(function (response) {
                    if (response.status === 201) {
                        const userId = response.data.userId;
                        
                    }
                })
                .catch(function (error) {
                    const HTTPError = error.response.status;
                    let docName = '';
                    let message = '';
                    switch (HTTPError) {
                        case 409:
                            console.log('User already exist');
                            /*console.log(error.response.data);
                            docName = 'mailError';
                            message = "L'adresse mail existe déjà";
                            let errorDiv = document.getElementById(docName);
                            errorDiv.innerHTML = message;
                            errorDiv.classList.add('ErrorDisplay');
                            break;*/
                        case 422:
                            console.log('Erreur de validation');
                            /*console.log(error.response.data);
                            const ErrorArray = error.response.data;
                            ErrorArray.forEach((error) => {
                                console.log(error);
                                if (error.includes('mail')) {
                                    docName = 'mailError';
                                    message = "L'adresse mail n'est pas valide";
                                }
                                if (error.includes('password')) {
                                    docName = "passwordError";
                                    message = "Le mot de passe doit comporter 8 caractères minimum";
                                }
                                if (error.includes('firstname')) {
                                    docName = 'firstNameError';
                                    message = "Le prénom d'utilisateur n'est pas valide"
                                }
                                if (error.includes('lastname')) {
                                    docName = 'lastNameError';
                                    message = "Le nom d'utilisateur n'est pas valide"
                                }
                                let errorDiv = document.getElementById(docName);
                                errorDiv.innerHTML = message;
                                errorDiv.classList.add('ErrorDisplay');
                            })*/
                            break;
                        default: console.log('Unknown error');
                    }
                });
            } 
            else {
                alert ('Veuillez saisir toutes les informations');
            }
    }

    return (
        <div className='CandidateSituation'>
            Here are the candidate situtation            
        </div>
    )
}

export default CandidateSituation