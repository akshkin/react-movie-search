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
  } = movie;

  return (
    <div className="card">
      <Link to={`/${option}/${id}`}>
        {/* <h3>{title || name}</h3>       */}
        <img className="poster" src={`${baseImg}${poster_path}`} alt="" />
        {vote_average && vote_count ? (
          <p>
            <StarIcon /> {vote_average.toFixed(1)} ({vote_count})
          </p>
        ) : (
          <p>
            <StarIcon /> 0 (0)
          </p>
        )}
        {release_date && <p>Date of release: {release_date}</p>}
      </Link>
    </div>
  );
}

export default Card;
