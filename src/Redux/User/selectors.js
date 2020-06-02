import { createSelector } from "reselect";

const selectUser = state => state.user; // this line just gets the user state from the redux store

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
