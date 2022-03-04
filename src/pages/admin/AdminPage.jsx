import React,{useContext} from 'react'
import { UserIdContext } from  '../../context/AppContext';
const AdminPage = (props) => {
    const {uId, uLevel}=useContext( UserIdContext);
    let admin=false;
    let superAdmin=false;
    if(uLevel&&uLevel.includes('super'))
    {
        superAdmin=true;
    }
    if(uLevel&&uLevel.includes('admin'))
    {
        admin=true;
    }
    return (
        <div>
            {admin&& <div className="AdminPage">
                Page administrateur
                </div>}
            {superAdmin&& <div className="SuperAdminPage">
                Page super administrateur
            </div>}
            {!admin&&!superAdmin&&<div>
                Vous n'êtes pas autorisé à accèder à cette page
                </div>}
        </div>
    )
}

export default AdminPage
