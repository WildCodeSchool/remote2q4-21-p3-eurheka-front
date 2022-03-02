import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ResourceAdminContainer from './ResourceAdminContainer';
import './ResourcesAdmin.scss';

const ResourcesAdmin = (props) => {
    const [getIdDoc,setGetIdDoc]=useState(1);
    const [docs,setDocs]=useState([]);
    //const url=`${process.env.REACT_APP_API_URL}resource/bycat/getIdDoc`;
   
    useEffect(()=>{
        const url='http://localhost:8000/api/resource/bycat/'+getIdDoc;
        axios.get(url,{withCredentials:true})
            .then((res)=>res.data)
            .then((data)=>setDocs(data))
    },[getIdDoc]);

    const displayModal=(id)=>{
        setGetIdDoc(id);
    }
    return (
        <div className='ResourceAdmin'>
            <div className="navBarResource">
                <h2>Gérer les ressources</h2>
                <i className='CloseFolding'>X</i>
               <ul className="navBarResourceList">
                   <li className="navBarResourceListItem" onClick={()=>displayModal(1)}>Vidéo</li>
                   <li className="navBarResourceListItem" onClick={()=>displayModal(2)}>Documents</li>
                   <li className="navBarResourceListItem" onClick={()=>displayModal(3)}>Fiches métiers</li>
               </ul>
            </div>
           <div className="ResourcePageContainer">
               <ResourceAdminContainer catDoc={getIdDoc}
               docs={docs}/>
               
           </div>
        </div>
    )
}

export default ResourcesAdmin
