import React, { useContext, useState } from 'react'
import ResourcesAdmin from '../../components/resources_admin/ResourcesAdmin';
import ThemeAdmin from '../../components/themes_admin/ThemeAdmin';
import UserManagement from '../../components/usermanagement/UserManagement';
import { UserIdContext } from '../../context/AppContext';

const AdminPage = (props) => {
    const [reload, setReload] = useState(false);
    const { uId, uLevel } = useContext(UserIdContext);
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
                <h1>Administration</h1>
                <h2>adminsitration générale</h2>
                <ThemeAdmin
                    reload={reload}
                    setReload={setReload} />
                <ResourcesAdmin
                    reloadTheme={reload}
                />
            </div>}
            {superAdmin && <div className="SuperAdminPage">
            <h2>Super Admin</h2>
                {/* Page super administrateur */}
                <UserManagement />
            </div>}
            {!admin && !superAdmin && <div>
                Vous n'êtes pas autorisé à accèder à cette page
            </div>}
        </div>
    )
}

export default AdminPage
