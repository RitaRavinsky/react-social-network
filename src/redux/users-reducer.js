const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullname: "Rita Ravinsky",
      userPic: "https://picsum.photos/70",
      status: "Hi there!",
      location: { city: "Haifa", country: "Israel" },
      isFollowing: true,
    },
    {
      id: 2,
      fullname: "Jon Snow",
      userPic: "https://picsum.photos/71",
      status: "I'm a bastard.",
      location: { city: "Salt Lake City", country: "USA" },
      isFollowing: false,
    },
    {
      id: 3,
      fullname: "Anna Karenina",
      userPic: "https://picsum.photos/72",
      status: "Where is a train station?",
      location: { city: "Moscow", country: "Russia" },
      isFollowing: false,
    },
    {
      id: 4,
      fullname: "Kate Dibiasky",
      userPic: "https://picsum.photos/73",
      status: "Look up!",
      location: { city: "East Lansing", country: "USA" },
      isFollowing: false,
    },
  ],
  usersPerPage: 4,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isFollowing: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isFollowing: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

//action creators
export const followActionCreator = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users: users,
});

export default usersReducer;
