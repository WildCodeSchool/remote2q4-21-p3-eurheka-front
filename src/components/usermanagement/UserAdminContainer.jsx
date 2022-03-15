import React, { useState, useEffect } from 'react';
import axios from "axios";
import './UserAdminContainer.scss';

const UserAdminContainer = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const getUsers = async () => {
            const url = `${process.env.REACT_APP_API_URL}users/admin`;
            await axios.get(url, { withCredentials: true })
                .then((result) => result.data)
                .then((data) => {
                    setUsers(data);
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
        getUsers();
    }, [reload]);

    const handleUpdate = (idUser) => {
        const exist = users.find((item) => item.id_users === idUser);
        setReload(!reload);

    };

    const handleRemove = (idUser) => {
        const url = `${process.env.REACT_APP_API_URL}users/${idUser}`;
        axios.delete(url,{ withCredentials: true })
            .then((response)=>{
                if (response.status === 204) {
                    setReload(!reload);
                }
            })
            .catch((err)=>{
                console.log(err.response);
                const HTTPError = err.response.status;
                if (HTTPError === 401) {
                    alert('Vous avez été déconnecté.');
                    window.location = '/';
                }
                if(HTTPError ===500&&err.response.data.error===1451){
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

    return (
        <div>
            <table>
                <thead><tr>
                    <th>
                        Nom - Prenom
                    </th>
                    <th>
                        Entreprise
                    </th>
                    <th>
                        Niveau
                    </th>
                    <th>
                        Modifier
                    </th>
                    <th>
                        Supprimer
                    </th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id_users}>
                                <td>{user.userName}</td>
                                <td>{user.name === null ? 'Aucune' : user.name}</td>
                                <td>
                                    <select value={user.user_level} onChange={(e) => handleLevelChange(e, user.id_users)}>
                                        <option value="2">Utilisateur connecté</option>
                                        <option value="3">Entreprise</option>
                                        <option value="4">Administrateur</option>
                                        <option value="5">Super Admin</option>
                                    </select>
                                </td>
                                <td><button onClick={() => handleUpdate(user.id_users)}>Modifier</button></td>
                                <td><button onClick={() => handleRemove(user.id_users)}>Supprimer</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserAdminContainer
