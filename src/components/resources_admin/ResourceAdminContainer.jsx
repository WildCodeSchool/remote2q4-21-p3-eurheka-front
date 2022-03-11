import React, { useState, useEffect } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './ResourceAdminContainer.scss';
import ResourceAdminModal from './ResourceAdminModal';
import axios from 'axios';

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
                    console.log(err);
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
        }
        let path = '';
        //checking if all informations are sets
        if (catDoc === 1) {
            if (pathVideo === '') {
                alert('Veuillez saisir le chemin de la vidéo')
                return -1;
            }
            path = pathVideo;
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
                    console.log('OK');
                }
            })
            .catch((err)=>{
                console.log(err);
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
            path = file.name; //to test
            if (name === '') {
                alert('Veuillez renseigner le nom du document');
                return -1;
            }
            const formData=new FormData();
            formData.append('file',file);
            formData.append('visibility',visibility);
            formData.append('id_cat',catDoc);
            formData.append('name',name);
            //Adding themes
            // themes.forEach((theme)=>{
            //     formData.append('themes',{...theme});
            // });
            formData.append('themes',JSON.stringify(themes))
            const url = `${process.env.REACT_APP_API_URL}resource/${pathAPI}`;
            axios.post(url,formData,{ withCredentials: true })
                .then((response)=>{
                    if (response.status===201){
                        console.log('OK');
                    }
                })
                .catch((err)=>{
                    console.log(err);
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
                        <div className='NewResourceDivContainer'>
                            <h3 className='AddDocTitle'>Ajouter un nouveau document</h3>
                            <label htmlFor="name" className='LabelAdminContainer'>Nom du document : <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> </label>
                            {catDoc > 1 ? <FileUploader className="DownloadFile" handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" /> : <> <label forhtml="video" className='LabelAdminContainer'>Chemin de la vidéo : <input type="text" id="video" value={pathVideo} onChange={(e) => setPathVideo(e.target.value)} /> </label></>}
                            <label htmlFor='' className='LabelAdminContainer'>Destiné au public :&nbsp;
                                <select onChange={(e) => setVisibility(e.target.value)}>
                                    <option value="1">Non connecté</option>
                                    <option value="2">Utilisateur connecté</option>
                                    <option value="3">Entreprise</option>
                                </select>
                            </label>
                            <input type="submit" value="ajouter le document" className='SubmitBtn' />
                        </div>
                        <div className="ThemeContainer">
                             Liste des thèmes :
                            <div className="newDocThemeContainer">
                                {themes && themes.map((theme) => {
                                    return (
                                        <div key={theme.idTheme}>
                                            <label className='LabelThemeNewDoc' htmlFor={theme.themeName}><input type="checkbox" value={theme.idTheme} id={theme.themeName} checked={theme.checked} onChange={(e) => handleCheckTheme(e)} /> {theme.themeName}</label>
                                        </div>
                                    )
                                })}
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
                    setReload={setReload} />
                {docs.map((doc, index) => {
                    return <div key={index} className="ResourceCard" onClick={() => handleModal(doc.id_resource, true)}>{doc.name}
                    </div>
                })}
            </div>
        </div>
    )
}
export default ResourceAdminContainer
