import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { ReactComponent as PreviousIcon } from "../../assets/previou.svg"
import { ReactComponent as NextIcon } from "../../assets/next.svg"

function Pagination() {

  const { currentPage, setCurrentPage, searchQuery, totalPages } = useContext(Context)

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
    searchQuery()
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    searchQuery()
  }

  
  const notOne = currentPage !== 1
  const notLast = currentPage !== totalPages

  return (
    <div className='pages-container'>
      <button disabled={currentPage === 1} onClick={prevPage}>
        <PreviousIcon />
      </button>
      {notOne &&  
        <button className='page' onClick={() => setCurrentPage(1)}>
          1
        </button>}
      {notOne &&  currentPage > 3  && <span>...</span>}
      {notOne && currentPage > 2 && 
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </button>
      }
      <button className='active-page' onClick={() => setCurrentPage(currentPage)}>      
        {currentPage}
      </button>
      {notLast && (currentPage < totalPages - 1 ) && 
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </button>
      }
      {((currentPage !== totalPages) && (currentPage < totalPages - 2)) && <span>...</span>}
      {notLast && 
        <button className='page' onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>}
      <button disabled={currentPage === totalPages} onClick={nextPage}>
        <NextIcon />
      </button>
    </div>
  )
}

export default Pagination