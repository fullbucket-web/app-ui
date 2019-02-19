// @flow
import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import NewsContainer from '../../../redux/containers/NewsContainer';
import { HOMEPAGE_GREETING } from '../../../core/constants/uiStrings';
import ViewPostContainer from '../../../redux/containers/ViewPostContainer';

const Homepage = () => {
  return (
    <div>
      <Heading size={2}>{HOMEPAGE_GREETING}</Heading>
      <Columns>
        <Columns.Column size="two-thirds">
          <NewsContainer />
          <ViewPostContainer />
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Homepage;
