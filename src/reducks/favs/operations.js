
import {addFavs, deleteFavs, fetchFavs} from './action';

let myFavs='myFavs'
const setUpLocalStorage = (favs) => {
    localStorage.setItem(myFavs, JSON.stringify(favs))

}

export const addFavOperation= (movie)=>{
    return async (dispatch, getState)=>{
       let  previousFavs = getState().favs.list
       let nextFavs = [movie, ...previousFavs];

setUpLocalStorage(nextFavs)
dispatch(addFavs(nextFavs))


    }
}


export const fetchFavsOperation = () => {

    return async dispatch=> {
        let previousFavs = localStorage.getItem(myFavs);
        let favsList = [];

        if( previousFavs){
        favsList = JSON.parse(previousFavs);



        }
        dispatch(fetchFavs(favsList));


    }
}


export const deleteFavsOperation = (id) => {
    return async (dispatch, getState) => {
        let previousFavs = getState().favs.list;
        const nextFavs = previousFavs.filter((movie) => movie.id !== id )
        setUpLocalStorage(nextFavs)
        dispatch(deleteFavs(nextFavs))
        
    }
}