import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../axios";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="image-container">
        {movies.map((movie) => {
          return <img src={`${baseUrl}${movie.poster_path}`} alt="" />;
        })}
      </div>
    </div>
  );
}
