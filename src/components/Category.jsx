
      

    import React from 'react';

import MovieCard from './MovieCard';
const Category = ({category, movies}) => {


    return (
        
    <div className="category">
        
    <div className="category-title">
      <h3>{category.name}</h3>
    </div>

    <div className="category-row">
      
      {movies.map((movie)=> {
          if(movie.category_id === category.id){
            return (
              <MovieCard movie={movie}/>

            )
          }
      }


      )}
   

    </div>
  </div>

    );
};

export default Category;