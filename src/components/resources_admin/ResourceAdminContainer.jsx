import React, { useState, useEffect } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './ResourceAdminContainer.scss';
import ResourceAdminModal from './ResourceAdminModal';
import axios from 'axios';
import filePic from "../../assets/files-icons/file.png";

const ResourceAdminContainer = ({ catDoc, docs, setReload, reload,reloadTheme }) => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [pathVideo, setPathVideo] = useState('');
    const [visibility, setVisibility] = useState(1);
    const [displayId, setDisplayId] = useState(null);
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchTheme = () => {
            const url = `${process.env.REACT_APP_API_URL}theme/admin/`;
            axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setThemes(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        fetchTheme();
    }, [reloadTheme]);

    const handleModal = (id, displayModal) => {
        const modalBox = document.getElementById('resourceModal');
        if (displayModal) {
            setDisplayId(id);
            modalBox.classList.remove('ResourceModal');
            modalBox.classList.add('ShowResourceModal');
        }
        else {
            modalBox.classList.remove('ShowResourceModal');
            modalBox.classList.add('ResourceModal');
        }
    }

    //Handling file change
    const handleChange = (file) => {
        setFile(file);
    };

    const fileTypes = ["PDF"];

    const handleCheckTheme = (e) => {
        const id=parseInt(e.target.value);
        const theTheme = themes.find((item) =>item.idTheme === id);
        let checked = !theTheme.checked;
        setThemes(themes.map(item => item.idTheme === id ? { ...theTheme, checked } : item));
    }

    //Handling submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        let pathAPI='';
        switch(catDoc){
            case 1 : pathAPI='video/';
                break;
            case 2 : pathAPI='doc/';
                break;
            case 3 : pathAPI='job/';
                break;
            default : pathAPI='video/';
        }
        //checking if all informations are sets
        if (catDoc === 1) {
            if (pathVideo === '') {
                alert('Veuillez saisir le chemin de la vidéo')
                return -1;
            }
            const newDoc={
                visibility:visibility,
                name:name,
                video:pathVideo,
                id_cat:catDoc,
                themes: themes
            }
            const url = `${process.env.REACT_APP_API_URL}resource/${pathAPI}`;
            axios.post(url,newDoc,{ withCredentials: true })
            .then((response)=>{
                if (response.status===201){
                    setReload(!reload);
                }
            })
            .catch((err)=>{
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            });
        }
        else {
            if (file === null) {
                alert('Veuillez indiquer le document à envoyer');
                return -1;
            }
            if (name === '') {
                alert('Veuillez renseigner le nom du document');
                return -1;
            }
            const formData=new FormData();
            formData.append('file',file);
            formData.append('visibility',visibility);
            formData.append('id_cat',catDoc);
            formData.append('name',name);
            formData.append('themes',JSON.stringify(themes))
            const url = `${process.env.REACT_APP_API_URL}resource/${pathAPI}`;
            axios.post(url,formData,{ withCredentials: true })
                .then((response)=>{
                    if (response.status===201){
                        setReload(!reload);
                    }
                })
                .catch((err)=>{
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
    }

    return (
        <div className='ResourceAdminContainer'>
            <div className="NewResourceDiv">
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <div className="newDocMainContainer">
                        <div className="newDocOptions">
                        <div className='NewResourceDivContainer'>
                            <div className="AddDocTitle">Ajouter une nouvelle ressource</div>
                            <div className="blocChoices">
                                <div className="nameDuo">
                                    <label htmlFor="name" className='LabelAdminContainer'>Nom de la ressource : </label>
                                    <input className='InputAdminContainer' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> 
                                </div>
                                {catDoc > 1 ? <FileUploader className="DownloadFile" handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" /> : <> <label forhtml="video" className='LabelAdminContainer'>Chemin de la vidéo : <input type="text" id="video" value={pathVideo} onChange={(e) => setPathVideo(e.target.value)} /> </label></>}
                                <div className='publicDuo'>
                                    <label htmlFor='' className='LabelAdminContainer'>Destiné au public : </label>
                                    <select className='publicSelect' onChange={(e) => setVisibility(e.target.value)}>
                                        <option value="1">Non connecté</option>
                                        <option value="2">Utilisateur connecté</option>
                                        <option value="3">Entreprise</option>
                                    </select>
                                </div>   
                            </div>                       
                        </div>
                        <div className="ThemeContainer">
                            <div className="AddDocTitle">Choisissez un thème dans la liste suivante:</div>
                            <div className="newDocThemeContainer">
                                {themes && themes.map((theme) => {
                                    return (
                                        <div className='divThemeDoc'key={theme.idTheme}>
                                            <input className='checkThemeNewDoc'type="checkbox" value={theme.idTheme} id={theme.themeName} checked={theme.checked} onChange={(e) => handleCheckTheme(e)} />
                                            <label className='LabelThemeNewDoc' htmlFor={theme.themeName}>
                                                <div className='nameNewDoc'>{theme.themeName}</div>
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                            <button type="submit" className='SubmitBtn'>Ajouter la ressource</button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="ListResourceDiv">
                <ResourceAdminModal
                    className="ResourceModal"
                    displayModal={handleModal}
                    resource={displayId}
                    reload={reload}
                    setReload={setReload}
                    reloadTheme={reloadTheme} />
                {docs.map((doc, index) => {
                    return <div key={index} className="ResourceCard" onClick={() => handleModal(doc.id_resource, true)}>
                        <img src={filePic} alt="file" className="filePic" />
                        <p className="ResourceName">{doc.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
export default ResourceAdminContainer
