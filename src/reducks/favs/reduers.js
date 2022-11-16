import initialState from "../store/initialState"
import * as actions from './action'


 const favsReducer =(state= initialState.favs,  action) =>{
switch(action.type){
    case actions.FETCH_FAVS:
        return {
           
            list:action.payload
        };
    case actions.ADD_FAVS:
        return {
            list :action.payload
        }
    case actions.DELETE_FAVS:
        return {
            list: action.payload
        }
    
            default:
            return state
}
}

export default favsReducer;

