import Axios from 'axios';
import { Dispatch } from 'react';

import { createDataContext } from '../context/createDataContext';

const url = 'https://jsonplaceholder.typicode.com/photos';

export interface Album {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

enum ActionTypes {
  FetchAlbums,
}

interface FetchAlbumsAction {
  type: ActionTypes.FetchAlbums;
  payload: Album[];
}

type Action = FetchAlbumsAction;

// create the reducer
const albumsReducer = (state: Album[], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchAlbums:
      return action.payload;

    default:
      return state;
  }
};

// create the action
const fetchAlbums = (dispatch: Dispatch<FetchAlbumsAction>) => async () => {
  const response = await Axios.get<Album[]>(url);
  dispatch({
    type: ActionTypes.FetchAlbums,
    payload: response.data,
  });
};

export const { Context, Provider } = createDataContext(
  albumsReducer,
  { fetchAlbums },
  [],
);
