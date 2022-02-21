import React, { useState } from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "./Log.css";

const Log = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(true);

    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === 'login'){
            setSignUpModal(false);
            setSignInModal(true);
        }
    }
    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <div onClick={handleModals} id="register" className="log-button">S'inscrire</div>
                    <div onClick={handleModals} id="login" className="log-button">Se connecter</div>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    )
}

export default Log;