import React from 'react';
import ContactCard from '../../components/contact/ContactCard'
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="Contact-header">
                <h2>Espace Candidat</h2>
            </div>
            <ContactCard />
        </div>
    )
}

export default Contact;