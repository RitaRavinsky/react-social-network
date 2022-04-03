import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

//action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
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
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
    //hide loader
    setTimeout(function () {
      dispatch(toggleIsFetching(false));
    }, 500);
  };
};

export const login = ( email, password, rememberMe = false ) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.data.resultCode === 0) {
        dispatch(authMe());
      }
    });
  };
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    debugger
    if (data.data.resultCode === 0) {
      dispatch(authMe(null, null, null, false));
    }
  });
};

export default authReducer;
