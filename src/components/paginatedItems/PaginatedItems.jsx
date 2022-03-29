import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

import './PaginatedItems.css'

const PaginatedItems =(props) => {
  const [resourcesPerPage] = useState(parseInt(props.resourcesPerPage));
  const [offset, setOffset] = useState(0);
  const [resources, setResources] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getResourceData = (data) => {
    return data.map((resource) => (
      <div className="container" key={resource.id}>
        <ul className={props.containerListClassName}>
        { props.secondListClassName === 'video-list' ?
           <li className={props.secondListClassName}  ><img className='image' src={resource.url} alt="" /></li> : null}
          <li className={props.listClassName}>{resource.title}</li>
        </ul>
        <i className={`material-icons ${props.iconClassName}`}>{props.icon}</i>

          
      </div>
    ));
  };
  const getAllResources = async () => {
    const res = await axios.get(`${props.url}`);
    const data = await res.data;
    const slice = data.slice(offset, offset+ resourcesPerPage);

    // For displaying Data
    const resourceData = getResourceData(slice);

    // Using Hooks to set value
    setResources(resourceData);
    setPageCount(Math.ceil(data.length / resourcesPerPage));
  };


  useEffect(() => {
    getAllResources();
  }, [offset]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage * resourcesPerPage);
    console.log(selectedPage)



  };
  return (
    <div className="main-app">
      <div className="resources">
      {resources}
      </div>
      <div className="react_paginate">
      
      <ReactPaginate
   previousLabel={"<<"}
   nextLabel={">>"}
   breakLabel={"..."}
   breakClassName={"break-me"}
   pageCount={pageCount}
   marginPagesDisplayed={2}
   pageRangeDisplayed={4}
   onPageChange={handlePageClick}
   containerClassName={`${props.paginationClassName}`}
   subContainerClassName={"pages pagination"}
   activeClassName={"active"}
      />
      </div>
    </div>
  );
}

export default PaginatedItems