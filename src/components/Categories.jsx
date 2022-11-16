import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../reducks/categories/selectors";
import { useEffect } from "react";
import { fetchCategories } from "../reducks/categories/operations";
import Category from "./Category";
import { getMovies } from "../reducks/movies/selectors";
import { fetchMovies } from "../reducks/movies/operations";




const Categories = () => {

    const dispatch = useDispatch();
    const categories= useSelector(getCategories);
    const movies = useSelector(getMovies);


    useEffect(()=>{
     dispatch(fetchCategories());
     dispatch(fetchMovies());
     
    },[])

  return (<>
  {categories.map((category)=>(
      <Category category={category} movies={movies}/>

  ))}
  </>
  

  );
};

export default Categories;
