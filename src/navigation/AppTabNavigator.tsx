import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { Routes } from '.';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const HomeStackNavigator = createStackNavigator(
  {
    [Routes.Home]: HomeScreen,
    [Routes.Details]: DetailsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const title: string = navigation.state.routeName;
      return {
        title,
      };
    },
  },
);

const SettingsStackNavigator = createStackNavigator(
  {
    [Routes.Settings]: SettingsScreen,
    // extra settings screens here, like:
    // [Routes.ThemeSet]: ThemeSettingsScreen,
    // [Routes.LanguageSet]: LanguageSettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const title: string = navigation.state.routeName;
      return {
        title,
      };
    },
  },
);

/**
 * Tab navigation with nested stacks
 */
export const AppTabNavigator = createBottomTabNavigator({
  [Routes.Home]: HomeStackNavigator,
  [Routes.Settings]: SettingsStackNavigator,
});
