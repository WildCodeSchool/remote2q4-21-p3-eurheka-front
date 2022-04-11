import {useState, useEffect} from 'react';
import axios from 'axios';
import JobResourceCard from '../resourcesCard/JobResourceCard';
import Pagination from '../resourcesCard/Pagination';
import './VideoJob.css'

const VideoJob = () => {
  const [jobResources, setJobResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resourcesPerPage, setResourcesPerPage] = useState(4);
  const [isReduce, setIsReduce] = useState(true);

  function handleChange() {
      setIsReduce(!isReduce)
}

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}resource/bycat/1`, { withCredentials: true });
      setJobResources(res.data);
      setLoading(false);
    }
    fetchResources();
  }, [])

  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = jobResources.slice(indexOfFirstResource, indexOfLastResource);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className='mainTitle-darkTheme'>
        <div className="videoJobTitle">Job vidéos</div>
        <span onClick={handleChange}>{isReduce ? <i className="fa-solid fa-chevron-up arrowOver"></i> : <i className="fa-solid fa-chevron-down arrowOver"></i> }</span>
      </div>
      { isReduce ?
        <div className='video-resources-container'>
          <JobResourceCard
            firstClassName='video-container-list'
            secondListClassName="video-list"
            currentResources={currentResources}
            loading={loading}
          />
          <Pagination resourcesPerPage={resourcesPerPage} totalResources={jobResources.length} paginate={paginate} />
        </div> : null }
    </div>
    )
  }

export default VideoJob;
