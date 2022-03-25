import React,{useState,useEffect} from 'react';
import axios from 'axios';


const AdminJobContainer = ({reload, setReload}) => {
    const [jobList,setJobList]=useState([]);

    useEffect(()=>{
        const getOffers=async()=>{

        }
        getOffers();
    },[reload]);

    return (
        <div>
            
        </div>
    )
}

export default AdminJobContainer
