import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResourceAdminModal.scss';
const resArrayTheme = [
    {
        id: 1,
        name: 'RH'
    },
    {
        id: 2,
        name: 'Test TH'
    },
    {
        id: 3,
        name: 'Test 2 THEME'
    },
    {
        id: 4,
        name: 'Test 3 THEME'
    }
];
const ResourceAdminModal = ({ resource, displayModal }) => {
    const [docs, setDocs] = useState(null);
    const [themes, setThemes] = useState([]);
    const [themeUsed, setThemeUsed] = useState([]);
    const [visibility, setVisibility] = useState();
    const url = `${process.env.REACT_APP_API_URL}resource/admin/` + resource;

    useEffect(() => {
        const fetchDoc = async () => {
            if (resource !== null) {
                await axios.get(url, { withCredentials: true })
                    .then((res) => res.data)
                    .then((data) => {
                        setDocs(data);
                        setVisibility(data.visibility);
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

    useEffect(() => {
        //axios theme
        const fetchTheme = async () => {
            //axios
        }
        setThemes(resArrayTheme);
    }, []);
    const handleChangeTheme = () => {

    }
    //Make
    resArrayTheme.forEach((themeItem) => {
        //if()
    });

    return (
        <div id="resourceModal" className='ResourceModal'>
            {docs && <div className="ModalAdminDoc">
                Nom : {docs.name}<br />
                Chemin {docs.path}<br />
                catégorie : {docs.CategoryResource}<br />
                Visibilité : <select value={visibility}>
                    <option value="1">Utilisateur non connecté</option>
                    <option value="2">Utilisateur connecté</option>
                    <option value="3">Entreprises</option>
                </select>
                <br />
                {docs && docs.themes.map((theme, index) => {
                    return (<p key={index}>
                        Theme : {theme.themeName}
                    </p>)
                })}
                <p>Supprimer</p>
                <p>Modifier</p>
                <button onClick={() => { displayModal(0, false) }} className="BtnModalClose">Fermer</button>
            </div>}
        </div>
    )
}

export default ResourceAdminModal
