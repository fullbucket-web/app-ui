/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';
import RequestCard from '../cards/RequestCard';

type Props = {
  requests: Object
};

const RequestsView = (props: Props) => {
  const { requests } = props;
  const renderedCards = [];
  Object.values(requests).forEach(request => {
    renderedCards.push(<RequestCard request={request} />);
  });
  return renderedCards;
};

export default RequestsView;
