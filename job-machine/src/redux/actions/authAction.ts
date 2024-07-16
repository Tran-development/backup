import {
  AuthActionTypes,
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutAction,
  RegisterFailureAction,
  RegisterRequestAction,
  RegisterSuccessAction,
} from '@/interfaces';
import { FormLoginType, FormRegisterType } from '@/interfaces/interfaces';

export const loginRequest = (user: FormLoginType): LoginRequestAction => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: user,
});

export const loginSuccess = (user: FormRegisterType): LoginSuccessAction => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error: string): LoginFailureAction => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const registerRequest = (
  user: FormRegisterType
): RegisterRequestAction => ({
  type: AuthActionTypes.REGISTER_REQUEST,
  payload: user,
});

export const registerSuccess = (
  user: FormRegisterType
): RegisterSuccessAction => ({
  type: AuthActionTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error: string): RegisterFailureAction => ({
  type: AuthActionTypes.REGISTER_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
});
