    
export const fetchMovies = 'fetchMovies'
export const fetchMoviesAction = movies => {
    return {
        type: fetchMovies,
        payload: movies
    }
}