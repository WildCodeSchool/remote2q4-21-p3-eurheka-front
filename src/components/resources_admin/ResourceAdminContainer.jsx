import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './ResourceAdminContainer.scss';
import ResourceAdminModal from './ResourceAdminModal';

const ResourceAdminContainer = ({ catDoc, docs, setReload,reload }) => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [pathVideo, setPathVideo] = useState('');
    const [visibility, setVisibility] = useState(1);
    const [displayId, setDisplayId] = useState(null);

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

    //Handling submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        let path = '';
        //checking if all informations are sets
        if (catDoc === 1) {
            if (pathVideo === '') {
                alert('Veuillez saisir le chemin de la vidéo')
                return -1;
            }
            path = pathVideo;
        }
        else {
            if (file === null) {
                alert('Veuillez indiquer le document à envoyer');
                return -1;
            }
            path = file.name; //to test
        }
        if (name === '') {
            alert('Veuillez renseigner le nom du document');
            return -1;
        }
        const newDoc = {
            name: name,
            path: path,
            visibility: visibility,
            category: catDoc
        }
        console.log(newDoc);
    }

    return (
        <div className='ResourceAdminContainer'>
            <div className="NewResourceDiv">
                <form action="" onSubmit={handleSubmit}>
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
