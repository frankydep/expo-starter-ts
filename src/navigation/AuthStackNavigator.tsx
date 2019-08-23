import { createStackNavigator } from 'react-navigation';

import { SignInScreen } from '../screens/SignInScreen';
import { Routes } from '.';

export const AuthStackNavigator = createStackNavigator({
  // [Routes.SocialSignIn]: SocialSignInScreen,
  // [Routes.PhoneSignIn]: PhoneSignInScreen,
  [Routes.SignIn]: SignInScreen,
});
