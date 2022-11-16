import initialState from "../store/initialState"
import * as actions from './actions'
export const moviesReducer =(state= initialState.movies,  action) =>{
switch(action.type){
    case actions.fetchMovies:
        return {
           
            list:action.payload
        };
        default:
            return state
}
}