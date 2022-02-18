import React from 'react'

import "./ContactCard.css"

const ContactCard = () => {
    return (
        <div className='ContactCard'>
            <h1 className='contact-title'>CONTACT</h1>
            <h3 className='contact-subtitle'>Une question, une demande ? C'est ici !</h3>
            <div className='contact-container'>
                <h2 className='contact-form-title'>Votre demande</h2>
                <label for="object" className='contact-form-subtitle'>Objet</label>
                <input 
                    type="text" 
                    id="object" 
                    name="object" 
                    className='contact-input-object' 
                    placeholder="Prendre un rendez-vous vidéo"
                    onFocus={(e) => e.target.placeholder = ""}  
                    onBlur={(e) => e.target.placeholder = "Prendre un rendez-vous vidéo"}
                />
                <label for="description" className='contact-form-subtitle'>Informations supplémentaires</label>
                <textarea 
                    type="text" 
                    id="object" 
                    name="description" 
                    className='contact-input-description'
                    placeholder="Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous
                    me premettrait de gagner en confiance avant ce rdv et d’avoir des réponses à mes questions. "
                    onFocus={(e) => e.target.placeholder = ""}  
                    onBlur={(e) => e.target.placeholder = "Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous me premettrait de gagner en confiance avant ce rendez-vous et d’avoir des réponses à mes questions."}
                />
                <button className='contact-button'>Envoyer</button>
            </div>    
        </div>
    )
}

export default ContactCard