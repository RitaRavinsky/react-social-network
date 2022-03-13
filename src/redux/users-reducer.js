const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  users: [],
  isFetching:true,
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
      return { ...state, isFetching:action.isFetching}
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

export default usersReducer;
