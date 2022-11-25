import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/context'

import { fetchPopular } from '../../fetchApi'
import "./hero.styles.scss"

function Hero() {
  const { option } = useContext(Context)
  const [hero, setHero] = useState({})
  const navigate = useNavigate()
  
  useEffect(() => {
   
    fetchPopular(option, "now_playing")
      .then(data => (setHero(data?.results[6])))

    fetchPopular(option, "on_the_air")
      .then(data => setHero(data?.results[1]))
  }, [option])
  
  const baseImg = 'https://image.tmdb.org/t/p/original'
  const style ={
    backgroundImage: `url(${baseImg}${hero.backdrop_path})`, 
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "50vh",
    cursor: "pointer",
    margin: "0 auto",
  }

  const { id, title, backdrop_path, overview, name } = hero
  return (
    <>
      <h1 className='hero-title'>Now {option === "movie" ? "playing" : "airing"}</h1>
      <div onClick={() => navigate(`/${option}/${id}`)} className='hero' >
        <img src={`${baseImg}${backdrop_path}`} alt={`${title || name} backdrop`}/>
      </div>
    </>
  )
}

export default Hero