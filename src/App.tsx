import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieID" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
