import React from 'react';
import DownloadDoc from '../../components/downloadDoc/DownloadDoc';
import BusinessSheet from '../../components/businessSheet/BusinessSheet';
import VideoJob from '../../components/videoJob/VideoJob';
import VideoCoaching from '../../components/videoCoaching/VideoCoaching';
import './Library.css';

const Library = () => {
  return (
    <div className="Library">
      <div className="Library-header">
        <h2>Espace Candidat</h2>
      </div>
      <div className="main-title">
          <h1>bibliothèques</h1>
          <p>Accédez à la bibliothèque de documents, vidéos...</p>
      </div>
      <DownloadDoc />
      <VideoJob />
       {/* <VideoCoaching /> */}
      <BusinessSheet />
    </div>
  );
};

export default Library;
