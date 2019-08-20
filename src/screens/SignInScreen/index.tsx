import React from 'react';
import { Button } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import { Routes } from '../../navigation';
import { useSignInHandler } from '../../hooks/useAuth';

interface SignInScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const SignInScreen = ({
  navigation,
}: SignInScreenProps): JSX.Element => {
  const [signInAsync] = useSignInHandler();

  return (
    <Button
      title="Sign in"
      onPress={() => signInAsync(() => navigation.navigate(Routes.App))}
    />
  );
};
