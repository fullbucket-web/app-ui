// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store/store';
import Homepage from './presentation/components/pages/Homepage';
import FullBucketNavbar from './presentation/components/Navbar';
import BetaMessage from './presentation/components/BetaMessage';
import Editor from './presentation/components/pages/Editor';
import '../scss/App.scss';

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <FullBucketNavbar />
          <BetaMessage />
          <div className="content-container">
            <Route path="/" exact component={Homepage} />
            <Route path="/editor" component={Editor} />
          </div>
        </div>
      </Router>
    </Provider>,
    root
  );
}
