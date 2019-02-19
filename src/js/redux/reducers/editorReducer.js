// @flow
// import * as types from '../constants/actionTypes';
import { editorState } from '../_devState';

type State = {};

type Action = {
  type: string,
  payload: any
};

const editorReducer = (state: State = editorState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default editorReducer;
