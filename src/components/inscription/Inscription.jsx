import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Inscription.css";

const Inscription = () => {

    return (
        <div className="Inscription">
            <div className="Inscription-title">Vous avez une demande spécifique ?</div>
            <p className="Inscription-text">Inscrivez-vous pour pouvoir nous contacter.</p>
            <NavLink to="/login"><button className="Inscription-button">S'inscrire</button></NavLink>
        </div>
    )
}

export default Inscription;