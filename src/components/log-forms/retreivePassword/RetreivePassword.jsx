import React, { useState } from 'react';
import axios from 'axios';
import "./RetreivePassword.css"

const RetreivePassword = () => {
  const [email, setEmail] = useState('');
  const [password1,setPassword1]=useState('');
  const [password2,setPassword2]=useState('');
  const [token, setToken]=useState('');

  const sendPass = () => {
    if (email === '') {
      alert('Veuillez saisir votre mail');
      return -1;
    }
    const url = `${process.env.REACT_APP_API_URL}users/lost/`;
    axios
      .post(url, { email: email }, { withCredentials: true })
      .then((result) => {
        if (result.status === 204) {
          alert("Un email vous a été envoyé.");
          setEmail('');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const showModal = () => {
    const modal=document.getElementById('modalPassword');
    modal.classList.add('displayModal');
  }

  const close=()=>{
    const modal=document.getElementById('modalPassword');
    modal.classList.remove('displayModal');
  }

  const reinit=()=>{
    if(password1!==password2){
      alert("les mots de passes sont différents");
      return -1;
    }
    if(password1===''||token===''||email===''){
      alert('Veuillez remplir tous les champs, merci');
      return -1;
    }
    const url = `${process.env.REACT_APP_API_URL}users/newPass/`;
    const newPass={
      password:password1,
      token:token,
      email:email
    }
    axios
      .post(url, newPass , { withCredentials: true })
      .then((result) => {
      if (result.status === 204) {
        alert("Votre mot de passe à été changé");
        setEmail('');
        setToken('');
        setPassword1('');
        setPassword2('');
        close();
      }
    })
    .catch((err) => {
      console.log(err);
      const HTTPError = err.response.status;
      if(  HTTPError===422){
        alert("les données saisies sont invalides")
      }
    })
  }
  
  

  return (
      <div className='RetreivePassword'>
        <input className='put-email' placeholder="Entrer mon email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <div onClick={sendPass} className="send-password">Envoyer un mot de passe provisoire</div>
        <p className='ShowModal' onClick={showModal}>J'ai recu le mot de passe</p>
        <div className="modalPassword" id="modalPassword">
          <div className="passwordContainer">
            <span className='CloseSpan' onClick={close}>X</span>
            Veuillez saisir les informations :
            <label htmlFor="token">Token :<input type="text" id='token' value={token} onChange={(e)=>setToken(e.target.value)} /></label>
            <label htmlFor="emailPass">Email : <input type="text" id="emailPass" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label htmlFor="password1">Mot de passe :<input type="password" id='password1' value={password1} onChange={(e)=>setPassword1(e.target.value)} /></label>
            <label htmlFor="password2">Confirmer :<input type="password" id='password2' value={password2} onChange={(e)=>setPassword2(e.target.value)} /></label>
            <div onClick={reinit} className="send-password2">Réinitialiser</div>
          </div>
        </div>
      </div>
     
  )
}

export default RetreivePassword;