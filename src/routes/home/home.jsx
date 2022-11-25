import React, { useState, useEffect, useContext } from 'react'
import { Card, Hero } from "../../components/index"
import { fetchPopular } from '../../fetchApi'
import { Context } from '../../context/context'
import { FadeLoader } from 'react-spinners'
import "./home.styles.scss"

function Home() {

  const {option, setLoading, loading} = useContext(Context)
  
  const [popularMovies, setPopularMovies] = useState([])
   const [topRated, setTopRated] = useState([])
  const [latest, setLatest] = useState([])

  const displayOption = option === "movie" ? "Movies" : "Tv Shows"

  useEffect(() => {
    fetchPopular(option, "popular")
      .then(data => setPopularMovies(data.results))

    fetchPopular(option, "top_rated")
      .then(data => setTopRated(data.results))

    fetchPopular(option, "latest")
    .then(data => setLatest(data.results))

    setLoading(false)
  }, [option])

  
  return (
    loading ?  <FadeLoader /> :
    (
      <div className='home'>
        <Hero />
        <h2>Popular {displayOption}</h2>
        <div className='popular-movies'>
          {popularMovies.map(movie => <Card width="300px" option={option} movie={movie}/>)}
        </div>
        <h2>Top rated {displayOption}</h2>
        <div className='popular-movies'>
          {topRated.map(movie => <Card width="300px" option={option} movie={movie}/>)}
        </div>
        {
          latest && 
          <>
            <h2>Latest {displayOption}</h2>
            <div className='popular-movies'>
              {latest?.map(movie => <Card width="300px" option={option} movie={movie}/>)}
            </div>
          </>
        }
      </div>
    )
  )
}

export default Home