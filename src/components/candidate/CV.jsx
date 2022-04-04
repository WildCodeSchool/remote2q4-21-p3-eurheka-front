import axios from 'axios';
import React, { useState } from 'react';
import  "./CV.css";
import file from "../../assets/files-icons/file.png"

const CV = ({path, idCV, cvs, setCVs, reload, setReload}) => {

    let newName ="";
    const getFileName = (fileName) => {
        if (fileName) {
            newName = fileName.split("_")[1];
            /*console.log(newName)*/
        }
    }
    getFileName(path);

    const deleteCVs = async() =>{
        const url = `${process.env.REACT_APP_API_URL}cv/${idCV}`;
        await axios.delete(url, {withCredentials: true})
        .then((res) => {
            console.log(res.data);
            if (res.status === 204){
                setReload (!reload);
            }            
        })
        .catch((err) => {
            console.log(err);
                const HTTPError = err.status;
                if(HTTPError===500){
                    alert('Une erreur est survenue.')
                }
                if(HTTPError===404){
                    alert("Le document spécifié n'existe pas")
                }
        })
    }      

    return (
        <div className='CV'>            
            <a href={`${process.env.REACT_APP_URL}${path}`} target="_blank">
                <div className='containerCV'>
                    <img className='imgCV' src={file} alt='fileicon'></img>
                    <div className='actionsCV'>
                        <p className='nameCV'>{newName}</p>
                        
                    </div>
                </div>
            </a>
            <button 
            className='suppressOneCV'
            onClick={deleteCVs}>X</button>                       
        </div>
    )
}

export default CV;