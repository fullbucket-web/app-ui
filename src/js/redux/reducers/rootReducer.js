// @flow
import { combineReducers } from 'redux';
import requestsReducer from './requestsReducer';

export default combineReducers({
  requests: requestsReducer
});
