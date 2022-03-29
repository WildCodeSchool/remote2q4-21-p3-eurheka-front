import {useState, useEffect} from 'react';
import ResourcesCard from '../resourcesCard/ResourcesCard';
// import {useParams} from "react-router-dom";
import axios from 'axios';
import './BusinessSheet.css'
import JobResourceCard from '../resourcesCard/JobResourceCard';
import Pagination from '../resourcesCard/Pagination';

const BusinessSheet = () => {
  const [jobResources, setJobResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // indique le nombre de ressources par pages
  const [resourcesPerPage, setResourcesPerPage] = useState(5);

  // fetch des ressources depuis la BDD
  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}resource/bycat/3`, { withCredentials: true });
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
          <JobResourceCard
            // mainTitle = "Fiches métiers"
            // mainTitleClassName='mainTitle-lightTheme'
            // // url={'https://jsonplaceholder.typicode.com/posts'}
            // listClassName='list-darkTheme'
            // containerListClassName='container-list'

            // icon='visibility'
            // iconClassName='documents'
            // firstClassName='doc-resources-container'
            // secondClassName='doc-resources-container-reduced'
            // paginationClassName='doc-pagination'
            currentResources={currentResources}
            loading={loading}
          />
          <Pagination resourcesPerPage={resourcesPerPage} totalResources={jobResources.length} paginate={paginate} />
    </div>
    )
  }


export default BusinessSheet;
