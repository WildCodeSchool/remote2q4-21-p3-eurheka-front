import React, {useContext} from 'react'
import UserActionsButtonCard from './UserActionsButtonCard';
import UserActionsUploadCard from './UserActionsUploadCard';
import UserActionsEventCard from './UserActionsEventCard';
import { UserIdContext } from  '../../context/AppContext';
import './UserActionsList.css'
import UserActionInscription from './UserActionInscription';

const UserActionsList = () => {
    const {uId, uLevel}=useContext( UserIdContext);

    let connected=false;

    if(uId === 0)
    {
        connected=false;
    } else {
        connected=true;
    }

    return (
        <div className='UserActionsList'>
            <UserActionsButtonCard />
            {connected&&
                <UserActionsUploadCard />
            }
            {!connected&& 
                <UserActionInscription />
            }
            <UserActionsEventCard />
        </div>
    )
}

export default UserActionsList