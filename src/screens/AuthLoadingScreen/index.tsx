import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Routes } from '../../navigation';
import { styles } from './styles';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { useCheckAuthHandler } from '../../hooks/useAuth';

interface AuthLoadingScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const AuthLoadingScreen = ({
  navigation,
}: AuthLoadingScreenProps): JSX.Element => {
  // checks for token
  const [checkAuthAsync] = useCheckAuthHandler();

  useEffect(() => {
    checkAuthAsync((token: string) =>
      navigation.navigate(token ? Routes.App : Routes.Auth),
    );
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};
