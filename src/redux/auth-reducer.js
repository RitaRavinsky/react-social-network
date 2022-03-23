import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth:false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth:true,
      };

      case TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching:action.isFetching
        }

    default:
      return state;
  }
};

//action creators
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching,
});


// thunks 
export const authMe = () => {
  return (dispatch) => {
    // show loader
    dispatch(toggleIsFetching(true));
    // ajax
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
    //hide loader
    setTimeout(function () {
      dispatch(toggleIsFetching(false));
    }, 500);
    
  }
}

export default authReducer;
