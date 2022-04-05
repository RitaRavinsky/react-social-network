import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

// example of selector
export const getUsersReselect = createSelector(getUsers, (users) => {
  debugger;
  return users.filter((u) => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
