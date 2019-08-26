import React, { useContext } from 'react';
import { Button } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { Context as AuthContext } from '../../context/AuthContext';

export const SettingsScreen: NavigationScreenComponent = (): JSX.Element => {
  const { signout } = useContext(AuthContext);
  return <Button title="Sign out" onPress={signout} />;
};
