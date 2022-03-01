import React, { useState, useEffect } from 'react';

const ResourceAdminContainer = ({ catDoc, docs }) => {
    return (
        <div className='ResourceAdminContainer'>
            <div className="NewResourceDiv">
                Ajouter un nouveau document
            </div>
            <div className="ListResourceDiv">
                {docs.map((doc, index) => {
                    return <div key={index}>{doc.name} A
                    
                    </div>
                })}
            </div>
        </div>
    )
}
export default ResourceAdminContainer
