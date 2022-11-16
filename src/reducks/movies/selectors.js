import { createSelector } from "reselect";

const movieSelector = state => state.movies.list;
export const getMovies= createSelector([movieSelector], state => state)
