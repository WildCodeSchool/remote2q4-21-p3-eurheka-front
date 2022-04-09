import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AdminRDV.scss';

const AdminRDV = (props) => {
    const [rdvs, setRdvs] = useState([]);
    const [reload, setReload] = useState(false);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const getRDV = async () => {
            const url = `${process.env.REACT_APP_API_URL}event/myRDV/`;
            await axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setRdvs(data);
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        getRDV();
    }, [reload]);

    const handleShowClick = (id) => {
        const docContainer = document.getElementById(id);
        if (!showComponent) {
            docContainer.classList.remove('BlocHidden');
        }
        else {
            docContainer.classList.add('BlocHidden');
        }
        setShowComponent(!showComponent);
    }

    const handleValid = (id, value, idUser) => {
        if (window.confirm("Voulez-vous changer ce rendez vous ?")) {
            const newValid = !value;
            const newSetting = {
                is_valid: newValid,
                id_user: idUser
            }
            const url = `${process.env.REACT_APP_API_URL}event/rdv/${id}`;
            axios.put(url, newSetting, { withCredentials: true })
                .then((res) => {
                    if (res.status === 200) {
                        setReload(!reload);
                    }
                })
                .catch((err) => {
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
    }

    return (
        <div className='AdminRDV'>
            <div className='RDVAdminTitle'>Gérer mes rendez-vous</div>
            <i className={showComponent ? "fa-solid fa-chevron-up CloseFolding arrowOver" : "fa-solid fa-chevron-down CloseFolding arrowOver"} onClick={() => handleShowClick('RDVAdminBloc')}></i>
            <div className="RDVAdminBloc BlocHidden" id="RDVAdminBloc">
                <div className="RDVAdminContainer">
                    <div className='titleRDV'>Mes demandes de RDV en cours</div>
                    <ul className="RDVList">
                        {rdvs && rdvs.map((rdv) => {
                            return (
                                <li key={rdv.eventid} className='RDVDuo'>
                                    <p className='emphasisRDV'>{rdv.firstname} {rdv.lastname}</p>
                                    <p className='validationRDV'> a demandé un RDV le {rdv.date_event} à {rdv.hour_event} pour le motif : </p>
                                    <p className='emphasisRDV'>{rdv.name}</p>
                                    <div className='checkDuo'>
                                       <p className='validationRDV'>- Valider : </p>
                                       <input className='validationRDVCheck' type="checkbox" checked={rdv.is_valid} onChange={() => { handleValid(rdv.eventid, rdv.is_valid, rdv.id_users) }} />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminRDV
