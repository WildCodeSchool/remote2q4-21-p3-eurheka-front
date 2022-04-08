import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ThemeAdmin.scss';
import Themecontainer from './Themecontainer';

const ThemeAdmin = ({reload,setReload}) => {
    const [showComponent, setShowComponent] = useState(false);
    const [themeName, setThemeName] = useState('');
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

    const handleAddSubmit = (e) => {
        e.preventDefault();
        if(themeName===''){
            alert('Veuillez entrer un nom.');
            return -1;
        }
        const url = `${process.env.REACT_APP_API_URL}theme/`;
        axios
            .post(url,{name:themeName}, { withCredentials: true })
            .then((response)=>response)
            .then(({data,status}) => {
                if (status === 201) {
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

    return (
        <div className='ThemeAdmin'>
                <div className='ThemeAdminTitle'>Gérer les thèmes de documents</div>
                <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('ThemeAdminBloc')}></i>
                <div className="ThemeAdminBloc BlocHidden" id="ThemeAdminBloc">
                    <div className='ExistingTheme'>
                        <div className='ExistingThemeTitle'>Mes thèmes créés</div>
                        <Themecontainer reload={reload} setReload={setReload}/>
                    </div>
                    <div className='CreateTheme'>                        
                        <form className='formTheme' onSubmit={(e) => handleAddSubmit(e)}>
                               <div className='AddThemeTitle'>Ajouter un thème</div>
                               <div className='duoTheme'>
                                   <label className='labelTheme' htmlFor="themeName">Nom du thème </label>
                                   <input className='inputTheme' type="text" value={themeName} onChange={(e) => setThemeName(e.target.value)} id="themeName" />
                               </div>
                               <button type="submit" value="Ajouter" className='AddThemeBtn'>Ajouter</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default ThemeAdmin
