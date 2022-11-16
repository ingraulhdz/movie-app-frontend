import React, { useCallback, useEffect, useRef, useState } from "react";

import MainMovie from './MainMovie';
import Header from './Header'

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../reducks/movies/operations";
import { getMovies } from "../reducks/movies/selectors";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";
import MovieCard from "./MovieCard";
import { fetchFavsOperation } from "../reducks/favs/operations";

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(getMovies);
    const categories = useSelector(getCategories);
  
    useEffect(() => {
      dispatch(fetchMovies());
      dispatch(fetchCategories());
      dispatch(fetchFavsOperation());
      
    }, []);

    return (
<>

<MainMovie />

     
<div className="category">
        
        <div className="category-title">
          <h3>Newly Released</h3>
        </div>
    
        <div className="category-row">
        {movies.map((movie) => {
                if (movie.release_type === "Newly Released") {
                  return <MovieCard movie={movie} key={movie.id} />;
                }
              })}
    
        </div>
      </div>


     
      <div className="category">
        
        <div className="category-title">
          <h3>Cooming soon</h3>
        </div>
    
        <div className="category-row">
        {movies.map((movie) => {
                if (movie.release_type === "Coming Soon") {
                  return <MovieCard movie={movie} key={movie.id} />;
                }
              })}
    
        </div>
      </div>







</>



    );
};

export default Home;