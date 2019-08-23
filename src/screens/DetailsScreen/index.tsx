import React from 'react';
import { View, Text, Image } from 'react-native';

import { NavigationScreenComponent } from 'react-navigation';
import { Album } from '../../context/AlbumsContext';

export const DetailsScreen: NavigationScreenComponent = ({
  navigation,
}): JSX.Element => {
  const album: Album = navigation.getParam('album');

  return (
    <View>
      <Text>{album.title}</Text>
      <Text>{album.albumId}</Text>
      <Image source={{ uri: album.url }} style={{ width: 300, height: 300 }} />
    </View>
  );
};
