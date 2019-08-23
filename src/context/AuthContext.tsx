import { createDataContext } from './createDataContext';
import { Auth } from '../helpers/Auth';
import { Routes, navigate } from '../navigation';
import { Dispatch } from 'react';

enum ActionTypes {
  Signin,
  Signout,
  CheckAuth,
}

interface SigninAction {
  type: ActionTypes.Signin;
  payload: string;
}

interface SignoutAction {
  type: ActionTypes.Signout;
}

type Action = SigninAction | SignoutAction;

interface State {
  token: string;
}

// create an Auth instance
const auth = new Auth();

// create auth reducer
const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.Signin:
      return { token: action.payload };
    case ActionTypes.Signout:
      return { token: null };
    default:
      return state;
  }
};

// create actions
// check auth status
const checkSignin = (dispatch: Dispatch<SigninAction>) => async () => {
  auth.checkAuthAsync((token: string) => {
    if (token) {
      dispatch({
        type: ActionTypes.Signin,
        payload: token,
      });
      navigate(Routes.App);
    } else {
      navigate(Routes.Auth);
    }
  });
};

// sign in action
const signin = (dispatch: Dispatch<SigninAction>) => async () => {
  auth.signInAsync(() => {
    dispatch({
      type: ActionTypes.Signin,
      payload: 'abc',
    });
    navigate(Routes.App);
  });
};

// sign out action
const signout = (dispatch: Dispatch<SignoutAction>) => async () => {
  auth.signOutAsync(() => {
    dispatch({
      type: ActionTypes.Signout,
    });
    navigate(Routes.Auth);
  });
};

// Create authContext
export const { Context, Provider } = createDataContext(
  authReducer,
  { checkSignin, signin, signout },
  { token: null },
);
