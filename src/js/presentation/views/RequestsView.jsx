/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';
import RequestCard from '../components/cards/RequestCard';

type Request = {
  content: string,
  title: string,
  user: string,
  points: number
};

type Props = {
  requests: Request
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
