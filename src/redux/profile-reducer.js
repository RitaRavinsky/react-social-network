import { profileAPI } from "../api/api";

const ADD_POST = "rita/profile/ADD-POST";
const TOGGLE_IS_FETCHING = "rita/profile/TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "rita/profile/SET_USER_PROFILE";
const SET_STATUS = "rita/profile/SET_STATUS";
const DELETE_POST = "rita/profile/DELETE_POST";

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
export const getProfile = (userId) => async (dispatch) => {
  // show loader
  dispatch(toggleIsFetching(true));
  // ajax
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));

  //hide loader
  setTimeout(function () {
    dispatch(toggleIsFetching(false));
  }, 500);
};

export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(res.data));
  }
};

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
