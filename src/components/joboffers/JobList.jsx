import React from 'react';
import './JobList.scss';

const JobList = ({jobsList,jobCategory,jobType}) => {
    let jobArray=[];
    if(parseInt(jobCategory)!==0){
        const tempArray=jobsList.filter(job=>job.cat_job===parseInt(jobCategory));
        jobArray=[...tempArray];
    }
    else{
        jobArray=[...jobsList];
    }
    let displayJobArray=[];
    if(parseInt(jobType)!==0){
        const TempArray2=jobArray.filter(job=>parseInt(job.id_type)==jobType);
        displayJobArray=[...TempArray2];
    }
    else{
        displayJobArray=[...jobArray];
    }

    return (
        <div className='JobList'>
             {displayJobArray&&displayJobArray.map((job)=>{
                return(
                    <li className='jobListContainer'>
                        <a href={`${process.env.REACT_APP_URL}${job.path}`} className='jobLink' target="_blank">
                            <p key={job.id_job} className='jobText'>{job.name} - {job.category_name} - {job.name_offer}</p><i className="fa-regular fa-copy picto"></i>
                        </a>
                    </li>
                )
            })
            }
        </div>
    )
}

export default JobList
