import React from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';

import { Routes } from '../../navigation';
import { styles } from './styles';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface AuthLoadingScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class AuthLoadingScreen extends React.Component<AuthLoadingScreenProps> {
  constructor(props: AuthLoadingScreenProps) {
    super(props);
    // setTimeout for auth testing purpose
    setTimeout(() => {
      this._bootStrapAsync();
    }, 0);
  }

  _bootStrapAsync = async () => {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem('token');
    navigation.navigate(token ? Routes.App : Routes.Auth);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
