import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './ResourceAdminModal.scss';

const ResourceAdminModal = ({ resource, displayModal,setReload,reload,reloadTheme }) => {
    const [docs, setDocs] = useState(null);
    const [themeUsed, setThemeUsed] = useState([]);
    const [visibility, setVisibility] = useState();
    const [docName, setDocName] = useState('');

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}resource/admin/` + resource;
        const fetchDoc = async () => {
            if (resource !== null) {
                await axios.get(url, { withCredentials: true })
                    .then((res) => res.data)
                    .then((data) => {
                        setVisibility(data.visibility);
                        setDocs(data);
                        setDocName(data.name)
                        setThemeUsed([...data.themes]);
                    })
                    .catch((err) => {
                        console.log(err);
                        const HTTPError = err.response.status;
                        if (HTTPError === 401) {
                            alert('Vous avez été déconnecté.');
                            window.location = '/';
                        }
                    })
            }
        }
        fetchDoc();
    }, [resource,reloadTheme]);

    const handleChangeTheme = (id) => {
        //Find Theme in array
        const theTheme = themeUsed.find((item) =>
            item.idTheme === id);
        let checked = !theTheme.checked;
        setThemeUsed(themeUsed.map(item => item.idTheme === id ? { ...theTheme, checked } : item));
    }

    const sendDoc = (e) => {
        e.preventDefault();
        const newDoc = {
            visibility: visibility,
            themes: themeUsed,
            idDoc: resource,
            name: docName
        }
        const url = `${process.env.REACT_APP_API_URL}resource/` + resource;
        if (window.confirm('Voulez-vous modifier ce document ?')) {
        axios.put(url,newDoc,{withCredentials:true})
            .then((response) => {
                if (response.status === 200) {
                    window.alert('Document modifié.');
                    displayModal(0, false);
                    setReload(!reload);
                }
            })
            .catch((err) => {
                console.log(err);
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
                if(HTTPError===500){
                    alert('Une erreur est survenue.')
                }
                if(HTTPError===404){
                    alert("Le document spécifié n'existe pas")
                }
            });
        }
    }

    const deleteDoc = () => {
        if (window.confirm('Voulez-vous supprimer ce document ?')) {
            const url = `${process.env.REACT_APP_API_URL}resource/` + resource;
            axios.delete(url, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        window.alert('Document supprimé.');
                        displayModal(0, false);
                        setReload(!reload);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
    }

    return (
        <div id="resourceModal" className='ResourceModal'>
            {docs && <div className="ModalAdminDoc">
                <form onSubmit={(e) => sendDoc(e)}>
                    <div className="DivHeadDocModal">
                        <label className='LabelDocContainer' htmlFor='name'> Nom : <input type="text" id="name" value={docName} onChange={(e) => setDocName(e.target.value)} /> </label>
                        <label className='LabelDocContainer' htmlFor='visibleCat'>Visibilité : <select value={visibility} onChange={(e) => { setVisibility(e.target.value) }}>
                            <option value="1">Utilisateur non connecté</option>
                            <option value="2">Utilisateur connecté</option>
                            <option value="3">Entreprises</option>
                        </select></label>
                    </div>
                    <br />
                    {docs &&
                        <div className="DocContainer">
                            <div className="ThemeContainer">
                                {themeUsed.map((theme, index) => {
                                    return (
                                        <label className="LabelThemeContainer" key={index} htmlFor={theme.themeName}><input type="checkbox" id="{theme.idTheme}" name="{theme.themeName}" value="{theme.idTheme}" checked={theme.checked} onChange={() => handleChangeTheme(theme.idTheme)} /> {theme.themeName}</label>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    <div className="DivDocModalBtnForm">
                        <input type="submit" value="Modifier" className='DocContainerModalSubmitBtn' />
                        <div className='DeleteDocBtn' onClick={deleteDoc}>Supprimer</div>       
                    </div>
                </form>
                <button onClick={() => { displayModal(0, false) }} className="BtnModalClose">Fermer</button>
            </div>}
        </div>
    )
}

export default ResourceAdminModal
