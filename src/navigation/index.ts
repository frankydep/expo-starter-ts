import {
  NavigationActions,
  NavigationParams,
  NavigationContainerComponent,
} from 'react-navigation';

/**
 * Navigation routes
 */
export enum Routes {
  AuthLoading = 'AuthLoading',
  Auth = 'Auth',
  SignIn = 'SignIn',
  App = 'App',
  Home = 'Home',
  Details = 'Details',
  Settings = 'Settings',
}

let navigator: NavigationContainerComponent;

export const setNavigator = (nav: NavigationContainerComponent) => {
  navigator = nav;
};

export const navigate = (routeName: Routes, params?: NavigationParams) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};
