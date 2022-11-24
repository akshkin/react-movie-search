import React from 'react'
import "./cast.styles.scss"

function Cast({ char, baseImg }) {
  const { profile_path, original_name, character } = char
   return (
    <div className='character'>
      <img className='character-poster' src={`${baseImg}${profile_path}`} alt={char.original_name}/>
      <p>{original_name} as {character}</p>      
    </div>
  )
}

export default Cast