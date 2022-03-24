import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCategoryContainer from './EventCategoryContainer';
import './EventCategoryAdmin.scss';

const EventCategoryAdmin = ({ setReloadEvent, reloadEvent }) => {
    const [showComponent, setShowComponent] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [reload,setReload]=useState(false);

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

    const handleAddClick = () => {
        if(categoryName!==''){
            const url = `${process.env.REACT_APP_API_URL}event/category/`;
            axios.post(url,{category_name:categoryName},{withCredentials:true})
            .then((res)=>{
                if(res.status===201){
                    setReload(!reload);
                    setReloadEvent(!reloadEvent);
                }
            })
            .catch((err)=>{
                console.log(err);
            });

        }
        else
            alert('Veuillez donner un nom à la catégorie');
    }

    return (
        <div className='EventCategoryAdmin'>
            <h2 className='EventCategoryAdminTitle'>Gérer les Catégories d'événements</h2>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('EventCategoryAdminBloc')}></i>
            <div className="EventCategoryAdminBloc BlocHidden" id="EventCategoryAdminBloc">
                <div className="EventCategoryAdminAdd">
                    <h3 className='EventCategoryAdminAddTitle'>Ajouter une catégorie d'évènement</h3>
                    <label className='EventCategoryAdminLabel' htmlFor="eventName">Nom de la catégorie : <input type="text" id="eventName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} /></label>
                    <input className='EventCategoryAdminAddBtn' type="button" value="Ajouter" onClick={handleAddClick} />
                </div>
                <EventCategoryContainer 
                    setReload={setReload}
                    reload={reload}/>
            </div>
        </div>
    )
}

export default EventCategoryAdmin