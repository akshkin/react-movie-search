import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchPopular } from '../../fetchApi'
import "./hero.styles.scss"

function Hero({ option }) {
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "40vh",
    height: "100vh",
    cursor: "pointer"
  }
  const { title, overview, name } = hero
  return (
    <div onClick={() => navigate(`/${option}/${hero.id}`)} className='hero' style={style}>
      <div className='hero-content'>
        {/* <h1>{title || name}</h1>
        <p>{overview}</p> */}
      </div>
    </div>
  )
}

export default Hero