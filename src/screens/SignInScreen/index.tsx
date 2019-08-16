import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import { Routes } from '../../navigation';

interface SignInScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class SignInScreen extends React.Component<SignInScreenProps> {
  signInAsync = async () => {
    const { navigation } = this.props;
    await AsyncStorage.setItem('token', 'abc');
    navigation.navigate(Routes.App);
  };

  render() {
    return (
      <>
        <Button title="Sign in" onPress={this.signInAsync} />
      </>
    );
  }
}
