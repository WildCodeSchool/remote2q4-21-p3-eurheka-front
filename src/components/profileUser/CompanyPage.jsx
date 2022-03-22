import React,{useContext} from 'react'
import { UserIdContext } from  '../../context/AppContext';

const CompanyPage = () => {
    const {uId, uLevel}=useContext( UserIdContext);
    let company=false;
    if(uLevel&&uLevel.includes('company'))
    {
        company=true;
    }
    
    return (
        <div>            
            {company&& <div className="CompanyPage">
                {/* Page company */}
            </div>}
            {
                !company&&
                <div>
                Vous n'êtes pas autorisé à accèder à cette page
                </div>}
        </div>
    )
}

export default CompanyPage;