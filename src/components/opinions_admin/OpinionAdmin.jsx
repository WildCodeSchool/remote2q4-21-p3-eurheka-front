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
            <div className="navBarOpinion">
                <h2 className='OpinionAdminTitle'>Gérer les avis</h2>
                <i className={ showComponent ? "fa-solid fa-chevron-up CloseFolding" : "fa-solid fa-chevron-down CloseFolding"} onClick={() => handleShowClick('OpinionAdminBloc')}></i>
                <div className="OpinionAdminBloc BlocHidden" id="OpinionAdminBloc">
                    <OpinionAdminContainer />
                </div>
            </div>
        </div>
    )
}

export default OpinionAdmin