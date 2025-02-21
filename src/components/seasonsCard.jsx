import React from "react";
import "./card/card.styles.scss";

function SeasonsCard({ season }) {
  const baseImg = "https://image.tmdb.org/t/p/w500";
  const { name, episode_count, poster_path } = season;
  return (
    <div
      className="card"
      style={{ cursor: "default", height: "400px", width: "200px" }}
    >
      {/* <img
        className="poster"
        src={`${baseImg}/${poster_path}`}
        alt={`${name}`}
      /> */}
      {poster_path ? (
        <img className="poster" src={`${baseImg}${poster_path}`} alt={name} />
      ) : (
        <img
          className="no-poster"
          src="/assets/images/placeholder.jpg"
          alt={name}
        />
      )}
      <h3>{name}</h3>
      {episode_count && <p>Episodes: {episode_count}</p>}
    </div>
  );
}

export default SeasonsCard;
