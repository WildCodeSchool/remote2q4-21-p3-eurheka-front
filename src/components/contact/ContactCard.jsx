import React, { useRef } from 'react'
import "./ContactCard.css"

const ContactCard = () => {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const objectRef = useRef(null)
    const descriptionRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                object: objectRef.current.value,
                description: descriptionRef.current.value
                }
        alert("Votre message a bien été envoyé : " + JSON.stringify(data))
    }

    return (
        <div className='ContactCard'>
            <h1 className='contact-title'>CONTACT</h1>
            <h3 className='contact-subtitle'>Une question, une demande ? C'est ici !</h3>
            <form onSubmit={handleSubmit} className='contact-container'>
                <h2 className='contact-form-title'>Votre demande</h2>
                <div className='contact-information-container'>
                    <div className='contact-input-container'>
                        <label for="firstname" className='contact-form-subtitle'>Prénom</label>
                        <input 
                            type="text" 
                            id="firstname" 
                            name="firstname" 
                            className='contact-input' 
                            placeholder="edouard"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "edouard"}
                            ref={firstNameRef}
                        />
                        <label for="lastname" className='contact-form-subtitle'>Nom</label>
                        <input 
                            type="text" 
                            id="lastname" 
                            name="lastname" 
                            className='contact-input' 
                            placeholder="doe"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "doe"}
                            ref={lastNameRef}
                        />
                    </div>
                    <div className='contact-input-container'>
                    <label for="email" className='contact-form-subtitle'>Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            className='contact-input' 
                            placeholder="edouard.doe@gmail.com"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "edouard.doe@gmail.com"}
                            ref={emailRef}
                        />
                        <label for="object" className='contact-form-subtitle'>Objet</label>
                        <input 
                            type="text" 
                            id="object" 
                            name="object" 
                            className='contact-input' 
                            placeholder="Prendre un rendez-vous vidéo"
                            onFocus={(e) => e.target.placeholder = ""}  
                            onBlur={(e) => e.target.placeholder = "Prendre un rendez-vous vidéo"}
                            ref={objectRef}
                        />
                    </div>
                </div>
                <label for="description" className='contact-form-subtitle'>Informations supplémentaires</label>
                <textarea 
                    type="text" 
                    id="description" 
                    name="description" 
                    className='contact-input-description'
                    placeholder="Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous
                    me premettrait de gagner en confiance avant ce rdv et d’avoir des réponses à mes questions. "
                    onFocus={(e) => e.target.placeholder = ""}  
                    onBlur={(e) => e.target.placeholder = "Je vais passer une entretien pour un post de chargé de communication le 12 février. Ce rendez-vous me premettrait de gagner en confiance avant ce rendez-vous et d’avoir des réponses à mes questions."}
                    ref={descriptionRef}
                />
                <button type="submit" className='contact-button'>Envoyer</button>
            </form>    
        </div>
    )
}

export default ContactCard