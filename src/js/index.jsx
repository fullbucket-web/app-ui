// @flow
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Loader from 'react-bulma-components/lib/components/loader';
import Notifications from 'react-notify-toast';
import store from './redux/store/store';
import Homepage from './presentation/components/pages/Homepage';
import FullBucketNavbar from './presentation/components/Navbar';
import '../scss/App.scss';
import * as routes from './core/constants/routing';
// import BetaMessage from './presentation/components/BetaMessage';
const EditorContainer = React.lazy(() => import('./redux/containers/EditorViewContainer'));
const ViewPostContainer = React.lazy(() => import('./redux/containers/ViewPostContainer'));
const RequestsView = React.lazy(() => import('./presentation/components/views/RequestsView'));
const LegalView = React.lazy(() => import('./presentation/components/views/LegalView'));

const root = document.getElementById('app');
const loaderStyle = {
  width: 300,
  height: 300,
  border: '4px solid blue',
  borderTopColor: 'transparent',
  borderRightColor: 'transparent'
};

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <FullBucketNavbar />
          {/* <BetaMessage  /> */}
          <Notifications />
          <Container className="content-container" fluid>
            <Suspense fallback={<Loader style={loaderStyle} />}>
              <Route path={routes.HOMEPAGE_ROUTE} exact component={Homepage} />
              <Route path={routes.REQUESTS_ROUTE} component={RequestsView} />
              <Route path={routes.EDITOR_ROUTE} component={EditorContainer} />
              <Route path={routes.VIEW_POST_ROUTE} component={ViewPostContainer} />
              <Route path={routes.LEGAL_ROUTE} component={LegalView} />
            </Suspense>
          </Container>
        </div>
      </Router>
    </Provider>,
    root
  );
}
