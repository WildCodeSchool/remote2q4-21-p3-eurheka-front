import React from 'react'
import "./RetreivePassword.css"

const RetreivePassword = () => {

    return (
        <div className='RetreivePassword'>
          <div className="put-email-text">Entrez votre email ci-dessous :</div>
          <input className='put-email'></input>
          <div onClick="submit" className="send-password">Envoyer un mot de passe provisoire</div>
        </div>
    )
}

export default RetreivePassword;