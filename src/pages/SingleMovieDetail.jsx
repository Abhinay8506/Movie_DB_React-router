import axios from "axios";
import { useLoaderData } from "react-router-dom";
// import { apiKey } from "../constants";
import styles from "./SingleMovieDetail.module.css";
export async function loader({ params }) {
  const imdbId = params.imdbId;
  // const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=full`;
  const url = `https://www.omdbapi.com/?apikey=eb427671&i=${imdbId}&plot=full`;
  try {
    const response = await axios.get(url);
    // console.log(response);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errormsg = error?.response?.data?.Error || error.message;
    return {
      movie: null,
      isError: true,
      error: errormsg,
    };
  }
}

function SingleMovieDetail() {
  const { movie: movieDetail, error, isError } = useLoaderData();
  if (movieDetail && movieDetail.Response === "False") {
    return <h1>{movieDetail.Error}</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={`container ${styles.movieDetail}`}>
      <div className={styles.infoOnLeft}>
        <h2>{movieDetail.Title}</h2>
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
        <p className={styles.infoPara}>
          <span className={styles.key}>Release Date</span>
          <span className={styles.value}>{movieDetail.Released}</span>
        </p>

        <p className={styles.infoPara}>
          <span className={styles.key}>Genre</span>
          <span className={styles.value}>{movieDetail.Genre}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Runtime</span>
          <span className={styles.value}>{movieDetail.Runtime}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Language</span>
          <span className={styles.value}>{movieDetail.Language}</span>
        </p>
        <p className={styles.infoPara}>
          <span className={styles.key}>Awards</span>
          <span className={styles.value}>{movieDetail.Awards}</span>
        </p>
      </div>

      <div className={styles.infoOnRight}>
        <div className="plot">
          <div className={styles.bigInfo}>
            <h3>Plot</h3>
            <p>{movieDetail.Plot}</p>
          </div>

          <div className={styles.bigInfo}>
            <h3>Actors</h3>
            <p>{movieDetail.Actors}</p>
          </div>

          <div className={styles.bigInfo}>
            <h3>Country</h3>
            <p>{movieDetail.Country}</p>
          </div>
          <h2>More Info</h2>
          <p className={styles.infoPara}>
            <span className={styles.key}>Director</span>
            <span className={styles.value}>{movieDetail.Director}</span>
          </p>

          <p className={styles.infoPara}>
            <span className={styles.key}>Boxoffice</span>
            <span className={styles.value}>
              {movieDetail.Boxoffice || "N/A"}
            </span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>IMDB Rating</span>
            <span className={styles.value}>{movieDetail.imdbRating}</span>
          </p>
          <p className={styles.infoPara}>
            <span className={styles.key}>Rated</span>
            <span className={styles.value}>{movieDetail.Rated}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieDetail;
