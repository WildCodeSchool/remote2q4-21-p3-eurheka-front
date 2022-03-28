import React from 'react';
import './JobList.scss';

const JobList = ({jobsList,jobCategory,jobType}) => {
    let jobArray=[];
    console.log(`Catégorie : ${jobCategory}`);
    if(parseInt(jobCategory)!==0){
        const tempArray=jobsList.filter(job=>job.cat_job===parseInt(jobCategory));
        jobArray=[...tempArray];
    }
    else{
        jobArray=[...jobsList];
    }
    let displayJobArray=[];
    if(parseInt(jobType)!==0){
        console.log('on passe le if');
        const TempArray2=jobArray.filter(job=>parseInt(job.id_type)==jobType);
        displayJobArray=[...TempArray2];
        console.log('Ici');
    }
    else{
        displayJobArray=[...jobArray];
        console.log('on passe pas le if');
    }
    console.log(`Tableau : ${displayJobArray}`);

    return (
        <div className='JobList'>
             {displayJobArray&&displayJobArray.map((job)=>{
                return(
                    <p key={job.id_job}><a href={`${process.env.REACT_APP_URL}${job.path}`} target="_blank">{job.name} - {job.category_name} - {job.name_offer}</a></p>
                )
            })
            }
        </div>
    )
}

export default JobList
