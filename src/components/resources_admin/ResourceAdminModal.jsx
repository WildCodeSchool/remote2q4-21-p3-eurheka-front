import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './ResourceAdminModal.scss';

const ResourceAdminModal = ({ resource, displayModal }) => {
    const [docs, setDocs] = useState(null);
    const [themeUsed, setThemeUsed] = useState([]);
    const [visibility, setVisibility] = useState();
    const tempTab = [];

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_URL}resource/admin/` + resource;
        const fetchDoc = async () => {
            if (resource !== null) {
                await axios.get(url, { withCredentials: true })
                    .then((res) => res.data)
                    .then((data) => {
                        setVisibility(data.visibility);
                        setDocs(data);
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
    }, [resource]);

    const handleChangeTheme = (id) => {
        //Find Theme in array
        const theTheme = themeUsed.find((item) =>
            item.idTheme === id);
        let checked = !theTheme.checked;
        setThemeUsed(themeUsed.map(item => item.idTheme === id ? { ...theTheme, checked } : item));
    }

    const sendDoc = () => {

    }

    return (
        <div id="resourceModal" className='ResourceModal'>
            {docs && <div className="ModalAdminDoc">
                Nom : {docs.name}<br />
                Chemin {docs.path}<br />
                catégorie : {docs.CategoryResource}<br />
                Visibilité : <select value={visibility} onChange={(e) => { setVisibility(e.target.value) }}>
                    <option value="1">Utilisateur non connecté</option>
                    <option value="2">Utilisateur connecté</option>
                    <option value="3">Entreprises</option>
                </select>
                <br />
                {docs &&
                    <div className="DocContainer">
                        <div className='DocInfoContainer'>
                            {docs.themes.map((theme, index) => {
                                return (<p key={index}>
                                    Theme : {theme.themeName}
                                </p>)
                            })}
                        </div>
                        <div className="ThemeContainer">
                            {/*Put the theme here */}
                            {themeUsed.map((theme, index) => {
                                return (
                                    <div key={index}>
                                        <label htmlFor={theme.themeName}>{theme.themeName} <input type="checkbox" id="{theme.themeName}" name="{theme.themeName}" value="{theme.idTheme}" checked={theme.checked} onChange={() => handleChangeTheme(theme.idTheme)} /></label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                <p>Supprimer</p>
                <p>Modifier</p>
                <button onClick={() => { displayModal(0, false) }} className="BtnModalClose">Fermer</button>
            </div>}
        </div>
    )
}

export default ResourceAdminModal
