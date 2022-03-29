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
                    console.log(opinions);
                })
                .catch((err) => {
                    console.log(err);
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getOpinions();
    }, [reload]);

    const handleRemove = (idOpinion) => {
        const url = `${process.env.REACT_APP_API_URL}opinion/${idOpinion}`;
        axios.delete(url, { withCredentials: true })
            .then((response) => {
                if (response.status === 200) {
                    setReload(!reload);
                }
            })
            .catch((err) => {
                console.log(err.response);
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            });
    };

    return (
        <div className='OpinionAdminContainer'>
            {opinions.map((opinion) =>{
                return(
                    <div key={opinion.id_opinion}>
                        <p>{opinion.author}</p>
                        <p>{opinion.opinion}</p>
                        <p>{opinion.is_valid}</p>
                        <button onClick={() => handleRemove(opinion.id_opinion)}>Supprimer</button>
                    </div>
                )
            })}
        </div>
    )
}

export default OpinionAdminContainer