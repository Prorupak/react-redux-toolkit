import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieID" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
