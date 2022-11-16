import API from '../../API';
import { fetchCategoriesAction } from './actions';

const api = new API()

export const fetchCategories = params => {
    return async dispatch => {
        return api.getCategories(params).then( (res) => {
            dispatch(fetchCategoriesAction(res))
        }).catch((error) => {
            alert("error trying to connect API movies")

        })
    }

}

