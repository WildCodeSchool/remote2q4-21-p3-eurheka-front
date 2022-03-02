import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './ResourceAdminContainer.scss';

const ResourceAdminContainer = ({ catDoc, docs }) => {
    const [file, setFile] = useState(null);
    const [name,setName]=useState('');
    const [pathVideo,setPathVideo]=useState('');
    const [visibility, setVisibility]=useState(1);
   //Handling file change
    const handleChange = (file) => {
        setFile(file);
    };
    const fileTypes = ["PDF"];
     //Handling submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        let path='';
        //checking if all informations are sets
        if(catDoc===1){
            if(pathVideo===''){
                alert('Veuillez saisir le chemin de la vidéo')
                return -1;
            }
            path=pathVideo;
        }
        else{
            if(file===null){
                alert('Veuillez indiquer le document à envoyer');
                return -1;
            }
            path=file.name; //to test
        }
        if(name===''){
            alert('Veuillez renseigner le nom du document');
            return -1;
        }
        const newDoc={
            name: name,
            path: path,
            visibility:visibility,
            category:catDoc
        }
        //
    }

    return (
        <div className='ResourceAdminContainer'>
            <div className="NewResourceDiv">
                Ajouter un nouveau document
                <form action="" onSubmit={handleSubmit}>
                    <div className='NewResourceDivContainer'>
                        <label htmlfor="name">Nom du document : <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/> </label>
                        {catDoc > 1 ? <FileUploader handleChange={handleChange} name="file" types={fileTypes} label="Glisser et déposer le fichier" /> : <> <label forhtml="video">Chemin de la vidéo : <input type="text" id="video" value={pathVideo} onChange={(e)=>setPathVideo(e.target.value)}/> </label></>}
                        <label htmlFor=''>Destiné au public :&nbsp; 
                            <select onChange={(e)=>setVisibility(e.target.value)}>
                                <option value="1">Non connecté</option>
                                <option value="2">Utilisateur connecté</option>
                                <option value="3">Entreprise</option>
                            </select>
                        </label>
                        <input type="submit" value="ajouter le document" className='SubmitBtn'/>
                    </div>
                </form>
            </div>
            <div className="ListResourceDiv">
                {docs.map((doc, index) => {
                    return <div key={index} className="ResourceCard">{doc.name} A

                    </div>
                })}
            </div>
        </div>
    )
}
export default ResourceAdminContainer
