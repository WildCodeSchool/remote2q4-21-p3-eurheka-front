import React, {useState} from 'react';
import './OpinionAdmin.scss'
import OpinionAdminContainer from './OpinionAdminContainer';

const OpinionAdmin = () => {
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
        <div className='OpinionAdmin'>
            <div className='OpinionAdminTitle'>Gérer les avis</div>
            <i className={ showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('OpinionAdminBloc')}></i>
                <div className="OpinionAdminBloc BlocHidden" id="OpinionAdminBloc">
                    <div className='opinionMenu'>
                        <p className='menuAuthor'>Auteur</p>
                        <p className='menuDetail'>Avis</p>
                        <p className='menuIsValid'>Validation</p>
                        <p className='menuDelete'>Supprimer</p>
                    </div>
                    <OpinionAdminContainer />
                </div>
        </div>
    )
}

export default OpinionAdmin