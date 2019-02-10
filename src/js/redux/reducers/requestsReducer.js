// @flow
// import * as types from '../constants/actionTypes';
import { postsState } from '../_devState';

type State = {};

type Action = {
  type: string,
  payload: any
};

const requestsReducer = (state: State = postsState.requests, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default requestsReducer;
