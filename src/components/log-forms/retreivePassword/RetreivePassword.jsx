import React from 'react'
import "./RetreivePassword.css"

const RetreivePassword = () => {

    return (
        <div className='RetreivePassword'>
          <input className='put-email' placeholder="Entrer mon email"></input>
          <div onClick="submit" className="send-password">Envoyer un mot de passe provisoire</div>
        </div>
    )
}

export default RetreivePassword;