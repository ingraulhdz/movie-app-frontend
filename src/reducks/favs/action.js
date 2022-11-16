    
export const FETCH_FAVS = 'FETCH_FAVS'
export const DELETE_FAVS = 'DELETE_FAVS'
export const ADD_FAVS = 'ADD_FAVS'

export const fetchFavs = favs => {
    return {
        type: FETCH_FAVS,
        payload: favs
    }
}

export const addFavs = favs => {
    return {
        type: ADD_FAVS,
        payload: favs
    }
}



export const deleteFavs = favs => {
    return {
        type: DELETE_FAVS,
        payload: favs
    }
}





