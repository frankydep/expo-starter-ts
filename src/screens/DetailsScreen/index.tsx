import React from 'react';
import { View, Text, Image } from 'react-native';
import { Photo } from '../../actions/photos';
import { NavigationScreenProp } from 'react-navigation';

interface Params {
  photo: Photo;
}

interface DetailsScreenProps {
  navigation: NavigationScreenProp<Params>;
}

// I can pass props to the component with this method
export const DetailsScreen = ({
  navigation,
}: DetailsScreenProps): JSX.Element => {
  const photo: Photo = navigation.getParam('photo');

  return (
    <View>
      <Text>{photo.title}</Text>
      <Text>{photo.albumId}</Text>
      <Image source={{ uri: photo.url }} style={{ width: 300, height: 300 }} />
    </View>
  );
};
