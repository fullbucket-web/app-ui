// @flow
import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import NewsContainer from '../../redux/containers/NewsContainer';
import { HOMEPAGE_GREETING } from '../../core/constants/uiStrings';
import PostViewContainer from '../../redux/containers/PostViewContainer';

const Homepage = () => {
  return (
    <div>
      <Heading size={2}>{HOMEPAGE_GREETING}</Heading>
      <Columns>
        <Columns.Column size="two-thirds">
          <NewsContainer />
          <PostViewContainer />
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Homepage;
