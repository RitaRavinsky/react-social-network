import { followAPI, usersAPI } from "../api/api";

const FOLLOW = "rita/users/FOLLOW";
const UNFOLLOW = "rita/users/UNFOLLOW";
const SET_USERS = "rita/users/SET-USERS";
const SET_CURRENT_PAGE = "rita/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "rita/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "rita/users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "rita/users/FOLLOWING_IN_PROGRESS";

let initialState = {
  // users: [
  //   {
  //     id: 1,
  //     fullname: "Rita Ravinsky",
  //     userPic: "https://picsum.photos/70",
  //     status: "Hi there!",
  //     location: { city: "Haifa", country: "Israel" },
  //     isFollowing: true,
  //   },
  //   {
  //     id: 2,
  //     fullname: "Jon Snow",
  //     userPic: "https://picsum.photos/71",
  //     status: "I'm a bastard.",
  //     location: { city: "Salt Lake City", country: "USA" },
  //     isFollowing: false,
  //   },
  //   {
  //     id: 3,
  //     fullname: "Anna Karenina",
  //     userPic: "https://picsum.photos/72",
  //     status: "Where is a train station?",
  //     location: { city: "Moscow", country: "Russia" },
  //     isFollowing: false,
  //   },
  //   {
  //     id: 4,
  //     fullname: "Kate Dibiasky",
  //     userPic: "https://picsum.photos/73",
  //     status: "Look up!",
  //     location: { city: "East Lansing", country: "USA" },
  //     isFollowing: false,
  //   },

  // ],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  users: [],
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

//action creators
export const follow = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users: users,
});
export const setCurrentPage = (current) => ({
  type: SET_CURRENT_PAGE,
  currentPage: current,
});
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  followingInProgress,
  userId,
});

// thunks
export const getUsersThunkCreator =
  (pageSize = 4, currentPage = 1) =>
  async (dispatch) => {
    // show loader
    dispatch(toggleIsFetching(true));
    // ajax
    const data = await usersAPI.getUsers(pageSize, currentPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    //hide loader
    setTimeout(function () {
      dispatch(toggleIsFetching(false));
    }, 500);
  };

export const followUnfollowFlow = async (
  dispatch,
  userId = 22976,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const followThunkCreator =
  (userId = 22976) =>
  async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      followAPI.follow.bind(followAPI),
      follow
    );
  };

export const unfollowThunkCreator =
  (userId = 22976) =>
  async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      followAPI.unfollow.bind(followAPI),
      unfollow
    );
  };

export default usersReducer;
