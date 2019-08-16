import thunk from 'redux-thunk';
import axios from 'axios';

import { ActionTypes } from './types';
import { Dispatch } from 'redux';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface FetchPhotosAction {
  type: ActionTypes.fetchPhotos;
  payload: Photo[];
}

const url = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPhotos = () => async (dispatch: Dispatch) => {
  const response = await axios.get<Photo[]>(url);
  dispatch<FetchPhotosAction>({
    type: ActionTypes.fetchPhotos,
    payload: response.data,
  });
};
