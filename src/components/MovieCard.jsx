import React from 'react';

import heart from '../assets/img/heart.svg';
import start_rate from '../assets/img/start_rate.png';

import movie_img from '../assets/img/movie.png' ;
import redHeart from '../assets/img/redHeart.svg'
import { addFavOperation, deleteFavsOperation } from '../reducks/favs/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFavs } from '../reducks/favs/selectors';


const MovieCard = ({movie}) => {
  
  const dispatch = useDispatch();
  const selector = useSelector(state=>state);
  const favourites= getFavs(selector)

  const [showBtn, setShowBtn] = useState(true)

  console.log(favourites)

  useEffect(()=>{
    let favMovie = favourites.filter((favourite)=>favourite.id == movie.id)
    if(favMovie.length > 0){
      setShowBtn(false)
    }
    else{
      setShowBtn(true)
    }

  }, [favourites])



    return (
        <div className="movie">
        <div className="like" >
          <span>
            {showBtn ? 
            <img src={heart} onClick={()=>dispatch(addFavOperation(movie))} className="heart-like" />
            :
            <img src={redHeart} onClick={()=>dispatch(deleteFavsOperation(movie.id))} className="heart-like"/>
            }
            
          </span>
        </div>

        <div className="movie-img">
          <a href="#">
            <img src={movie.image}/>
          </a>
        </div>

        <div className="movie-details">
          <h3>{movie.name}</h3>
          <img src={start_rate} className="start-rate" />
          <p className="rate">{movie.rating}</p>
          <button className="btn"> <a href='https://www.youtube.com/watch?v=_Z3QKkl1WyM'>Trailer</a> </button>
        </div>
      </div>  
    );
};

export default MovieCard;