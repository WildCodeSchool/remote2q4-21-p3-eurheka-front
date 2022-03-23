import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UserAdminCard.scss';

const UserAdminCard = ({ idUser }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const url = `${process.env.REACT_APP_API_URL}users/${idUser}`;
            await axios
                .get(url, { withCredentials: true })
                .then((result) => {
                    setUser(result.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getUser();

    }, [idUser]);

    return (
        <div className='UserAdminCard'>
            {user &&
                <div className='infoUserAdmin'>
                    <div>
                        <p className='LinesInfosUserAdmin'> <span className='InfoUserAdminSpan'>Prénom</span> : {user.firstname}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Nom</span> : {user.lastname}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Adresse Mail</span> : {user.email}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Date de naissance</span> : {user.birthday === null ? 'non renseigné' : user.birthday}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Adresse</span> : {user.adresse === null ? 'non renseigné' : user.adresse}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Numéro de téléphone</span> :  {user.phone === null ? 'non renseigné' : user.phone}</p>
                    </div>
                    <div>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Entreprise actuelle</span> : {user.enterprise_name === null ? 'non renseigné' : user.enterprise_name}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>date d'embauche</span> : {user.job_date === null ? 'non renseigné' : user.job_date}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Poste actuel</span> : {user.job_name === null ? 'non renseigné' : user.job_name}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>Est en poste actuellement</span> : {user.in_post ? 'Oui' : 'Non'}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>A la recherche d'un poste</span> : {user.job_search ? 'Oui' : 'Non'}</p>
                        <p className='LinesInfosUserAdmin'><span className='InfoUserAdminSpan'>date de disponibilité</span> : {user.free_date === null ? 'non renseigné' : user.free_date}</p>
                        <div className="UserAdminOptions">
                            L'utilisateur s'est enregistré pour :
                            <ul className='ListSignInOptions'>
                                {(user.signin_options&1)===1?<li>Un stage</li>:null}
                                {(user.signin_options&2)===2?<li>Faire le point</li>:null}
                                {(user.signin_options&4)===4?<li>Etre accompagné</li>:null}
                            </ul>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default UserAdminCard
