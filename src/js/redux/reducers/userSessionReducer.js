// @flow
// import * as types from '../constants/actionTypes';
import { userSessionState } from '../_devState';

type State = {};

type Action = {
  type: string,
  payload: any
};

const userSessionReducer = (state: State = userSessionState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userSessionReducer;
