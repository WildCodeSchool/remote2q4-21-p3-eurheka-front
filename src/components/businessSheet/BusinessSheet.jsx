import {useState, useEffect} from 'react';
import ResourcesCard from '../resourcesCard/ResourcesCard';
import {useParams} from "react-router-dom";
import axios from 'axios';
import './BusinessSheet.css'

const BusinessSheet = () => {
const [jobResources, setJobResources] = useState([]);
let {id} = useParams();
useEffect(() => {
  axios
      .get(`${process.env.REACT_APP_API_URL}resource/bycat/3`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => setJobResources(data))

}, [])


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
            jobResources={jobResources}
            resourcesPerPage= {10}

          />
    </div>
    )
  }


export default BusinessSheet;
