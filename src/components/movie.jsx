import React from "react";
import { Cast, Card, Review } from "./index";
import ReactPlayer from "react-player";
import { ReactComponent as StarIcon } from "../assets/starIcon.svg";
import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";

function Movie({ movie, player, cast, similarMovies, reviews }) {
  const {
    title,
    tagline,
    genres,
    overview,
    homepage,
    runtime,
    release_date,
    vote_average,
    vote_count,
    poster_path,
    backdrop_path,
  } = movie;

  const baseImg = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="movie-backdrop">
        <img src={`${baseImg}${backdrop_path}`} alt={`${title} backdrop`} />
      </div>
      <div className="movie-grid">
        <div className="movie-content">
          <h1>{title}</h1>
          {tagline && (
            <p>
              - <i>{tagline}</i>
            </p>
          )}
          {genres && (
            <div className="genre-container">
              {genres.map((genre) => (
                <span key={genre.id} className="genre">
                  {genre.name}
                </span>
              ))}
            </div>
          )}
          <p>
            <span className="bold">Overview:</span> {overview}
          </p>
          {homepage && (
            <p className="align-baseline">
              <a href={homepage} target="_blank" rel="noreferrer">
                Visit homepage{" "}
              </a>
              <LinkIcon className="icon" />
            </p>
          )}
          <p className="align-baseline">
            <span className="bold">Runtime: </span>
            <ClockIcon className="icon" /> {runtime} minutes
          </p>
          <p>
            <span className="bold">Date of Release:</span> {release_date}
          </p>
          <p className="align-baseline">
            <span className="bold">Rating: </span> <StarIcon className="icon" />{" "}
            {vote_average?.toFixed(1)}({vote_count})
          </p>
        </div>
        <div className="movie-poster">
          <img
            className="movie-poster"
            src={`${baseImg}${poster_path}`}
            alt={`${title} poster`}
          />
        </div>
      </div>

      <h3 className="title">Watch video</h3>
      <div className="video-player">
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          url={`https://www/youtube.com/watch?v=${player?.id?.videoId}`}
          controls
        />
      </div>

      <h3 className="title">Reviews</h3>
      {reviews?.length ? (
        <>
          <div className="reviews-container">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        </>
      ) : (
        <p className="reviews-container">No reviews to show</p>
      )}
      {cast.length > 0 && (
        <>
          <h3 className="title">Top Cast</h3>
          <div className="cast-container">
            {cast
              .map((char) => (
                <Cast key={char.id} baseImg={baseImg} char={char} />
              ))
              .filter((_, index) => index < 10)}
          </div>
        </>
      )}
      {similarMovies.length > 0 && (
        <>
          <h2 className="title">You may also like: </h2>
          <div className="cast-container">
            {similarMovies &&
              similarMovies.map((similarMovie) => (
                <Card
                  key={similarMovie.id}
                  option="movie"
                  movie={similarMovie}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Movie;
