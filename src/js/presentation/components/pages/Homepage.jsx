import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import News from '../News';

const NewsData = [
  {
    id: 1,
    title: 'Welcome New Team Members!'
  }
];

const Homepage = () => {
  return (
    <div>
      <Heading size={2}>Home</Heading>
      <Columns>
        <Columns.Column size="two-thirds">
          <Heading size={3}>News</Heading>
          <News news={NewsData} />
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Homepage;
