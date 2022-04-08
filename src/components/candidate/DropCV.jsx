import axios from 'axios';
import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import "./DropCV.css";

const DropCV = ({ reload, setReload }) => {
    const [file, setFile] = useState(null);
    const fileTypes = ["PDF"];

    const handleChange = (file) => {
        setFile(file);
    };

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        const url = `${process.env.REACT_APP_API_URL}cv/`;
        axios.post(url, formData, { withCredentials: true })
            .then((res) => {
                if (res.status === 201) {
                    setReload(!reload)
                    alert("Votre Cv a bien été déposé")
                    setFile(null)
                }
            })
            .catch((err) => {
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
    };

    return (
        <div className='DropCV'>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" />
            <button className='validateCV' onClick={handleSubmit}>Enregistrer ce CV</button>
        </div>
    )
}

export default DropCV;