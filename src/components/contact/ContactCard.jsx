import React, { useState } from 'react'
import axios from "axios";
import "./ContactCard.css"

const ContactCard = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstname===''||lastname===''||email===''||subject===''||description===''){
            alert('Veuillez remplir tous les champs');
            return -1;
        }
        let errorMessage = document.getElementsByClassName("Error");
        for (let i=0; i<errorMessage.length; i++){
            errorMessage[i].innerHTML="";
        }
        const newContactMessage = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                subject: subject,
                message: description
        }
        
        const url = `${process.env.REACT_APP_API_URL}mail/`;
            axios.post(url, newContactMessage)
                .then(function (response){
                    if (response.status === 200) {
                        alert("Votre message a bien été envoyé")
                        setFirstname("");
                        setLastname("");
                        setEmail("");
                        setSubject("");
                        setDescription("");
                    }
                })
                .catch(function (error){
                    const HTTPError = error.response.status;
                    if ((HTTPError === 500)||(HTTPError===422)) {
                        if(HTTPError===500){
                            alert("Un problème technique est survenu le message n'a put être envoyé")
                        }
                        else {
                            alert('Veuillez remplir les champs correctement');
                        }
                    }  
                })
    }

    return (
        <div className='ContactCard'>
            <h1 className='contact-title'>CONTACT</h1>
            <h3 className='contact-subtitle'>Une question, une demande ? C'est ici !</h3>
            <form onSubmit={handleSubmit} className='contact-container'>
                <h2 className='contact-form-title'>Votre demande</h2>
                <div className='contact-information-container'>
                    <div className='contact-input-container'>
                        <label htmlFor="firstname" className='contact-form-subtitle'>Prénom</label>
                        <input 
                            type="text" 
                            id="firstname" 
                            value={firstname}
                            name="firstname" 
                            className='contact-input' 
                            placeholder="Jean"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "Jean"}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="lastname" className='contact-form-subtitle'>Nom</label>
                        <input 
                            type="text" 
                            id="lastname"
                            value={lastname} 
                            name="lastname" 
                            className='contact-input' 
                            placeholder="Dupont"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "Dupont"}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className='contact-input-container'>
                    <label htmlFor="email" className='contact-form-subtitle'>Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={email}
                            className='contact-input' 
                            placeholder="jean.dupont@mail.com"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "jean.dupont@mail.com"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="subject" className='contact-form-subtitle'>Objet</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={subject}
                            className='contact-input' 
                            placeholder="Prendre un rendez-vous vidéo"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "Prendre un rendez-vous vidéo"}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                </div>
                <label htmlFor="description" className='contact-form-subtitle'>Informations supplémentaires</label>
                <textarea 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={description}
                    className='contact-input-description'
                    placeholder="Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous
                    me premettrait de gagner en confiance avant ce rdv et d’avoir des réponses à mes questions. "
                    onFocus={(e) => e.target.placeholder = ""}  
                    onBlur={(e) => e.target.placeholder = "Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous me premettrait de gagner en confiance avant ce rendez-vous et d’avoir des réponses à mes questions."}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className='contact-button'>Envoyer</button>
            </form>    
        </div>
    )
}

export default ContactCard