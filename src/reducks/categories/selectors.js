import { createSelector } from "reselect";

const categorySelector = state => state.categories.list;
export const getCategories= createSelector([categorySelector], state => state)
