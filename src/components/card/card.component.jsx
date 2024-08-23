import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";
import "./card.styles.scss";

function Card({ movie, option }) {
  const baseImg = "https://image.tmdb.org/t/p/w500";
  const {
    id,
    name,
    title,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    first_air_date,
  } = movie;

  const releaseAirDate = option === "movie" ? release_date : first_air_date;
  const releaseAirText = option === "movie" ? "Date of release" : "First aired";

  return (
    <div className="card">
      <Link to={`/${option}/${id}`}>
        {poster_path ? (
          <img
            className="poster"
            src={`${baseImg}${poster_path}`}
            alt={title || name}
          />
        ) : (
          <img
            className="no-poster"
            src="/assets/images/placeholder.jpg"
            alt={title || name}
          />
        )}
        {vote_average && vote_count ? (
          <p>
            <StarIcon /> {vote_average.toFixed(1)} ({vote_count})
          </p>
        ) : (
          <p>
            <StarIcon /> 0 (0)
          </p>
        )}
        <p>
          {releaseAirText}: {releaseAirDate || "N/A"}
        </p>
      </Link>
    </div>
  );
}

export default Card;
