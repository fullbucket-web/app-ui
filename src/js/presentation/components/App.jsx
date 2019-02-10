import React from 'react';
import FullBucketNavbar from './Navbar';
import SelectionTabs from './SelectionTabs';
import BetaMessage from './BetaMessage';
import RequestsViewContainer from '../../redux/containers/RequestsViewContainer';

const App = () => {
  return (
    <div>
      <FullBucketNavbar />
      <BetaMessage />
      <SelectionTabs />
      <RequestsViewContainer />
    </div>
  );
};

export default App;
