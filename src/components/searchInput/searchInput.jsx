import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/context'
import "./searchInput.styles.scss"

function SearchInput( ) {

  const { setSearchTerm, searchQuery, searchTerm } = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    searchQuery()
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="search-input"         
            />
          <button className='search-btn'>Search</button>
        </form> 
    </div>
  )
}

export default SearchInput