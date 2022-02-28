import React, { useRef } from 'react'
import "./RetreivePassword.css"

const RetreivePassword = () => {

    return (
        <div className='RetreivePassword'>
          <input className='put-email'></input>
          <div>Envoyer un mot de passe provisoire</div>
        </div>
    )
}

export default RetreivePassword;