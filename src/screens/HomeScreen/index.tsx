import React, { useContext } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationScreenComponent, NavigationEvents } from 'react-navigation';

import { Routes } from '../../navigation';

import { Context as AlbumContext, Album } from '../../context/AlbumsContext';

export const HomeScreen: NavigationScreenComponent = ({
  navigation,
}): JSX.Element => {
  const {
    state,
    fetchAlbums,
  }: { state: Album[]; fetchAlbums: () => {} } = useContext(AlbumContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchAlbums} />
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Details, { album: item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
      />
    </>
  );
};
