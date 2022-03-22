import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCategoryAdmin.scss';

const EventCategoryAdmin = ({ setReloadEvent, reloadEvent }) => {
    const [showComponent, setShowComponent] = useState(false);
    const [categoryName, setCategoryName] = useState('');

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
                {/* container        */}
            </div>
        </div>
    )
}

export default EventCategoryAdmin