import React, { useContext, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useParams } from "react-router-dom"
import Card from '../../components/card/card.component'
import Pagination from '../../components/pagination/pagination'
import { Context } from '../../context/context'
import "./searchPage.styles.scss"


function SearchPage() {
  const { query } = useParams()
  const { movies, option, searchTerm } = useContext(Context)

  return (
    <>      
      {searchTerm ? <Pagination />: null}  
      <h2><span style={{color: "#bdbbb6", marginLeft: "2em"}}>Search results for</span>  {query}</h2>
      <div className='card-container'>
        {movies && movies.map(movie => {
          if(!movie.poster_path) return null
          return (
          <Card option={option} key={movie.id} movie={movie}/>
          )       
        })}
      </div>
      {searchTerm ? <Pagination /> : null}
    </>
  )
}

export default SearchPage