// @flow
import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';

const BetaMessage = () => {
  return (
    <Hero color="danger" className="welcome-hero">
      <Heading subtitle size={6}>
        This site is in beta, so watch out for bugs!
      </Heading>
    </Hero>
  );
};

export default BetaMessage;
