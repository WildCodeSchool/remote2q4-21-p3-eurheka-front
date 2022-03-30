import {useState, useEffect} from 'react';
import axios from 'axios';
import './DownloadDoc.css'
import JobResourceCard from '../resourcesCard/JobResourceCard';
import Pagination from '../resourcesCard/Pagination';

const DownloadDoc = () => {
  const [jobResources, setJobResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // indique le nombre de ressources par pages
  const [resourcesPerPage, setResourcesPerPage] = useState(5);
  const [isReduce, setIsReduce] = useState(true);

  function handleChange() {
      setIsReduce(!isReduce)
}


  // fetch des ressources depuis la BDD
  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}resource/bycat/2`, { withCredentials: true });
      setJobResources(res.data);
      setLoading(false);
    }
    fetchResources();
  }, [])

  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = jobResources.slice(indexOfFirstResource, indexOfLastResource);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)};

  return (
    <div className="BusinessSheet">
      <div className='mainTitle-lightTheme'>
      <h2>Documents à télécharger</h2>
      <span onClick={handleChange}>{isReduce ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i> }</span>

      </div>
      
      {isReduce ?
        <div className='doc-resources-container'>
          <JobResourceCard
            secondListClassName="doc-list"
            icon="visibility"
            currentResources={currentResources}
            loading={loading}
          />
          <Pagination resourcesPerPage={resourcesPerPage} totalResources={jobResources.length} paginate={paginate} />
          </div> : null}
    </div>
    )
  }


export default DownloadDoc;
