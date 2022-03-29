import React from 'react'

const Pagination = ({ resourcesPerPage, totalResources, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalResources / resourcesPerPage); i++) {
        pageNumbers.push(i);
    }

    // analyse le nombre de pages selon les ressources et le pas que tu choisis et genere autant de boutons que necessaire
  return (
    <div>
        <ul>
            {pageNumbers.map((number) => (
                <li key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination;