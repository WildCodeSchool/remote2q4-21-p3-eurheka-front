import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CV from "./CV";
import  "./ShowCV.css";

const ShowCV = ({uId, reload, setReload}) => {
    const [cvs, setCVs] = useState();

    useEffect(()=>{
        const getCVs = async() =>{
            const url = `${process.env.REACT_APP_API_URL}cv`;
            await axios.get(url, {withCredentials: true})
            .then((res) => {
                console.log(res.data);
                setCVs(res.data);
            })
            .catch((err) => {
                console.log(err.data)
                const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
            })
        }
        getCVs();
    },[reload]);

    return (
        <div className='ShowCV'>
            {cvs && 
            cvs.map((cv) => {
                return (
                    <CV 
                    path={cv.path}
                    idCV={cv.id_cv}
                    key={cv.id_cv}
                    reload={reload}
                    setReload={setReload}/>
                )
            })}
                
        </div>
    )
}

export default ShowCV;