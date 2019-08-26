import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { styles } from './styles';
import { Context as AuthContext } from '../../context/AuthContext';

export const AuthLoadingScreen: NavigationScreenComponent = (): JSX.Element => {
  const { checkSignin } = useContext(AuthContext);

  useEffect(() => {
    checkSignin();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};
