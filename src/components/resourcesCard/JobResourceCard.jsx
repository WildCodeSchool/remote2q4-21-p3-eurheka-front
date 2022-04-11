import './JobResourceCard.css';

const JobResourceCard = ({ currentResources, loading, firstClassName, secondListClassName, icon } ) => {
  
  if(loading) {
      return <p>En cours de chargement...</p>
  }

  return (
    <div>
      <ul className={firstClassName}>
        { currentResources.map(item => (
          <div key={item.id_resource}>
            {secondListClassName === 'video-list' ?
              <li className={secondListClassName}  >
              <a href={`https://www.youtube.com/watch?v=${item.path}`} target="_blank" rel="noopener noreferrer"><img src={`https://img.youtube.com/vi/${item.path}/mqdefault.jpg`} alt='youtube video'/></a>
              <p>{item.name}</p>
              </li>
              :
              <li  className={secondListClassName} key={currentResources.id}>
                <p>{item.name}</p>
                <a className='documentLink' target="_blank" rel="noopener noreferrer" href={`${process.env.REACT_APP_URL}${item.path}`}><i className={`material-icons`}>{icon}</i></a> 
              </li> 
            }
          </div>
        ))}
      </ul>
    </div>
  )
}

export default JobResourceCard;