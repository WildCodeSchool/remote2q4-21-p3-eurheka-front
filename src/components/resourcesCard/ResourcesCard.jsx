import React, { useState } from 'react';
import PaginatedItems from '../paginatedItems/PaginatedItems';
import './ResourcesCard.css'

const ResourcesCard = (props) => {
    const [isReduce, setIsReduce] = useState(true);

    function handleChange() {
        setIsReduce(!isReduce)
}

    return (
        <div className='ResourcesCard'>
                <div className="ResourcesCard-container">
                    <div className={props.mainTitleClassName}>
                        <h2 className='ResourcesCard-title'>{props.mainTitle}</h2>
                        
                        <span onClick={handleChange}>{isReduce ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i> }</span>
                    </div>
                    {isReduce ? 
                    <div className={props.firstClassName}>
                        <PaginatedItems 
                        url={props.url}
                        icon={props.icon}
                        iconClassName={props.iconClassName}
                        paginationClassName={props.paginationClassName}
                        listClassName={props.listClassName}
                        secondListClassName={props.secondListClassName}
                        containerListClassName={props.containerListClassName}
                        />
                        
                    </div> : <div clasName={props.secondClassName}>  </div>}
                </div>
        </div>
    )
}


export default ResourcesCard;
