import React from 'react'
import { ReactComponent as TMDb } from "../../assets/tmdb-logo.svg"
import "./footer.styles.scss"

function Footer() {
  return (
    <footer>      
      <TMDb className='icon'/>     
      <p>This product uses the <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB</a> API but is not endorsed or certified by TMDB.</p>
    </footer>
  )
}

export default Footer