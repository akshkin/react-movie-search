import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/context'
import { ReactComponent as PreviousIcon } from "../../assets/previou.svg"
import { ReactComponent as NextIcon } from "../../assets/next.svg"
import "./pagination.styles.scss"

function Pagination() {
  const { currentPage, setCurrentPage, searchQuery, totalPages, option } = useContext(Context)
  
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
    searchQuery()
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    searchQuery()
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [option, setCurrentPage])

  const returnClassName = (page) => {
    return page === currentPage ? "active-page" : "page"
  }

  const notOne = currentPage !== 1
  const notLast = currentPage !== totalPages

  return (
    <div className='pages-container'>
      <button disabled={currentPage === 1} onClick={prevPage}>
        <PreviousIcon />
      </button>
      {notOne &&  
        <button className={returnClassName(1)} onClick={() => setCurrentPage(1)}>
          1
        </button>}
      {notOne &&  currentPage > 3  && <span>...</span>}
      {notOne && currentPage > 2 && 
        <button className={returnClassName(currentPage - 1)} onClick={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </button>
      }
      <button className={returnClassName(currentPage)} onClick={() => setCurrentPage(currentPage)}>      
        {currentPage}
      </button>
      {notLast && (currentPage < totalPages - 1 ) && 
        <button className={returnClassName(currentPage + 1)} onClick={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </button>
      }
      {((currentPage !== totalPages) && (currentPage < totalPages - 2)) && <span>...</span>}
      {notLast && 
        <button className={returnClassName(totalPages)} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>}
      <button disabled={currentPage === totalPages} onClick={nextPage}>
        <NextIcon />
      </button>
    </div>
  )
}

export default Pagination