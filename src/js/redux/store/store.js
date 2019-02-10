// @flow
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);
window.console.log(store.getState());

export default store;
