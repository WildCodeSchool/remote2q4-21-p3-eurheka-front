import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Themecontainer = ({ reload }) => {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        const fetchTheme = () => {
            const url = `${process.env.REACT_APP_API_URL}theme/`;
            axios.get(url, { withCredentials: true })
                .then((res) => res.data)
                .then((data) => {
                    setThemes(data);
                })
                .catch((err) => {
                    console.log(err);
                    const HTTPError = err.response.status;
                    if (HTTPError === 401) {
                        alert('Vous avez été déconnecté.');
                        window.location = '/';
                    }
                });
        }
        fetchTheme();
    }, [reload]);
    return (
        <div>
            {themes.map((theme) => {
                return (
                    <div key={theme.id_theme}>
                        {theme.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Themecontainer
