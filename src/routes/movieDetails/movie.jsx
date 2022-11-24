import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movie from '../../components/movie'
import TV from '../../components/tv'
import { fetchCategory, fetchDataFromApi, fetchMovie, fetchTrailer } from '../../fetchApi'
import { Context } from '../../context/context'
import FadeLoader from 'react-spinners/FadeLoader'
import "./movie.styles.scss"
import "../../App.scss"

function MovieDetail() {

  const { option, movies, thisId, setThisId, loading, setLoading } = useContext(Context)
  const { movieId } = useParams()
  
  const [movie, setMovie] = useState("")
  const [similarMovies, setSimilarMovies] = useState([])
  const [reviews, setReviews] = useState('')
  const [video, setVideo] = useState({})
  const [cast, setCast] = useState([]) 
  const [player, setPlayer] = useState("")

  const thisMovie = movies?.find(movie => movie.id.toString() === movieId)

  
   
  const searchId = thisMovie?.id || movieId
  
  useEffect(() => {
    sessionStorage.setItem("search", movieId)
  },[thisId, movieId])

  useEffect(() => { 
    if(thisMovie || thisId !== movieId || window.location.reload){
      setThisId(searchId)

      fetchMovie(option, thisId)
        .then(data => setMovie(data))
      
      fetchCategory(option, thisId, "similar")
        .then(data => setSimilarMovies(data.results))
      
      fetchCategory(option, thisId, "reviews")
        .then(data => setReviews(data.results))

      fetchCategory(option, thisId, "credits")
        .then(data => setCast(data.cast))
      
      fetchCategory(option, thisId, "videos")
        .then(data => setVideo(data?.results[0]))     
      
      }       
      setLoading(false)   
    }, [thisMovie, option, thisId, searchId, movieId, setThisId, setLoading])
    
    useEffect(() => {
      fetchDataFromApi(`search?part=snippet&q=${video?.name}`)
        .then(data => setPlayer(data?.items[0]))      
  }, [searchId, video])
  
  console.log(cast)


  useEffect(()=>{
    window.scrollTo(0,0);
  }, [thisId]);
 
  if (loading) return <FadeLoader />
  return (option === "movie" && !loading) ?      
      (
        <>
          <Movie player={player} reviews={reviews} movie={movie} cast={cast} similarMovies={similarMovies}/>
        </>
      ) : (
        <>
          <TV player={player} tv={movie} cast={cast} similarMovies={similarMovies}/>
        </>
      )
  
}

export default MovieDetail