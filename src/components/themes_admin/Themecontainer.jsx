import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ThemeContainer.scss';

const Themecontainer = ({ reload,setReload }) => {
    const [themes, setThemes] = useState([]);
    const [newName,setNewName]=useState('');
    const [idTheme,setIdTheme]=useState(0);
    
    useEffect(() => {
        const fetchTheme = () => {
            const url = `${process.env.REACT_APP_API_URL}theme/`;
            axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setThemes(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        fetchTheme();
    }, [reload]);

    const updateTheme = (text,id) => {
        setNewName(text);
        setIdTheme(id);
        const popup = document.getElementById('popup');
        popup.classList.toggle('displayPopup');
    }

    const deleteTheme = (id) => {
        if(window.confirm('Voulez-vous supprimer cette catégorie ?')){
             const url = `${process.env.REACT_APP_API_URL}theme/${id}`;
            axios.delete(url,{withCredentials:true})
             .then((res)=>{
                 if (res.status===200){
                     setReload(!reload);
                 }
             })
             .catch((err)=>{
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
             })
         }
     }

     const handleModification = () => {
        const popup = document.getElementById('popup');
        const url = `${process.env.REACT_APP_API_URL}theme/${idTheme}`;
        axios.put(url,{name:newName},{withCredentials:true})
            .then((res)=>{
                if (res.status===200){
                    setReload(!reload);
                }
            })
            .catch((err)=>{
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            })
        popup.classList.toggle('displayPopup');
    }

    const handleClose=()=>{
        const popup = document.getElementById('popup');
        popup.classList.toggle('displayPopup');
    }

    return (
        <div  className='ThemeAdminContainer'>
            <ul className="ThemeAdminContainerlist">
            {themes.map((theme) => {
                return (
                    <li className='ThemeAdminItem' key={theme.id_theme}>
                        <p className='ThemeName'>{theme.name}</p>
                        <input
                            type="button"
                            value="Modifier"
                            className='ModifThemeBtn'
                            onClick={() => updateTheme(theme.name,theme.id_theme)} />
                        <input
                            type="button"
                            value="Supprimer"
                            className='SuppressThemeBtn'
                            onClick={() => deleteTheme(theme.id_theme)} />
                    </li>
                )
            })}
            </ul>
            <div className="popUpModif" id="popup">
                <div className="innerPopUp">
                    <label className="newNameEvent" htmlFor="newNameEvent">Nouveau nom : </label>
                    <input className="ThemeModInput" type="text" value={newName} id="newName_Event" onChange={(e) => setNewName(e.target.value)} />
                    <input className="ThemeModBtn" type="button" value="Modifier" onClick={handleModification} />
                    <span className='closePopup' onClick={handleClose}>X</span>
                </div>
            </div>
        </div>
    )
}

export default Themecontainer
