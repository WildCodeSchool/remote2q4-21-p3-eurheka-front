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
                    console.log(err);
                });
        }
        getCategory();
    }, [reload]);

    const updateCategory = (text,id) => {
        setNewName(text);
        setIdCategory(id);
        const popup = document.getElementById('popup');
        popup.classList.toggle('displayPopup');
    }

    const handleModification = () => {
        const popup = document.getElementById('popup');
        const url = `${process.env.REACT_APP_API_URL}event/category/${idCategory}`;
        axios.put(url,{category_name:newName},{withCredentials:true})
            .then((res)=>{
                if (res.status===204){
                    setReload(!reload);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        popup.classList.toggle('displayPopup');
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
                console.log(err);
            })
        }
    }

    const handleClose=()=>{
        const popup = document.getElementById('popup');
        popup.classList.toggle('displayPopup');
    }

    return (
        <div className='EventCategoryContainer'>
            <ul className="EventCategoryContainerlist">
                {categories && categories.map((category) => {
                    return (
                        <li
                            key={category.id_category}
                            className='EventCategoryContainerItem'>
                            {category.category_name}
                            <input
                                type="button"
                                value="Modifier"
                                className='ModifCategoryBtn'
                                onClick={() => updateCategory(category.category_name,category.id_category)} />
                            <input
                                type="button"
                                value="Supprimer"
                                className='ModifCategoryBtn'
                                onClick={() => deleteCategory(category.id_category)} />
                        </li>
                    )
                })}
            </ul>
            <div className="popUpModif" id="popup">
                <div className="innerPopUp">
                    <label htmlFor="newName">Nouveau nom : <input className="EventCategoryModInput" type="text" value={newName} id="newName" onChange={(e) => setNewName(e.target.value)} /></label>
                    <input className="EventCategoryModInput" type="button" value="Modifier" onClick={handleModification} />
                    <span className='closePopup' onClick={handleClose}>X</span>
                </div>
            </div>
        </div>

    )
}

export default EventCategoryContainer
