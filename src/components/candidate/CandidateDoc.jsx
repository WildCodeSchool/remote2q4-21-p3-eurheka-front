import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FileUploader } from "react-drag-drop-files";
import './CandidateDoc.css';

const CandidateDoc = (props) => {

    return (
        <div className='CandidateDoc'>
            <div className='titleDoc'>Gérer mes documents</div>
            <div className='detailDoc'>
                <div className='myDoc'>
                    <div className='titleMyDoc'>Mes CV sauvegardés</div>
                    <div className='allMyDoc'>Here we map the CV... </div>
                </div>
                <div className='newDoc'>
                <div className='titleNewDoc'>Déposer un nouveau CV</div>
                    <div className='allMyDoc'>Here we drag&drop... </div>
                </div>
            </div>         
        </div>
    )
}

export default CandidateDoc;
