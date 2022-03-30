import React, { useContext, useState,useEffect } from 'react'
import axios from 'axios';
import AdminCvs from '../../admincv/AdminCvs';
import AdminJobs from '../../components/adminjobs/AdminJobs';
import AdminRDV from '../../components/adminrdv/AdminRDV';
import AdminUserInfo from '../../components/adminuserinfo/AdminUserInfo';
import EventAdmin from '../../components/eventadmin/EventAdmin';
import EventCategoryAdmin from '../../components/eventcategory/EventCategoryAdmin';
import ResourcesAdmin from '../../components/resources_admin/ResourcesAdmin';
import ThemeAdmin from '../../components/themes_admin/ThemeAdmin';
import UserManagement from '../../components/usermanagement/UserManagement';
import { UserIdContext } from '../../context/AppContext';
import "./AdminPage.css";

const AdminPage = (props) => {
    const [reload, setReload] = useState(false);
    const [reloadEvent, setReloadEvent] = useState(false);
    const [user,setUser]=useState(null);
    const { uId, uLevel } = useContext(UserIdContext);
    useEffect(()=>{
        const getUser=async()=>{
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

    let admin = false;
    let superAdmin = false;
    if (uLevel && uLevel.includes('super')) {
        superAdmin = true;
    }
    if (uLevel && uLevel.includes('admin')) {
        admin = true;
    }
    return (
        <div>
            {admin && <div className="AdminPage">
                {/* Page administrateur */}
                <div className="headerAdminPage">
                <h1 className="AdminMainTitle">Mon profil administration</h1>
                <h2 className="AdminSecTitle">Vos options d'administration</h2>
                </div>
                <AdminUserInfo
                    user={user}
                    uId={uId}
                />
                <ThemeAdmin
                    reload={reload}
                    setReload={setReload} />
                <ResourcesAdmin
                    reloadTheme={reload}
                />
                <EventCategoryAdmin
                    setReloadEvent={setReloadEvent}
                    reloadEvent={reloadEvent}
                />
                <EventAdmin
                    reloadEvent={reloadEvent}
                />
            </div>}
            {superAdmin && <div className="SuperAdminPage">
                <h2 className="AdminSecTitle">Vos options de super administrateur</h2>
                {/* Page super administrateur */}
                <UserManagement />
                <AdminCvs />
                <AdminRDV />
                <AdminJobs />
            </div>}
            {!admin && !superAdmin && <div>
                Vous n'êtes pas autorisé à accèder à cette page
            </div>}
        </div>
    )
}

export default AdminPage
