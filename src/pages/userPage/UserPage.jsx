import React, { useContext, useState, useEffect } from 'react';
import axios from "axios";
import CandidateInfos from '../../components/candidate/CandidateInfos';
import CandidateSituation from '../../components/candidate/CandidateSituation';
import CandidateDoc from '../../components/candidate/CandidateDoc';
import CandidateAppointment from '../../components/candidate/CandidateAppointment';
import { UserIdContext } from '../../context/AppContext';
import CandidateOpinon from '../../components/candidate/CandidateOpinon';
import "./UserPage.css";

const UserPage = (props) => {
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
                <h2 className="UserSecTitle">Bienvenue {uFirstname}</h2>
                <h3 className="UserThirdTitle">Votre espace candidat</h3>
                </div>
                <CandidateInfos 
                uId={uId}
                user={user}
                setUser={setUser}/>
                <CandidateSituation 
                uId={uId}
                user={user}
                setUser={setUser}/>
                <CandidateDoc 
                uId={uId}/>
                <CandidateAppointment 
                uId={uId}/>
                <CandidateOpinon uId={uId} user={user}/>
            </div>}            
        </div>
    )
}

export default UserPage;
