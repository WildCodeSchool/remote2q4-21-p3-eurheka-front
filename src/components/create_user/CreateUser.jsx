import React from 'react'
import {useState} from 'react';
import './CreateUser.scss';

const CreateUser = () => {
    const [firstname, setFirstname]=useState('');
    const [lastname, setLastname]=useState('');
    const [password1, setPassword1]=useState('');
    const [password2, setPassword2]=useState('');
    const [email, setEmail]=useState('');

    const [stage, setStage]=useState(true);
    const [accompanied, setAccompanied]=useState(false);
    const [focus, setFocus]=useState(false);

    const submitClick=(e)=>{
        e.preventDefault();
        if(firstname&&lastname&&password1&&password2&&email)
        {
            if(password1!==password2)
            {
                alert('Les mots de passes sont différents');
                return -1;
            }
            if((firstname.length>255)||(lastname.length>255)||(password1.length>255)||(email.length>255))
            {
                alert('Les valeurs ne peuvent dépasser 255 caractères');
                return -1;
            }
            const newUser={
                firstname:firstname,
                lastname:lastname,
                password:password1,
                email:email,
                stage:stage,
                focus:focus,
                accompanied:accompanied
            }
            //Send user to back
            //Go to connexion page ?
        }
        else
        {
            alert('Veuillez saisir toutes les informations');
        }
    }
    const checkPassord=(newpass)=>{
        setPassword2(newpass);
        const pass2=document.getElementById('password2');
        if(password1!==newpass)
        {
            pass2.classList.add('wrongPass');
        }
        else{
            pass2.classList.remove('wrongPass');
        }
    }

    return (
        <div className='CreateUser'>
            <h2>Créer son profil</h2>
            <p>Augmenter vos chances d'être contacté par des recruteurs...</p>
            <form>
                <div className="globalContainer">
                    <div className="leftFields">
                        <div className="innerLeftFields">
                           <label htmlFor="name" className='labelLeft'>Nom<br />
                                <input className='createUserInput' type="text" id="name" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/></label>
                            <label htmlFor="firstname" className='labelLeft'>Prénom<br />
                                <input className='createUserInput' type="text" id="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/></label>
                        </div>
                        <div className="innerRightFields">
                           <label htmlFor="email" className='labelLeft'>Mail<br />
                                <input className='createUserInput' type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
                            <label htmlFor="password1" className='labelLeft'>Mot de passe<br />
                                <input className='createUserInput' type="password" id="password1" value={password1} onChange={(e)=>{setPassword1(e.target.value)}}/></label>
                            <label htmlFor="password2" className='labelLeft'>Vérifier le mot de passe<br />
                                <input className='createUserInput' type="password" id="password2"  value={password2} onChange={(e)=>{checkPassord(e.target.value)}}/></label>
                        </div>
                    </div>
                    <div className="rightFields">
                        <label htmlFor="stage" className='container'><input type="checkbox" className='createUserInput' id="stage" checked={stage} onChange={(e)=>{setStage(e.target.checked)}}/><span className="checkmark"></span> En recherche d'emploi/stage</label>
                        <label htmlFor="accompanied" className='container'><input type="checkbox" className='createUserInput' id="accompanied"  checked={accompanied} onChange={(e)=>{setAccompanied(e.target.checked)}} /><span className="checkmark"></span>Être accompagné</label>
                        <label htmlFor="focus" className='container'><input type="checkbox" className='createUserInput' id="focus" checked={focus} onChange={(e)=>{setFocus(e.target.checked)}} /><span className="checkmark"></span>Faire le point</label>
                    </div>
                </div>
                <div className="btnContainer">
                    <button type="submit" className='btnCreate' onClick={(e)=>submitClick(e)}>s'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser