import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import CandidateInfos from '../../components/candidate/CandidateInfos';
import CandidateSituation from '../../components/candidate/CandidateSituation';
import CandidateDoc from '../../components/candidate/CandidateDoc';
import CandidateSettings from '../../components/candidate/CandidateSettings';
import { UserIdContext } from '../../context/AppContext';
import "./UserPage.css";

const UserPage = (props) => {
    const [reload, setReload] = useState(false);
    const [user, setUser] =useState(null);
    const { uFirstname } = useContext(UserIdContext);
    const { uId, uLevel } = useContext(UserIdContext);
    let candidate = false;    
    if (uLevel && uLevel.includes('user')) {
        candidate = true;
    }

    useEffect(()=>{
        const getUser = async() =>{
            const url = `${process.env.REACT_APP_API_URL}users/${uId}`;
            await axios.get(url, {withCredentials: true})
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err.data)
                const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
            })
        }
        getUser();
    },[]);

    return (
        <div>
            {candidate && <div className="UserPage">
                {/* Page candidat */}
                <div className="headerUserPage">
                <h1 className="UserMainTitle">MON PROFIL</h1>
                <h2 className="UserSecTitle">Bienvenue {props.firstname}</h2>
                <h3 className="UserThirdTitle">Votre espace candidat</h3>
                </div>
                <CandidateInfos 
                uId={uId}
                user={user}
                setUser={setUser}/>
                <CandidateSituation />
                <CandidateDoc />
                <CandidateSettings />
            </div>}            
        </div>
    )
}

export default UserPage;
