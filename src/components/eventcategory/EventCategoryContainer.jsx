import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCategoryContainer.scss';

const EventCategoryContainer = ({ reload,setReload }) => {
    const [categories, setCategories] = useState([]);
    const [newName, setNewName] = useState('');
    const [idCategory,setIdCategory]=useState(0);
    
    useEffect(() => {
        const getCategory = async () => {
            const url = `${process.env.REACT_APP_API_URL}event/category/`;
            await axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setCategories(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getCategory();
    }, [reload]);

    const updateCategory = (text,id) => {
        setNewName(text);
        setIdCategory(id);
        const popup = document.getElementById('popupEventCat');
        popup.classList.add('displayPopup2');
    }

    const handleModification = () => {
        const popup = document.getElementById('popupEventCat');
        const url = `${process.env.REACT_APP_API_URL}event/category/${idCategory}`;
        axios.put(url,{category_name:newName},{withCredentials:true})
            .then((res)=>{
                if (res.status===204){
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
        popup.classList.remove('displayPopup2');
    }

    const deleteCategory = (id) => {
       if(window.confirm('Voulez-vous supprimer cette catégorie ?')){
            const url = `${process.env.REACT_APP_API_URL}event/category/${id}`;
           axios.delete(url,{withCredentials:true})
            .then((res)=>{
                if (res.status===204){
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

    const handleClose=()=>{
        const popup = document.getElementById('popupEventCat');
        popup.classList.remove('displayPopup2');
    }

    return (
        <div className='EventCategoryContainer'>
            <ul className="EventCategoryContainerlist">
                {categories && categories.map((category) => {
                    return (
                        <li
                            key={category.id_category}
                            className='EventCategoryContainerItem'>
                                <div className='eventItemName'>{category.category_name}</div>
                                <input
                                type="button"
                                value="Modifier"
                                className='ModifCategoryBtn'
                                onClick={() => updateCategory(category.category_name,category.id_category)} />
                                <input
                                type="button"
                                value="Supprimer"
                                className='SuppressCategoryBtn'
                                onClick={() => deleteCategory(category.id_category)} />
                        </li>
                    )
                })}
            </ul>
            <div className="popUpModif" id="popupEventCat">
                <div className="innerPopUp">
                    <label className="newNameCategory" htmlFor="newName">Nouveau nom :</label>
                    <input className="CategoryModInput" type="text" value={newName} id="newName" onChange={(e) => setNewName(e.target.value)} />
                    <input className="CategoryModBtn" type="button" value="Modifier" onClick={handleModification} />
                    <span className='closePopup' onClick={handleClose}>X</span>
                </div>
            </div>
        </div>
    )
}

export default EventCategoryContainer
