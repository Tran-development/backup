import { Reducer } from 'redux';
import { authInitialState } from '@/constants/index';
import { AuthAction, AuthActionTypes, AuthState } from '@/interfaces';

const authReducer: Reducer<AuthState, AuthAction> = (
  state = authInitialState,
  action
) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGIN_FAILURE:
    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isLoggedIn: false,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
