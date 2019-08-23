import React from 'react';

import { AppNavigator } from './src/navigation/AppNavigator';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as AlbumsProvider } from './src/context/AlbumsContext';
import { setNavigator } from './src/navigation';

export default function App(): JSX.Element {
  return (
    <AlbumsProvider>
      <AuthProvider>
        <AppNavigator
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </AlbumsProvider>
  );
}
