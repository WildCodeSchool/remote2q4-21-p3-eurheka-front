import React,{useEffect} from 'react';
import axios from 'axios';
import DownloadDoc from '../../components/downloadDoc/DownloadDoc';
import BusinessSheet from '../../components/businessSheet/BusinessSheet';
import VideoJob from '../../components/videoJob/VideoJob';
import './Library.css';

const Library = ({setUId,setULevel}) => {
 
  useEffect(async() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}session/`,
        withCredentials: true,
      })
         .then((res) => {
            setUId(res.data.userId);
            setULevel(res.data.userLevelString);
          })
         .catch((err) =>{
          console.log("No token");
          setUId(0);
          setULevel('not connected');
         } );
    }    
    fetchToken();
  },[]);

 
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
      <BusinessSheet />
    </div>
  );
};

export default Library;
