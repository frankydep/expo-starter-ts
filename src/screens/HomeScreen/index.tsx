import React, { useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { connect } from 'react-redux';

import { Routes } from '../../navigation';
import { StoreState } from '../../reducers';
import { fetchPhotos, Photo } from '../../actions/photos';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  photos: Photo[];
  fetchPhotos: Function;
}

const _HomeScreen = ({
  navigation,
  photos,
  fetchPhotos,
}: HomeScreenProps): JSX.Element => {
  useEffect(() => {
    fetchPhotos();
  });
  return (
    <>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Details, { photo: item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
      />
    </>
  );
};

const mapStateToProps = ({ photos }: StoreState) => ({
  photos,
});

export const HomeScreen = connect(
  mapStateToProps,
  { fetchPhotos },
)(_HomeScreen);
