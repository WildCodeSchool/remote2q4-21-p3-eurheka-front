import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ResourceAdminContainer from './ResourceAdminContainer';
import './ResourcesAdmin.scss';

const ResourcesAdmin = (props) => {
    const [getIdDoc, setGetIdDoc] = useState(1);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}resource/adminCat/` + getIdDoc;
        axios.get(url, { withCredentials: true })
            .then((res) => res.data)
            .then((data) => {
                setDocs(data)
            })
            .catch((err) => {
                console.log(err);
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
    }, [getIdDoc]);

    const displayModal = (id) => {
        setGetIdDoc(id);
    }
    return (
        <div className='ResourceAdmin'>
            <div className="navBarResource">
                <h2>Gérer les ressources</h2>
                {/* <span className='arrowStyle'>{changeSize ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>} </span> */}
                <i className="fa-solid fa-chevron-up"></i>
                <ul className="navBarResourceList">
                    <li className="navBarResourceListItem" onClick={() => displayModal(1)}>Vidéo</li>
                    <li className="navBarResourceListItem" onClick={() => displayModal(2)}>Documents</li>
                    <li className="navBarResourceListItem" onClick={() => displayModal(3)}>Fiches métiers</li>
                </ul>
            </div>
            <div className="ResourcePageContainer">
                <ResourceAdminContainer catDoc={getIdDoc}
                    docs={docs} />

            </div>
        </div>
    )
}

export default ResourcesAdmin
