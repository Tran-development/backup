import { take, call, put } from 'redux-saga/effects';
import {
  LoginSuccessAction,
  LogoutAction,
  RegisterSuccessAction,
} from '@/interfaces';
import { fakeCallApi, fakeCallApiRegister } from '@/helper';
import { SagaIterator } from 'redux-saga';
import {
  loginFail,
  loginSuccess,
  logout,
  registerFail,
  registerSuccess,
} from '@/redux/actions/authAction';
import { AuthApi } from '@/api/auth/AuthApi';

function* loginSaga(action: LoginSuccessAction): SagaIterator {
  try {
    const { email, password } = action.payload;

    const response = yield call(AuthApi.apiLogin, { email, password });
    const user = response.data;
    yield put(loginSuccess(user));
  } catch (error: any) {
    yield put(loginFail(error.message));
  }
}

function* registerSaga(action: RegisterSuccessAction): SagaIterator {

  try {
    const { name, email, password } = action.payload;
    const response = yield call(fakeCallApiRegister, {
      name,
      email,
      password,
    });
    const user = response.data;
    yield put(registerSuccess(user));
  } catch (error: any) {
    yield put(registerFail(error.message));
  }
}

function* authSaga(): SagaIterator {
  while (true) {
    const action = yield take(['LOGIN_REQUEST', 'REGISTER_REQUEST', 'LOGOUT']);
    if (action.type === 'LOGIN_REQUEST') {
      yield call(loginSaga, action);
    } else if (action.type === 'REGISTER_REQUEST') {
      yield call(registerSaga, action);
    } else if (action.type === 'LOGOUT') {
      yield call(AuthApi.apiLogout);
      yield put(logout);
    }
  }
}

export default authSaga;
