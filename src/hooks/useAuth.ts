import {
  Auth,
  SignInAsync,
  SignOutAsync,
  CheckAuthAsync,
} from '../helpers/Auth';

const auth = new Auth();

export const useSignInHandler = (): [SignInAsync] => {
  return [auth.signInAsync];
};

export const useSignOutHandler = (): [SignOutAsync] => {
  return [auth.signOutAsync];
};

export const useCheckAuthHandler = (): [CheckAuthAsync] => {
  return [auth.checkAuthAsync];
};
