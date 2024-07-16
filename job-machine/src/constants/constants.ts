import { CategoryData, Data, DataToogle } from '@/interfaces/interfaces';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNOUT = 'SIGNOUT';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
export const SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
export const SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
export const ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
export const SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
export const ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
export const ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const SET_PROFILE = 'SET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const LOADING = 'LOADING';
export const IS_AUTHENTICATING = 'IS_AUTHENTICATING';
export const SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';

export const START_LOADING = 'START_LOADING';
export const FETCH_LOADING = 'FETCH_LOADING';

export const dataSignIn: Data = {
  title: 'Sign In',
  subTitle1: 'or use your email password',
  fieldInput: [
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password' }
  ],
  subTitle2: 'Forget Your Password',
  contentButton: 'Sign In'
};

export const dataSignUp: Data = {
  title: 'Create Account',
  subTitle1: 'or use your email for register action',
  fieldInput: [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password' }
  ],
  subTitle2: undefined,
  contentButton: 'Create Register'
};

export const dataToogleSignIn: DataToogle = {
  titleToogle: 'Hello, Friend!',
  subTitleToogle: 'Enter your Personal details to use all of site feature',
  buttonToogle: 'Sign In'
};

export const dataToogleSignUp: DataToogle = {
  titleToogle: 'Welcome Back!',
  subTitleToogle: 'Enter your Personal details to use all of site feature',
  buttonToogle: 'Sign Up'
};

export const SIGN_IN = 'sign-in';
export const SIGN_UP = 'sign-up';

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const originData: CategoryData[] = [
  {
    key: '1',
    name: 'Lap trinh vien',
    description: '10 Downing Street',
    count: 10
  },
  {
    key: '3',
    name: 'Lap trinh vien',
    description: '10 Downing Street',
    count: 10
  },
  {
    key: '4',
    name: 'Lap trinh vien',
    description: '10 Downing Street',
    count: 10
  },
  {
    key: '5',
    name: 'Lap trinh vien',
    description: '10 Downing Street',
    count: 10
  },
  {
    key: '2',
    name: 'Lap trinh vien',
    description: '10 Downing Street',
    count: 10
  }
];

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    editable: true
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    editable: true
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
    key: 'slug',
    editable: true
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count'
  }
];

export const COLOR = 'linear-gradient(180deg, #C5091F 0%, #870413 100%)';

export const PATH_URL_ROUTER = {
  login: '/login',
  home: '/',
  post: '/post',
  category: '/category',
  historyVideo: '/history'
};

export const PATH_URL_AUTH_API = {
  login: 'api/v1/auth/login',
  logout: 'api/v1/auth/logout',
  refreshToken: 'api/v1/auth/refresh'
};

export const PATH_URL_POST_API = {
  delete: 'api/v1/admin/post/delete',
  active: 'api/v1/admin/post/active',
  allpost: 'api/v1/admin/post'
};

// export const SIGHTENGINE = {
//   workflow: process.env.REACT_APP_SIGHTENGINE_WORKFLOW,
//   api_user: process.env.REACT_APP_SIGHTENGINE_API_USER,
//   api_secret: process.env.REACT_APP_SIGHTENGINE_API_SECRET
// };

export const SIGHTENGINE = {
  workflow: 'wfl_g5IE1sK45fvgtphGpahhV',
  api_user: '268568153',
  api_secret: 'Rqcp8zjVp4tcwjoygwfEmUwWuqiipqrk'
};

export const URL_IMG_API_SIGHTENGINE =
  'https://api.sightengine.com/1.0/check-workflow.json';

export const URL_VIDEO_API_SIGHTENGINE =
  'https://api.sightengine.com/1.0/video/check-workflow-sync.json';
