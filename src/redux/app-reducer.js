import { authAPI } from "../api/api";
import { authMe } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

//action creators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

// thunks
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
  };
};

export default appReducer;
