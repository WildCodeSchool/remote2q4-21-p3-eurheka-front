import React, {useState,useEffect} from 'react';
import UserAdminContainer from './UserAdminContainer';
import './UserManagement.scss';

const UserManagement = (props) => {
    const [showComponent, setShowComponent] = useState(false);

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

    return (
        <div className='UserAdmin'>
            <div className='UserAdminTitle'>Gérer les utilisateurs</div>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('UserAdminBloc')}></i>
            <div className="UserAdminBloc BlocHidden" id="UserAdminBloc">
                <div className="HowToBloc">
                    <p className="HowToTitle">Comment utiliser la gestion d'utilisateurs ?</p>
                    <div className="HowToAdminUsers">
                        <p className="HowToSubTitle">Pour consulter la fiche d'un utilisateur :</p>
                        <p className="HowToText">cliquez sur son nom: vous pourrez ainsi visualiser toutes les informations le concernant.</p>
                        <p className="HowToSubTitle">Pour modifier les droits d'accès d'un utilisateur :</p>
                        <p className="HowToText">sélectionnez un niveau d'accès et cliquez sur modifier: ses droits d'accès sont désormais actualisés.</p>
                        <p className="HowToSubTitle">Pour supprimer un utilisateur :</p>
                        <p className="HowToText">cliquez sur supprimer: l'utilisateur n'a plus accès aux parties avec connexion du site et doit le cas échéant se réinscrire.</p>
                    </div>
                </div>
                <UserAdminContainer />
            </div>
        </div>
    )
}

export default UserManagement
