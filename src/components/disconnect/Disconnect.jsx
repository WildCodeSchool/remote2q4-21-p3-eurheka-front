import React from 'react';
import cookie from "js-cookie";
import axios from "axios";
import './Disconnect.css';

const Disconnect = () => {            
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1});
        }
    };
    const handleLogout = async () => {
        const url = `${process.env.REACT_APP_API_URL}users/logout`;
        await axios.get(url,{ withCredentials: true })
                .then(() => removeCookie('jwt'))
                .catch((err) => {});
        window.location = "/";
    }
    
    return (
        <div onClick={handleLogout} className="logout-button">
            Se déconnecter
        </div>
    )
}

export default Disconnect;