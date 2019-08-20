import { AsyncStorage } from 'react-native';

export type SignInAsync = (callback?: Function) => Promise<void>;
export type SignOutAsync = (callback?: Function) => Promise<void>;
export type CheckAuthAsync = (
  callback?: (token: string) => any,
) => Promise<string>;

export interface IAuth {
  signInAsync: SignInAsync;
  signOutAsync: SignOutAsync;
  checkAuthAsync: CheckAuthAsync;
}

/**
 * Basic auth via `AsyncStorage`. The class has a `signIn`, `signOut` and `checkAuth` to manipulate or read the token.
 */
export class Auth implements IAuth {
  async signInAsync(callback?: Function) {
    await AsyncStorage.setItem('token', 'abc');
    if (callback) callback();
  }
  async signOutAsync(callback?: Function) {
    await AsyncStorage.removeItem('token');
    if (callback) callback();
  }
  async checkAuthAsync(callback?: Function) {
    const token = await AsyncStorage.getItem('token');
    if (callback) return callback(token);
  }
}
