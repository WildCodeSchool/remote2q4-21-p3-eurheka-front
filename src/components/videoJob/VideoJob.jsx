import React from 'react';
import ResourcesCard from '../resourcesCard/ResourcesCard';
import './VideoJob.css'

const VideoJob = () => {
  return (
    <div className="VideoJob">
          <ResourcesCard 
            mainTitle = "Job Vidéos"
            mainTitleClassName="mainTitle-darkTheme"
            url={'https://jsonplaceholder.typicode.com/photos?_limit=100'}
            listClassName='list-lightTheme'
            secondListClassName='video-list'
            containerListClassName='video-container-list'
            // icon='favorite'
            // iconClassName='favorite'
            firstClassName='video-resources-container'
            secondClassName='video-resources-container-reduced'
            paginationClassName='video-pagination'
            resourcesPerPage= {6}
          />
    </div>
    )
  }


export default VideoJob;
