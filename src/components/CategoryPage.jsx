import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import API from '../API';
import { fetchCategories } from '../reducks/categories/operations';
import { getCategories } from '../reducks/categories/selectors';
import MovieCard from './MovieCard';
const CategoryPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const api = new API()
    const [movie, setMovie] = useState([])

    const categories = useSelector(getCategories);

    useEffect(()=>{
        dispatch(fetchCategories());

        api.getMovieByCategory(id).then(movies=>{
            setMovie(movies)
        }).catch(err =>{
            console.log(err)
        })
    },[id])
    let cata =  categories.filter(function(ca) {
        return ca.id == id;
    })
    console.log(cata[0].name)


    return (
        <div className="category">
        
        <div className="category-title">
          <h3>{cata[0].name}</h3>
        </div>
    
        <div className="category-row">
           {movie && movie.length>0 && movie.map(mov=>
            <MovieCard movie={mov }/>
           )}
            


        </div>
        </div>
            
    );
};

export default CategoryPage;