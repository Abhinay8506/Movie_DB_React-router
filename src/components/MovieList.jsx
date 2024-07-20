import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
function MovieList({ data }) {
  if (data.isError) {
    return <h1>{data.error}</h1>;
  }
  const { movieApiResponse } = data;
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <h1>{movieApiResponse.Error || "Result not found"}</h1>;
  }
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieApiResponse.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
