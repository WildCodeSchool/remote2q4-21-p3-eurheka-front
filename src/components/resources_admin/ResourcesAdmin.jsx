import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ResourceAdminContainer from './ResourceAdminContainer';
import './ResourcesAdmin.scss';

const ResourcesAdmin = ({reloadTheme}) => {
    const [getIdDoc, setGetIdDoc] = useState(1);
    const [docs, setDocs] = useState([]);
    const [showComponent, setShowComponent] = useState(false);
    const [reload,setReload]=useState(false);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}resource/adminCat/` + getIdDoc;
        axios.get(url, { withCredentials: true })
            .then((res) => res.data)
            .then((data) => {
                setDocs(data)
            })
            .catch((err) => {
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
    }, [getIdDoc,reload]);

    const displayModal = (id, caller) => {
        setGetIdDoc(id);
        const titlesSelector = document.getElementsByClassName('navBarResourceListItem');
        for (let i = 0; i < titlesSelector.length; i++) {
            titlesSelector[i].classList.remove('ResourceUnderLine');
        }
        const titleSelector = document.getElementById(caller);
        titleSelector.classList.add('ResourceUnderLine');
    }

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
        <div className='ResourceAdmin'>
                <div className='ResourceAdminTitle'>Gérer les ressources</div>
                <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('ResourceAdminBloc')}></i>
                <div className="ResourceAdminBloc BlocHidden" id="ResourceAdminBloc">
                    <ul className="navBarResourceList">
                        <li id="video" className="navBarResourceListItem ResourceUnderLine" onClick={(e) => displayModal(1, 'video')}>Vidéo</li>
                        <li id="document" className="navBarResourceListItem" onClick={(e) => displayModal(2, 'document')}>Documents</li>
                        <li id="job" className="navBarResourceListItem" onClick={(e) => displayModal(3, 'job')}>Fiches métiers</li>
                    </ul>
                    <div className="ResourcePageContainer">
                        <ResourceAdminContainer catDoc={getIdDoc}
                            docs={docs}
                            setReload={setReload}
                            reload={reload} 
                            reloadTheme={reloadTheme}/>
                    </div>
                </div>
        </div>
    )
}

export default ResourcesAdmin
