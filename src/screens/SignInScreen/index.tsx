import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { NavigationScreenComponent } from 'react-navigation';

import { styles } from './styles';
import { Context as AuthContext } from '../../context/AuthContext';

export const SignInScreen: NavigationScreenComponent = (): JSX.Element => {
  const { signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={signin} />
    </View>
  );
};

SignInScreen.navigationOptions = {
  header: null,
};
