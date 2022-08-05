import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";

import { fetchMoviesAsync, fetchShowsAsync } from "../../features/movies/movieSlice";
import { useAppDispatch } from "../../app/hooks";
const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchShowsAsync());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
