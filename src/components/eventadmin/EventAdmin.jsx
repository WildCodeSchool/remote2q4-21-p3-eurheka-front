import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './EventAdmin.scss';
import EventAdminContainer from './EventAdminContainer';

const EventAdmin = ({reloadEvent}) => {
    const [showComponent, setShowComponent] = useState(false);
    const [categories, setCategories] = useState([]);
    const [eventName,setEventName]=useState('');
    const [eventCategory,setEventCategory]=useState(1);
    const [eventDate,setEventDate]=useState('');
    const [reload,setReload]=useState(false);

    useEffect(() => {
        const getCategories = async () => {
            const url = `${process.env.REACT_APP_API_URL}event/category/`;
            await axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setCategories(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getCategories();
    }, [reloadEvent]);

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

    const handleAddClick=()=>{
        if(window.confirm("Voulez vous ajouter l'évènement'")){
            const url=`${process.env.REACT_APP_API_URL}event/`;
            const newEvent={
                category:eventCategory,
                name:eventName,
                date:eventDate
            }
            axios.post(url,newEvent,{withCredentials:true})
                .then((res)=>{
                    if (res.status===201){
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
        <div className='EventAdmin'>
                <div className='EventAdminTitle'>Gérer les évenements</div>
                <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('EventAdminBloc')}></i>
                <div className="EventAdminBloc BlocHidden" id="EventAdminBloc">
                    <div className="ExistingEvent">
                    <div className='ExistingEventTitle'>Evènements existants</div>
                        <EventAdminContainer
                        reload={reload}
                        setReload={setReload}
                        />
                    </div>
                    <div className="CreateEvent">
                        <div className='CreateEventTitle'>Ajouter un évènement</div>
                        <div className="optionsEvent">
                        <div className='duoEvent'>
                            <label className='labelEvent' htmlFor="eventNameList">Nom de l'évènement :</label>
                            <input type="text" id="eventNameList" value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                        </div>
                        <div className='duoEvent'>
                            <label className='labelEvent' htmlFor="eventDate">Date de l'évènement :</label>
                            <input type="datetime-local" id="eventDate" value={eventDate} onChange={(e)=>setEventDate(e.target.value)}/>
                        </div>
                        <div className='duoEvent'>
                            <label className='labelEvent' htmlFor="eventCategory">Catégorie de l'évènement :</label>
                            <select id="eventCategory" value={eventCategory} onChange={(e)=>setEventCategory(e.target.value)}>
                                {categories && categories.map((category) => {
                                    return (
                                        <option value={category.id_category} key={category.id_category}>{category.category_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        </div>
                        <input className='EventAdminAddBtn' type="button" value="Ajouter" onClick={handleAddClick}/>
                    </div>
                </div>
        </div>
    )
}

export default EventAdmin
