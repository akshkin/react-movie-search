import React, { useEffect, useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SearchInput from '../searchInput/searchInput'
import { Context } from '../../context/context'
import "./navigation.styles.scss"
import { ReactComponent as HomeIcon } from "../../assets/home.svg"

function Navigation() {  
  const { query } = useParams()
  const location = useLocation()

  const { option, setOption, currentPage, searchQuery, searchTerm, setSearchTerm } = useContext(Context)

  const reqLocation = location.pathname === "/" || location.pathname.split("/")[1] === `search`

  useEffect(() => {
    searchQuery()    
  }, [option, currentPage])

  useEffect(() => {
    sessionStorage.setItem("option", option)
  }, [option, searchTerm])

  const activeMovie = option === "movie" ? "active" : ""
  const activeTv= option === "tv" ? "active" : "" 
 
 

  return (
    <header>
      <Link to="/"><HomeIcon className='icon'/>Home</Link>
      {reqLocation &&
        <ul>
          <li className={activeMovie} onClick={() => setOption("movie")}>Movie</li>
          <li className={activeTv} onClick={() => setOption("tv")}>Tv</li>
        </ul>
      }
      <SearchInput />
    </header>
  )
}

export default Navigation