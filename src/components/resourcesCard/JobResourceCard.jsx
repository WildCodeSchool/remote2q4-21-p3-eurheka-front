import {useState} from 'react';
import './JobResourceCard.css';

const JobResourceCard = ({ currentResources, loading, firstClassName, secondListClassName, icon } ) => {
  const [isReduce, setIsReduce] = useState(true);

    function handleChange() {
        setIsReduce(!isReduce)
}
  if(loading) {
      return <p>En cours de chargement...</p>
  }

  return (
    <div>
      <ul className={firstClassName}>
        {currentResources.map(item => (
          <div>
            {secondListClassName === 'video-list' ?
              <li className={secondListClassName}  >
                <iframe className='iframe' width="560" height="315" src={item.path} title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li> : null}
              <li  className={secondListClassName} key={currentResources.id}>
                <p>{item.name}</p>
              {/* <i className={`material-icons documents`}>{icon}</i> */}
              <a href={item.path}><i className={`material-icons documents`}>{icon}</i></a>
          </li>
          </div>
          

        ))}
      </ul>
    </div>
  )
}

export default JobResourceCard;