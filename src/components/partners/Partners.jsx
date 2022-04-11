import React from 'react';
import logoPartners from '../../assets/data/logoPartners';
import './Partners.css';

const Partners = () => {
    return (
        <div className='Partners-container'>
            <div className="title-container">
                Ils nous font confiance !
            </div>
            <div className="logo-container">
                <div className="odd-logo-container">
                    {logoPartners
                    .filter((data) => data.id % 2 !== 0)
                    .map((data,index) => (
                        <img  key={index} src={data.logo} alt={data.name} />
                    ))
                    }
                </div>
                <div className="even-logo-container">
                    {logoPartners
                    .filter((data) => data.id % 2 === 0)
                    .map((data,index) => (
                        <img key={index} src={data.logo} alt={data.name} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Partners;