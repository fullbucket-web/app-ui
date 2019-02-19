// @flow
import * as types from '../constants/actionTypes';

export const openPostModal = (payload: Object) => {
  return { type: types.OPEN_POST_MODAL, payload };
};

export const closePostModal = (payload: Object) => {
  return { type: types.CLOSE_POST_MODAL, payload };
};
