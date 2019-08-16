import { Photo } from '../actions/photos';
import { Action, ActionTypes } from '../actions/types';

export const photosReducer = (state: Photo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchPhotos:
      return action.payload;

    default:
      return state;
  }
};
