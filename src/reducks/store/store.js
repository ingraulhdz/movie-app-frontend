import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as configureStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { PostsReducer } from '../posts/reducers';
import { moviesReducer } from '../movies/reducers';
import { categoriesReducer } from '../categories/reducers';
import  favsReducer  from '../favs/reduers';

const createStore = () =>{

  return configureStore(
    combineReducers({
     posts:PostsReducer,
     movies: moviesReducer,
     categories: categoriesReducer,
     favs: favsReducer
    }),
composeWithDevTools(applyMiddleware(thunk))

  )

}

export default createStore;