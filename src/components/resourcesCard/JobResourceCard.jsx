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
            {/* {secondListClassName === 'video-list' ?
              <li className={secondListClassName}  ><img className='image' src={item.path} alt="" /></li> : null} */}
          <li  className={secondListClassName} key={currentResources.id}>
              <p>{item.name}</p>
              <i className={`material-icons documents`}>{icon}</i>
          </li>
          </div>
          

        ))}
      </ul>
    </div>
  )
}

export default JobResourceCard;