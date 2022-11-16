import initialState from "../store/initialState";
import * as actions from './actions'

export const categoriesReducer = (state = initialState.categories, action) => {
    switch(action.type) {
        case actions.fetchCategories:
            return {
                list:action.payload
            };
            default:
                return state
    }
}