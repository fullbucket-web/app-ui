// @flow
import * as types from '../constants/actionTypes';

export const addComment = (payload: Object) => {
  return { type: types.ADD_COMMENT, payload };
};

export const likeComment = (payload: Object) => {
  return { type: types.LIKE_COMMENT, payload };
};

export const deleteComment = (payload: Object) => {
  return { type: types.DELETE_COMMENT, payload };
};

export const replyToComment = (payload: Object) => {
  return { type: types.REPLY_TO_COMMENT, payload };
};
