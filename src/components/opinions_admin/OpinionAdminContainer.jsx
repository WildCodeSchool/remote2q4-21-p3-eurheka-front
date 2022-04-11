import React, { useState, useEffect } from 'react';
import axios from "axios";
import './OpinionAdminContainer.scss'

const OpinionAdminContainer = () => {
    const [opinions, setOpinions] = useState([])
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const getOpinions = async () => {
            const url = `${process.env.REACT_APP_API_URL}opinion/`;
            await axios.get(url, { withCredentials: true }) 
                .then((result) => result.data)
                .then((data) => {
                    setOpinions(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getOpinions();
    }, [reload]);

    const handleUpdate = (idOpinion) => {
        if(window.confirm('Voulez-vous valider cet avis ?')){
            const url = `${process.env.REACT_APP_API_URL}opinion/${idOpinion}`;
            axios.put(url, { is_valid: true }, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        setReload(!reload);
                    }
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                    if (HTTPError === 500 && err.response.data.error === 1451) {
                        alert(err.response.data.message);
                    }
                });
        }
    };

    const handleRemove = (idOpinion) => {
        if(window.confirm('Voulez-vous supprimer cet avis ?')){
            const url = `${process.env.REACT_APP_API_URL}opinion/${idOpinion}`;
            axios.delete(url, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        setReload(!reload);
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
    };

    return (
        <div className='OpinionAdminContainer'>
            {opinions.map((opinion) =>{
                return(
                    <div key={opinion.id_opinion} className='opinionContainer'>
                        <p className='opinionAuthor'>{opinion.author}</p>
                        <p className='opinionDetail'>{opinion.opinion}</p>
                        {opinion.is_valid ? <i className="fa-solid fa-check opinionIsValid"></i> : ''}
                        {!opinion.is_valid ? <button onClick={() => handleUpdate(opinion.id_opinion)} className='opinionIsValidButton'>Valider</button> : ''}
                        <button onClick={() => handleRemove(opinion.id_opinion)} className='opinionDeleteButton'>Supprimer</button>
                    </div>
                )
            })}
        </div>
    )
}

export default OpinionAdminContainer