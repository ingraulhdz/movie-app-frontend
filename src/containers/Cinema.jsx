import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../reducks/movies/operations";
import { getMovies } from "../reducks/movies/selectors";
import { getCategories } from "../reducks/categories/selectors";
import MainMovie from "./MainMovie";
import MovieCard from "../components/MovieCard";
import { fetchCategories } from "../reducks/categories/operations";
import Category from "../components/Category";

const Cinema = () => {

  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <MainMovie />

      <div className="section-movies container">
        <div className="section-title">
          <h3>New relase</h3>
     
        </div>

        <div className="main-container">
          <div className="carousel-container">
            <div className="carousel">
                
              {movies.map((movie) => {
                if (movie.release_type === "Newly Released") {
                  return <MovieCard movie={movie} key={movie.id} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>


      <div className="section-movies container">
        <div className="section-title">
          <h3>Coming Soon</h3>
          <div className="controls">
            <button>L</button>
            <button>R</button>
          </div>
        </div>

        <div className="main-container">
          <div className="carousel-container">
            <div className="carousel">
              {movies.map((movie) => {
                if (movie.release_type === "Coming Soon") {
                  return <MovieCard movie={movie} key={movie.id} />;
                }
              })}
            </div>
          </div>
        </div>
      </div>







      {categories.map((category) => (
        <Category category={category} key={category.id} movies={movies} />
      ))}
    </>
  );
};

export default Cinema;
