import React from 'react';
import { Button } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import { Routes } from '../../navigation';
import { useSignOutHandler } from '../../hooks/useAuth';

interface SettingsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const SettingsScreen = ({
  navigation,
}: SettingsScreenProps): JSX.Element => {
  const [signOutAsync] = useSignOutHandler();
  return (
    <Button
      title="Sign out"
      onPress={() => signOutAsync(() => navigation.navigate(Routes.Auth))}
    />
  );
};
