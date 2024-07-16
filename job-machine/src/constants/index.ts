import { AuthState } from '@/interfaces';

export const authInitialState: AuthState = {
  user: null,
  error: null,
  isLoggedIn: false,
};
