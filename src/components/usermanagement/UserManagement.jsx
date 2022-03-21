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
            <h2 className='UserAdminTitle'>Gérer les utilisateurs</h2>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('UserAdminBloc')}></i>
            <div className="UserAdminBloc BlocHidden" id="UserAdminBloc">
                <UserAdminContainer />
                </div>
        </div>
    )
}

export default UserManagement
