import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Routes } from '.';
import { AuthStackNavigator } from './AuthStackNavigator';
import { AppTabNavigator } from './AppTabNavigator';
import { AuthLoadingScreen } from '../screens/AuthLoadingScreen';

/**
 * Root Navigator container.
 * Contains a switch for the auth flow and the app's main flow
 */
export const AppNavigator = createAppContainer(
  createSwitchNavigator({
    [Routes.AuthLoading]: AuthLoadingScreen,
    [Routes.App]: AppTabNavigator,
    [Routes.Auth]: AuthStackNavigator,
  }),
);
