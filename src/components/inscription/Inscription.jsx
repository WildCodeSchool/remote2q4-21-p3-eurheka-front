import React from "react";
import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { UserIdContext } from  '../../context/AppContext';
import "./Inscription.css";

const Inscription = () => {
    const {uId}=useContext( UserIdContext);
    let connected=false;

    if(uId === 0)
    {
        connected=false;
    } else {
        connected=true;
    }

    return (
        <div className="Inscription">
            <div className="Inscription-title">Vous avez une demande spécifique ?</div>
            {!connected&& 
                <p className="Inscription-text">Inscrivez-vous pour pouvoir nous contacter.</p>
            }
            {connected&& 
                <p className="Inscription-text">Contactez-nous à l'aide de notre formulaire.</p>
            }
                <NavLink to="/login">
                    {!connected&& 
                        <button className="Inscription-button">S'inscrire</button>
                    }
                </NavLink>
                <NavLink to="/contact-avis">
                    {connected&& 
                        <button className="Inscription-button">S'inscrire</button>
                    }
                </NavLink>
                        
        </div>
    )
}

export default Inscription;