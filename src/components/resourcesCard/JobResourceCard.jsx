import React from 'react';

const JobResourceCard = ({ currentResources, loading }) => {
  if(loading) {
      return <p>En cours de chargement...</p>
  }

  return (
    <ul>
        {currentResources.map(item => (
            <li key={currentResources.id}>
                {item.name}
            </li>
        ))}
    </ul>
  )
}

export default JobResourceCard;