import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPopular } from "../../fetchApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./hero.styles.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero({ option }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (option === "movie") {
      fetchPopular("movie", "now_playing").then((data) => {
        setData(data?.results);
      });
    } else {
      fetchPopular("tv", "on_the_air").then((data) => {
        setData(data?.results);
      });
    }
  }, [option]);

  const baseImg = "https://image.tmdb.org/t/p/original";

  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((result, index) => (
          <SwiperSlide key={result.id} virtualIndex={index}>
            {/* <h1 className="hero-title">
              Now {option === "movie" ? "playing" : "airing"}
            </h1> */}

            <img
              src={`${baseImg}${result.backdrop_path}`}
              alt={`${result.title || result.name} backdrop`}
            />
            <Link to={`/${option}/${result.id}`}>
              <h1 className="title">{result.title || result.name}</h1>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
