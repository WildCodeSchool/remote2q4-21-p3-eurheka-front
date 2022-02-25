import React from 'react';
import logoPartners from '../../assets/data/logoPartners';
import './Partners.css';

const Partners = () => {
    return (
        <div className='Partners-container'>
            <div className="title-container">
                <h3>Ils nous font confiance !</h3>
            </div>
            <div className="odd-logo-container">
                {logoPartners
                .filter((data) => data.id % 2 !== 0)
                .map((data) => (
                    <img src={data.logo} alt={data.name} />
                ))
                }
            </div>
            <div className="even-logo-container">
                {logoPartners
                .filter((data) => data.id % 2 === 0)
                .map((data) => (
                    <img src={data.logo} alt={data.name} />
                ))
                }
            </div>
        </div>
    )
}

export default Partners;