import axios from 'axios';
import React, { useState } from 'react';
import  "./CV.css";
import file from "../../assets/files-icons/file.png"

const CV = ({path, idCV}) => {

    let newName ="";

    const getFileName = (fileName) => {
        if (fileName) {
            newName = fileName.split("_")[1];
            /*console.log(newName)*/
        }
    }
    getFileName(path);
    console.log(newName)
    return (
        <div className='CV'>
            <a href={`${process.env.REACT_APP_URL}${path}`} target="_blank">
                 <div>
                     <img className='imgCV' src={file} alt='fileicon'></img>
                     <p className='nameCV'>{newName}</p>
                 </div>
            </a>
            <button>X</button>           
        </div>
    )
}

export default CV;