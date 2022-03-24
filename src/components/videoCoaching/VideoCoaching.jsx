import React from 'react';
import ResourcesCard from '../resourcesCard/ResourcesCard';
import './VideoCoaching.css'

const VideoCoaching = () => {
  return (
    <div className="VideoCoaching">
          <ResourcesCard 
            mainTitle = "Coaching vidéo"
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


export default VideoCoaching;
