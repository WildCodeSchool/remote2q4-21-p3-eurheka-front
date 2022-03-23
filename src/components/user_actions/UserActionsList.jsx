import React from 'react'
import UserActionsButtonCard from './UserActionsButtonCard';
import UserActionsUploadCard from './UserActionsUploadCard';
import UserActionsEventCard from './UserActionsEventCard';
import './UserActionsList.css'

const UserActionsList = () => {
    return (
        <div className='UserActionsList'>
            <UserActionsButtonCard />
            <UserActionsUploadCard />
            <UserActionsEventCard />
        </div>
    )
}

export default UserActionsList