import React from "react";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";

import MovieCard from "../movieCard/MovieCard";
import "./movieListing.scss";
import {  useAppSelector } from "../../app/hooks";
const MovieListing = () => {
  const movies = useAppSelector(getAllMovies);
  const shows = useAppSelector(getAllShows);
  console.log("movie", movies);
  let renderMovies,
    renderShows;

  renderMovies =
    movies.Response === "True" ? (
      movies?.Search?.map((movie: any, index: number) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows?.Search?.map((movie: any, index: number) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {<div className="movie-container">{renderMovies}</div>}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {<div className="movie-container">{renderShows}</div>}
        </div>
      </div>
    </div>
  );
};;

export default MovieListing;
