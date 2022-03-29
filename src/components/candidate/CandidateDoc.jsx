import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './CandidateDoc.css';
import DropCV from "./DropCV.jsx";
import ShowCV from "./ShowCV.jsx";

const CandidateDoc = (props) => {
    const [reload, setReload] = useState(false);

    return (
        <div className='CandidateDoc'>
            <div className='titleDoc'>Gérer mes documents</div>
            <div className='detailDoc'>
                <div className='myDoc'>
                    <div className='titleMyDoc'>Mes CV sauvegardés</div>
                    <ShowCV 
                    reload={reload}
                    setReload={setReload}/>
                </div>
                <div className='newDoc'>
                    <div className='titleNewDoc'>Déposer un nouveau CV</div>
                    <DropCV 
                    reload={reload}
                    setReload={setReload}/>
                </div>
            </div>         
        </div>
    )
}

export default CandidateDoc;
