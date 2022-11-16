import API from '../../API';
import { fetchMoviesAction } from './actions';
const api= new API()

export const fetchMovies = params =>{
    return async dispatch => {
        return api.getMovies(params).then( (res) => {
            dispatch(fetchMoviesAction(res))
        }).catch((error) => {
alert("erorr trying to connect API movies")
        })
    }
}