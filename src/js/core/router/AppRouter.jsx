import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from 'react-bulma-components/lib/components/loader';
import * as routes from '../constants/routing';
import loaderStyle from './LoaderStyle';
import FullBucketNavbar from '../../presentation/components/Navbar';

const HomeView = React.lazy(() => import('../../presentation/views/HomeView'));
const EditorContainer = React.lazy(() => import('../../redux/containers/EditorViewContainer'));
const PostViewContainer = React.lazy(() => import('../../redux/containers/PostViewContainer'));
const RequestsView = React.lazy(() => import('../../presentation/views/RequestsView'));
const LegalView = React.lazy(() => import('../../presentation/views/LegalView'));
const LoginView = React.lazy(() => import('../../presentation/views/LoginView'));

const AppRouter = () => {
  return (
    <Router>
      <div>
        <FullBucketNavbar />
        <Suspense fallback={<Loader style={loaderStyle} />}>
          <Route path={routes.HOMEPAGE_ROUTE} exact component={HomeView} />
          <Route path={routes.REQUESTS_ROUTE} component={RequestsView} />
          <Route path={routes.EDITOR_ROUTE} component={EditorContainer} />
          <Route path={routes.VIEW_POST_ROUTE} component={PostViewContainer} />
          <Route path={routes.LEGAL_ROUTE} component={LegalView} />
          <Route path={routes.LOGIN_ROUTE} component={LoginView} />
        </Suspense>
      </div>
    </Router>
  );
};

export default AppRouter;
