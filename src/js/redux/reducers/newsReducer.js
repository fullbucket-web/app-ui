// @flow
// import * as types from '../constants/actionTypes';
import { newsState } from '../_devState';

type State = {};

type Action = {
  type: string,
  payload: any
};

const newsReducer = (state: State = newsState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newsReducer;
