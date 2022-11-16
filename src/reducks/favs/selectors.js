import { createSelector } from "reselect";

const favsSelector = state => state.favs.list;
export const getFavs= createSelector([favsSelector], state => state)
