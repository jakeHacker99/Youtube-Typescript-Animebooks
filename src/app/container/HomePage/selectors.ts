import { IRootState } from './../../types';
import { createSelector } from "reselect"

export const selectHomepage = (state: IRootState) => state.homePage


export const makeSelectAnimepage = createSelector(selectHomepage, (homePage) => homePage.animePage)


