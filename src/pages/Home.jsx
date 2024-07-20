import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
// import { apiKey } from "../constants";
import axios from "axios";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "one piece";
  try {
    // const endpoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const endpoint = `http://www.omdbapi.com/?apikey=eb427671&s=${searchTerm}`;
    const response = await axios.get(endpoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errormsg = error?.response?.data?.Error || error.message;
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errormsg,
    };
  }
}
function Home() {
  const data = useLoaderData();

  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </div>
  );
}

export default Home;
