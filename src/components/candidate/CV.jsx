import axios from 'axios';
import React, { useState } from 'react';
import  "./CV.css";
import file from "../../assets/files-icons/file.png"

const CV = ({path, idCV}) => {

    return (
        <div className='CV'>
            <a href={`${process.env.REACT_APP_URL}${path}`} target="_blank">
                 <div>
                     <img className='imgCV' src={file}></img>
                     <p>Nom du cv</p>
                 </div>
            </a>
            <button>X</button>           
        </div>
    )
}

export default CV;