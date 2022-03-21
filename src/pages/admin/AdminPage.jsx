import React, { useContext, useState } from 'react'
import EventAdmin from '../../components/eventadmin/EventAdmin';
import ResourcesAdmin from '../../components/resources_admin/ResourcesAdmin';
import ThemeAdmin from '../../components/themes_admin/ThemeAdmin';
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
                <ThemeAdmin
                    reload={reload}
                    setReload={setReload} />
                <ResourcesAdmin
                    reloadTheme={reload}
                />
                <EventAdmin />
            </div>}
            {superAdmin && <div className="SuperAdminPage">
                {/* Page super administrateur */}
            </div>}
            {!admin && !superAdmin && <div>
                Vous n'êtes pas autorisé à accèder à cette page
            </div>}
        </div>
    )
}

export default AdminPage
