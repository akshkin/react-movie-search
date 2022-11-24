import React from 'react'
import "./card/card.styles.scss"

function SeasonsCard({ season }) {

  const baseImg = "https://image.tmdb.org/t/p/w500"
  const { name, episode_count, poster_path } = season
  return (
    <div style={{cursor: "default"}} className='card'>
      <img className='poster' src={`${baseImg}/${poster_path}`} alt={`${name}`}/>
      <h3>{name}</h3>
      {episode_count && <p>Episodes: {episode_count}</p>}
    </div>
  )
}

export default SeasonsCard