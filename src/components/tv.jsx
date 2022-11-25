import React from 'react'
import { Link } from 'react-router-dom'
import { Cast, Card, SeasonsCard } from "./index"
import ReactPlayer from 'react-player'
import { ReactComponent as StarIcon } from "../assets/starIcon.svg"
import { ReactComponent as LinkIcon } from "../assets/link.svg"

function TV({ tv, cast, similarMovies, player }) {

  const { id, name, tagline, homepage, genres, overview, vote_average, vote_count, created_by, number_of_episodes, number_of_seasons, seasons, poster_path, backdrop_path } = tv
  const baseImg = 'https://image.tmdb.org/t/p/original'

  return (
    <>
      <img className='movie-backdrop' src={`${baseImg}${backdrop_path}`} alt="" />
      <div className='movie-grid'>
        <div className='movie-content'>
          <h1>{name}</h1>
          { tagline && <i> - {tagline}</i> }
          { genres && 
            <div className='genre-container'>
              {genres.map(genre => <span key={genre.id} className='genre'>{ genre.name }</span>)}
            </div>
          }
          <p className='align-baseline'><span className='bold'>Rating:</span> <StarIcon className='icon'/> { vote_average }({ vote_count })</p>
          { homepage && <p className='align-baseline'><a href={ homepage } target="_blank" rel="noreferrer">Visit homepage</a><LinkIcon className='icon'/></p>}
          <p>Overview: { overview }</p>
          <p><span className='bold'>Created By: </span>  
          { created_by?.length ? 
              created_by.map(creator => <span>{ creator.name }, </span>) 
              : <span> N/A</span>}
          </p>
          <p><span className='bold'>Number of episodes: </span> {number_of_episodes}</p>
          <p><span className='bold'>Number of Seasons: </span> {number_of_seasons}</p>
        </div>
        <img className='movie-poster' src={`${baseImg}${poster_path}`} alt=""/>
        <h3 className='title'>Cast</h3>
        <div className='cast-container'>
          { cast?.length ? 
              (cast.map(char => <Cast key={char.id} baseImg={baseImg} char={char} />).filter((_, index) => index < 10) )
                : <p style={{marginLeft: "2em"}}>N/A</p>
          }
        </div>
        <div className="video-player">
          <ReactPlayer width="100%" height="100%" className="react-player" url={`https://www/youtube.com/watch?v=${player?.id?.videoId}`} controls/>
        </div>
        { seasons?.length ?
            (<>
              <h2 className='title'>Seasons</h2>
              <div className='cast-container'>
                { seasons?.map(season => {
                  const { id, poster_path } = season
                  if(!poster_path) return <></>
                  return (<SeasonsCard key={id} season={season} />)              
                })}
              </div>
            </>
            ) : (
              <p>This Tv show has no seasons</p>
            )
        }
        {similarMovies && 
        <>
          <h2 className='title'>You may also like: </h2>
          <div className='cast-container'>
              {similarMovies.map(similarMovie => 
                <Link to={`/tv/${similarMovie.id}`}><Card key={similarMovie.id} option="tv" movie={similarMovie} /></Link>
              )}
          </div>
        </>
        }
      </div>
    </>
  )
}

export default TV