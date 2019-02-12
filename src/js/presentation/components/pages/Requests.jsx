import React from 'react';
import SelectionTabs from '../SelectionTabs';
import RequestsViewContainer from '../../../redux/containers/RequestsViewContainer';

const Homepage = () => {
  return (
    <div>
      <SelectionTabs />
      <RequestsViewContainer />
    </div>
  );
};

export default Homepage;
