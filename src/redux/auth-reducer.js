import { authAPI } from "../api/api";

const SET_USER_DATA = "rita/auth/SET_USER_DATA";

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

// thunks
export const authMe = () => async (dispatch) => {
  const data = await authAPI.authMe();

  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe = false) =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);

    if (data.data.resultCode === 0) {
      dispatch(authMe());
    }
  };

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.data.resultCode === 0) {
    dispatch(authMe(null, null, null, false));
  }
};

export default authReducer;
