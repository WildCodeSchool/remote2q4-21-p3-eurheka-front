import React from 'react'
import './CreateUser.scss';

const CreateUser = () => {
    return (
        <div className='CreateUser'>
            <h2>Créer son profil</h2>
            <p>Augmenter vos chances d'être contacté par des recruteurs...</p>
            <form>
                <div className="globalContainer">
                    <div className="leftFields">
                        <div className="innerLeftFields">
                            <p><label htmlFor="name">Nom<br />
                                <input className='createUserInput' type="text" id="name" /></label></p>
                            <p><label htmlFor="firstname">Prénom<br />
                                <input className='createUserInput' type="text" id="firstname" /></label></p>
                        </div>
                        <div className="innerRightFields">
                            <p><label htmlFor="email">Mail<br />
                                <input className='createUserInput' type="email" id="email" /></label></p>
                            <p><label htmlFor="password1">Mot de passe<br />
                                <input className='createUserInput' type="password" id="password1" /></label></p>
                            <p><label htmlFor="password2">Vérifier le mot de passe<br />
                                <input className='createUserInput' type="password" id="password2" /></label></p>
                        </div>
                    </div>
                    <div className="rightFields">
                        <p><label htmlFor="stage" className='container'><input type="checkbox" className='createUserInput' id="stage" /><span className="checkmark"></span> En recherche d'emploi/stage</label></p>
                        <p><label htmlFor="accompanied" className='container'><input type="checkbox" className='createUserInput' id="accompanied" /><span className="checkmark"></span>Être accompagné</label></p>
                        <p><label htmlFor="focus" className='container'><input type="checkbox" className='createUserInput' id="focus" /><span className="checkmark"></span>Faire le point</label></p>
                    </div>
                </div>
                <div className="btnContainer">
                    <button type="submit" className='btnCreate'>s'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser