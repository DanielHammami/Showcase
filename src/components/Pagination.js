import React from 'react'

function Pagination({ articlesPerPage, totalArticles, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i += 1){
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        { pageNumbers.map(number => (
          <li key={ number } className='page-item'>
            <button
              className='page-link'
              onClick = { () =>  paginate(number) }
            >
              { number }
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
