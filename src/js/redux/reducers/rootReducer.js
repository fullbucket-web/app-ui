// @flow
import { combineReducers } from 'redux';
import requestsReducer from './requestsReducer';
import editorReducer from './editorReducer';
import newsReducer from './newsReducer';
import userSessionReducer from './userSessionReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  requests: requestsReducer,
  editor: editorReducer,
  news: newsReducer,
  userSession: userSessionReducer,
  ui: uiReducer
});
