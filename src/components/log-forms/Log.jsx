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
                <ul className='btn-container'>
                    <div onClick={handleModals} id="register" className={signUpModal ? "active-btn" : "off-btn"}>S'inscrire</div>
                    <div onClick={handleModals} id="login" className={signInModal ? "active-btn" : "off-btn"}>Se connecter</div>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
    )
}

export default Log;