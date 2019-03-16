// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Container from 'react-bulma-components/lib/components/container';
import Notifications from 'react-notify-toast';
import store from './redux/store/store';

import AppRouter from './core/router/AppRouter';

import '../scss/App.scss';

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <Notifications />
      <Container className="content-container" fluid>
        <AppRouter />
      </Container>
    </Provider>,
    root
  );
}
