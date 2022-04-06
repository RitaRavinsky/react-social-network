import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi guys!", likeCount: 18 },
    { id: 2, message: "Fisrt Post Ever!", likeCount: 33 },
  ],
  profile: null,
  isFetching: false,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

//action creators
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText: newPostText,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

// thunks
export const getProfile = (userId) => {
  return (dispatch) => {
    // show loader
    dispatch(toggleIsFetching(true));
    // ajax
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
    //hide loader
    setTimeout(function () {
      dispatch(toggleIsFetching(false));
    }, 500);
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
