import { combineReducers } from 'redux';
import { photosReducer } from './photos';
import { Photo } from '../actions/photos';

export interface StoreState {
  photos: Photo[];
}

export const reducers = combineReducers<StoreState>({
  photos: photosReducer,
});
