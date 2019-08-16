import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { Routes } from '../../navigation';

interface SettingsScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class SettingsScreen extends React.Component<SettingsScreenProps> {
  signOutAsync = async () => {
    const { navigation } = this.props;
    await AsyncStorage.removeItem('token');
    navigation.navigate(Routes.Auth);
  };
  render() {
    return (
      <>
        <Button title="Sign out" onPress={this.signOutAsync} />
      </>
    );
  }
}
