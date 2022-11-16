import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../reducks/movies/selectors';
import { fetchMovies } from '../reducks/movies/operations';
import MovieCard from '../components/MovieCard';
import MainMovie from './MainMovie';

const CategoryPage = () => {
    
    const {id} = useParams()

    const dispatch = useDispatch();
    const movies = useSelector(getMovies);
  
    useEffect(() => {
      dispatch(fetchMovies());
    }, []);


    console.log(id)
    console.log(movies)

    

    return (
        <div>

<MainMovie />

<div className="section-movies container">
        <div className="section-title">
          <h3>Category {id} </h3>
     
        </div>

        <div className="main-container">
          <div className="carousel-container">
            <div className="carousel">

            {movies.map((movie)=>
 {
    if(movie.category_id == id){
        return (
        <MovieCard movie={movie} key={movie.id} />)
    }
 }
   
    
    )}  


            </div>
          </div>
        </div>
      </div>







        </div>
    );
};

export default CategoryPage;