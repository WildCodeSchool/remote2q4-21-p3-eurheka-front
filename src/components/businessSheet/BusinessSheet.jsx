import React from 'react';
import ResourcesCard from '../resourcesCard/ResourcesCard';
import './BusinessSheet.css'

const BusinessSheet = () => {
  return (
    <div className="BusinessSheet">
          <ResourcesCard 
            mainTitle = "Fiches métiers"
            mainTitleClassName='mainTitle-lightTheme'
            url={'https://jsonplaceholder.typicode.com/posts'}
            listClassName='list-darkTheme'
            containerListClassName='container-list'

            icon='visibility'
            iconClassName='documents'
            firstClassName='doc-resources-container'
            secondClassName='doc-resources-container-reduced'
            paginationClassName='doc-pagination'

          />
    </div>
    )
  }


export default BusinessSheet;
