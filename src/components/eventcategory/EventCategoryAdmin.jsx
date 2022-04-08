import React, { useState } from 'react';
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
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
            });

        }
        else
            alert('Veuillez donner un nom à la catégorie');
    }

    return (
        <div className='EventCategoryAdmin'>
            <div className='EventCategoryAdminTitle'>Gérer les Catégories d'événements</div>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('EventCategoryAdminBloc')}></i>
            <div className="EventCategoryAdminBloc BlocHidden" id="EventCategoryAdminBloc">
                <div className="EventCategoryAdminAdd">
                    <div className="ExistingCategory">
                        <div className='ExistingCategoryTitle'>Catégories existantes</div>
                        <EventCategoryContainer 
                         setReload={setReload}
                         reload={reload}
                        />
                    </div>
                    <div className="CreateCategory">
                        <div className='CreateCategoryTitle'>Ajouter une catégorie d'évènement</div>
                        <div className='duoCategory'>
                            <label className='labelCategory' htmlFor="eventName">Nom de la catégorie : </label>
                            <input type="text" id="eventName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                        </div>
                        <input className='EventCategoryAdminAddBtn' type="button" value="Ajouter" onClick={handleAddClick} />
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default EventCategoryAdmin