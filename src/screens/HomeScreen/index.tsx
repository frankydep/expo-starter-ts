import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
  NavigationScreenComponent,
} from 'react-navigation';
import { connect } from 'react-redux';

import { Routes } from '../../navigation';
import { StoreState } from '../../reducers';
import { Photo, fetchPhotos } from '../../actions/photos';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  photos: Photo[];
  fetchPhotos: Function;
}

class _HomeScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    const { fetchPhotos } = this.props;
    fetchPhotos();
  }

  onItemPress = (photo: Photo): void => {
    const { navigation } = this.props;
    navigation.navigate(Routes.Details, { photo });
  };

  keyExtractor = (item: Photo): string => `${item.id}`;

  renderItem = ({ item }: { item: Photo }): JSX.Element => {
    return (
      <TouchableOpacity onPress={() => this.onItemPress(item)}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { photos } = this.props;
    return (
      <>
        {photos && photos.length ? (
          <React.Fragment>
            <FlatList
              data={photos}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </React.Fragment>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = ({ photos }: StoreState): { photos: Photo[] } => ({
  photos,
});
// HomeScreen type any or NavigationScreenComponent or else?
export const HomeScreen = connect(
  mapStateToProps,
  { fetchPhotos },
)(_HomeScreen);
