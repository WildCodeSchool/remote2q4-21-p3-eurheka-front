import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './AdminCvs.scss';

const AdminCvs = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [cvs,setCvs]=useState([]);

    useEffect(()=>{
        const getCvs=async()=>{
            const url = `${process.env.REACT_APP_API_URL}event/category/`;
            await axios
                .get(url,{withCredentials:true})
                .then((result)=>{
                    setCvs(result.data);
                })
                .catch((err)=>{
                    console.log(err);
                    if(err.status===401){
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                })
        }

    },[]);

    const handleShowClick = (id) => {
        const docContainer = document.getElementById(id);
        if (!showComponent) {
            docContainer.classList.remove('BlocHidden');
        }
        else {
            docContainer.classList.add('BlocHidden');
        }
        setShowComponent(!showComponent);
    }

    return (
        <div className='AdminCvs'>
            <h2 className='CvsAdminTitle'>Consulter les Cvs en ligne</h2>
                <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('CvsAdminBloc')}></i>
                <div className="CvsAdminBloc BlocHidden" id="CvsAdminBloc">
                    <div className="CvsAdminContainer">

                        </div>
                </div>
        </div>
    )
}

export default AdminCvs
