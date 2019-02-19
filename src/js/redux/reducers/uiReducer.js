// @flow
// import * as types from '../constants/actionTypes';
import { uiState } from '../_devState';
import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from '../constants/actionTypes';

type State = {};

type Action = {
  type: string,
  payload: any
};

const uiReducer = (state: State = uiState, action: Action): State => {
  switch (action.type) {
    case OPEN_POST_MODAL:
      return Object.assign({}, state, {
        postModal: {
          active: true,
          postId: action.payload
        }
      });
    case CLOSE_POST_MODAL:
      return Object.assign({}, state, {
        postModal: {
          active: false,
          postId: ''
        }
      });
    default:
      return state;
  }
};

export default uiReducer;
