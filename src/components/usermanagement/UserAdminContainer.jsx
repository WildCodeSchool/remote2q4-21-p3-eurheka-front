import React, { useState, useEffect } from 'react';
import axios from "axios";
import './UserAdminContainer.scss';
import UserAdminCard from './UserAdminCard';

const UserAdminContainer = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    const [idUser,setIdUser]=useState(0);

    useEffect(() => {
        const getUsers = async () => {
            const url = `${process.env.REACT_APP_API_URL}users/admin`;
            await axios.get(url, { withCredentials: true })
                .then((result) => result.data)
                .then((data) => {
                    setUsers(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getUsers();
    }, [reload]);

    const handleUpdate = (idUser) => {
        const exist = users.find((item) => item.id_users === idUser);
        const userLevel = exist.user_level;
        const url = `${process.env.REACT_APP_API_URL}users/admin/${idUser}`;
        axios.put(url, { user_level: userLevel }, { withCredentials: true })
            .then((response) => {
                if (response.status === 204) {
                    setReload(!reload);
                }
            })
            .catch((err) => {
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
                if (HTTPError === 500 && err.response.data.error === 1451) {
                    alert(err.response.data.message);
                }
            });

    };

    const handleRemove = (idUser) => {
        const url = `${process.env.REACT_APP_API_URL}users/${idUser}`;
        axios.delete(url, { withCredentials: true })
            .then((response) => {
                if (response.status === 204) {
                    setReload(!reload);
                }
            })
            .catch((err) => {
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
                if (HTTPError === 500 && err.response.data.error === 1451) {
                    alert(err.response.data.message);
                }
            });
    };

    const handleLevelChange = (e, idUser) => {
        const newLevel = parseInt(e.target.value);
        const exist = users.find((item) => item.id_users === idUser);
        if (exist) {
            setUsers(users.map(item => item.id_users === idUser ? { ...exist, user_level: newLevel } : item));
        }
    }

    const handlePopUp = (id) => {
        const popup = document.getElementById('popUpUserAdmin');
        popup.classList.add('popupOpen');
        setIdUser(id);
    }

    const handlePopUpClose = () => {
        const popup = document.getElementById('popUpUserAdmin');
        popup.classList.remove('popupOpen');
    }

    return (
        <div className='UserAdminContainer'>
            <table className='UserTable'>
                <thead><tr>
                    <th className="usersAdminCell">
                        Nom - Prenom
                    </th>
                    <th className="usersAdminCell">
                        Entreprise
                    </th>
                    <th className="usersAdminCell">
                        Niveau
                    </th>
                    <th className="usersAdminCell">
                        Modifier
                    </th>
                    <th className="usersAdminCell">
                        Supprimer
                    </th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id_users}>
                                <td className="usersNameCell"><span className="Clickable" onClick={()=>handlePopUp(user.id_users)}>{user.userName}</span></td>
                                <td className="usersAdminCell">{user.name === null ? 'Aucune' : user.name}</td>
                                <td className="usersAdminLevel">
                                    <select className="usersAdminSelect" value={user.user_level} onChange={(e) => handleLevelChange(e, user.id_users)}>
                                        <option value="2">Utilisateur connecté</option>
                                        <option value="3">Entreprise</option>
                                        <option value="4">Administrateur</option>
                                        <option value="5">Super Admin</option>
                                    </select>
                                </td>
                                <td className="usersAdminBtn"><button className="usersAdmModify" onClick={() => handleUpdate(user.id_users)}>Modifier</button></td>
                                <td className="usersAdminBtn"><button className="usersAdmSuppress" onClick={() => handleRemove(user.id_users)}>Supprimer</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <div className="popContainer">
                <div className="popupUserAdmin" id="popUpUserAdmin">
                    <div className="innerPopup">
                        <span className='closePopup ' onClick={handlePopUpClose}>X</span>
                        <UserAdminCard idUser={idUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAdminContainer
