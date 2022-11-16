import React from "react";
import movie from '../assets/img/movie.png' ;
import heart from '../assets/img/heart.svg';
import start_rate from '../assets/img/start_rate.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../reducks/movies/selectors";
import MovieCard from "./MovieCard";
import { fetchFavsOperation } from "../reducks/favs/operations";
import { getFavs } from "../reducks/favs/selectors";


const Favs = () => {
const dispatch = useDispatch();
const favs = useSelector(getFavs);

useEffect(()=>{
  dispatch(fetchFavsOperation());

},[])


return (
    <div className="category">
      <div className="category-title">
        <h3>Favorites</h3>
      </div>

      <div className="category-favs">

{favs.map((movie)=>(
  <MovieCard movie={movie} />

))}


        

      </div>
    </div>
  );
};

export default Favs;
