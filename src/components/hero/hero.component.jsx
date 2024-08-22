import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchPopular } from "../../fetchApi";
import "./hero.styles.scss";

function Hero({ option }) {
  const [hero, setHero] = useState({});

  const getRandomNumber = (arr) => Math.ceil(Math.random() * arr.length);

  const randomNumber = 0;

  useEffect(() => {
    if (option === "movie") {
      fetchPopular("movie", "now_playing").then((data) =>
        setHero(data?.results[randomNumber])
      );
    } else {
      fetchPopular("tv", "on_the_air").then((data) =>
        setHero(data?.results[randomNumber])
      );
    }
  }, [option]);

  const baseImg = "https://image.tmdb.org/t/p/original";
  // const style ={
  //   backgroundImage: `url(${baseImg}${hero.backdrop_path})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   width: "100%",
  //   minHeight: "50vh",
  //   cursor: "pointer",
  //   margin: "0 auto",
  // }

  const { id, title, backdrop_path, overview, name } = hero;

  return (
    <div className="hero">
      <h1 className="hero-title">
        Now {option === "movie" ? "playing" : "airing"}
      </h1>
      <Link to={`/${option}/${id}`}>
        <img
          src={`${baseImg}${backdrop_path}`}
          alt={`${title || name} backdrop`}
        />
        <p className="title">{title || name}</p>
      </Link>
    </div>
  );
}

export default Hero;
