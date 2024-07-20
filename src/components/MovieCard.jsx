import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
function MovieCard({ Title, Year, imdbID, Type, Poster }) {
  return (
    <Link className={styles.movieCard} to={`details/${imdbID}`}>
      <img
        src={
          Poster === "N/A"
            ? "https://bcelectronics.co.za/wp-content/uploads/2024/01/2024-BCE-Website-Image-Not-Available-2.jpg"
            : Poster
        }
        alt=""
        className={styles.moviePoster}
      />
      <h2 className={styles.movieTitle}>{Title}</h2>
      <h4 className={styles.movieYear}>{Year}</h4>
      <h4 className={styles.movieType}>{Type}</h4>
    </Link>
  );
}

export default MovieCard;
