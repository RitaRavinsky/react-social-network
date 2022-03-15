const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: "1", message: "Hi guys!", likeCount: 18 },
    { id: "2", message: "Fisrt Post Ever!", likeCount: 33 },
  ],
  newPostText: "",
  profile:null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_USER_PROFILE:
      return{ ...state, profile:action.profile };

    default:
      return state;
  }
};

//action creators
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

export default profileReducer;
