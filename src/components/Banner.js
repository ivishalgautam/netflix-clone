import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../axios";
import requests from "../requests";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    // setInterval(() => {
    fetchData();
    // }, 5000);
  }, []);

  function truncate(string, n) {
    return string?.length >= n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-items">
        <h1>{movie?.title || movie?.original_title || movie?.name}</h1>

        <div className="btn-container">
          <button className="btn">Watch Now</button>
          <button className="btn">View Trailer</button>
        </div>
        <p>{truncate(movie?.overview, 150)}</p>
      </div>
    </div>
  );
}
