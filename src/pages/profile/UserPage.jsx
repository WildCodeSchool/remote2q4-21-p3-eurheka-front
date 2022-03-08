import React,{useContext} from 'react'
import { UserIdContext } from  '../../context/AppContext';
const UserPage = (props) => {
    const {uId, uLevel}=useContext( UserIdContext);
    let user=false;
    if(uLevel&&uLevel.includes('user'))
    {
        user=true;
    }
    return (
        <div>            
            {user&& <div className="UserPage">
                {/* Page user */}
            </div>}
            {
                !user&&
                <div>
                Vous n'êtes pas autorisé à accèder à cette page
                </div>}
        </div>
    )
}

export default UserPage;