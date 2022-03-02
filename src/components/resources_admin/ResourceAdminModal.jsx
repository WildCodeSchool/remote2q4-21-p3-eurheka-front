import React,{useEffect,useState} from 'react';
import axios from 'axios';

const ResourceAdminModal = ({resource,displayModal}) => {
    useEffect(()=>{
        const url=`${process.env.REACT_APP_API_URL}resource/`+resource;
        //Axios
    },[]);

    return (
        <div  id="resourceModal">
            {resource}
            <button onClick={()=>{displayModal(0,false)}}>Click</button> 
        </div>
    )
}

export default ResourceAdminModal
